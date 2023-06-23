"use client";

import { Input } from "@lms/components/osprey/ui/input/view/Input";
import {
  LspSourceOptions,
  useEmployeeSearchStore,
  useLspDetailsStore,
  useSelectedLspSource,
} from "@lms/utilities/stores/lsp-details-store";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import axios from "axios";

type EmployeeSearch = {
  employeeId: string;
  fullName: string;
  positionTitle: string;
};

export const PersonalInformation: FunctionComponent = () => {
  const selectedLspSource = useSelectedLspSource((state) => state.selectedLspSource);

  const fname = useLspDetailsStore((state) => state.firstName);
  const setFname = useLspDetailsStore((state) => state.setFirstName);

  const mname = useLspDetailsStore((state) => state.middleName);
  const setMname = useLspDetailsStore((state) => state.setMiddleName);

  const lname = useLspDetailsStore((state) => state.lastName);
  const setLname = useLspDetailsStore((state) => state.setLastName);

  const experience = useLspDetailsStore((state) => state.experience);
  const setExperience = useLspDetailsStore((state) => state.setExperience);

  const intro = useLspDetailsStore((state) => state.introduction);
  const setIntro = useLspDetailsStore((state) => state.setIntroduction);

  // const [employeeId, setEmployeeId] = useState<string>();
  // const [employeePds, setEmployeePds] = useState<any>();
  // const [searchInput, setSearchInput] = useState("");
  const { employeeId, setEmployeeId, employeePds, setEmployeePds, searchInput, setSearchInput } =
    useEmployeeSearchStore();

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<EmployeeSearch>({} as EmployeeSearch);

  const onSearch = (value: string) => {
    setSearch(value);
  };

  const debounce = (fn: Function) => {
    let timer: NodeJS.Timer | null;
    return (...args: any[]) => {
      //setIsSearching(true);
      const context = this;
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        //setIsSearching(false);
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  // http://172.20.110.45:4001/api/pds/v2/
  // http://172.20.110.45:4003/api/employees/name?value=

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(debounce(onSearch), []);

  /**
   *  get employee names
   */
  const { data } = useQuery({
    queryKey: ["employee-names", search],
    queryFn: async () => {
      const { data } = await axios.get(`http://172.20.110.45:4003/api/employees/name?value=${search}`);
      return data as EmployeeSearch[];
    },
    enabled: search !== "",
  });

  useQuery({
    queryKey: ["employee-pds", employeeId],
    queryFn: async () => {
      const { data } = await axios.get(`http://172.20.110.45:4001/api/pds/v2/${employeeId}`);
      setEmployeePds(data);
      return data;
    },
    enabled: !!employeeId,
  });

  useEffect(() => {
    setFname(employeePds?.personalInfo.firstName as string);
    setMname(employeePds?.personalInfo.middleName as string);
    setLname(employeePds?.personalInfo.lastName as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeId, employeePds]);

  return (
    <>
      {selectedLspSource?.name === LspSourceOptions.INTERNAL && (
        <div className="relative">
          <label htmlFor="search-emp" className="text-xs font-medium text-gray-600">
            Search for employee
          </label>

          <Combobox
            value={selected}
            onChange={(value) => {
              setSelected(value);
              setSearchInput(value?.fullName);
              setEmployeeId(value.employeeId);
            }}
          >
            <Combobox.Input
              value={searchInput}
              as={Input}
              size="small"
              onChange={(e) => {
                debounceFn(e.target.value);
                setSearchInput(e.target.value);
              }}
              placeholder="Search for employee"
              className="placeholder:text-xs"
            />

            <Combobox.Options className="absolute max-h-52 z-[80] overflow-y-auto bg-white w-full border rounded-md shadow-lg shadow-gray-100">
              {data?.length === 0 ? (
                <div className="flex items-center justify-center py-10">No results found</div>
              ) : (
                data?.map((selectedEmp, index) => {
                  return (
                    <Combobox.Option key={index} value={selectedEmp}>
                      {({ active, selected }) => {
                        return (
                          <div
                            role="button"
                            className={`${
                              active ? "bg-indigo-500 text-white" : ""
                            } border-b border-b-gray-100 px-2 py-1`}
                          >
                            <h3>{selectedEmp.fullName}</h3>
                            <p className="text-sm">{selectedEmp.positionTitle}</p>
                          </div>
                        );
                      }}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Combobox>
        </div>
      )}

      <div>
        <label htmlFor="fname" className="text-xs font-medium text-gray-600">
          First Name
        </label>

        <Input
          id="fname"
          defaultValue={selectedLspSource?.name === LspSourceOptions.INTERNAL ? fname : undefined}
          value={selectedLspSource?.name === LspSourceOptions.INTERNAL ? undefined : fname}
          onChange={(e) => (selectedLspSource?.name === LspSourceOptions.INTERNAL ? null : setFname(e.target.value))}
          disabled={selectedLspSource?.name === LspSourceOptions.INTERNAL}
          size="small"
          placeholder="Enter first name"
          className="placeholder:text-xs"
        />
      </div>

      <div>
        <label htmlFor="mname" className="text-xs font-medium text-gray-600">
          Middle Name
        </label>
        <Input
          id="mname"
          defaultValue={selectedLspSource?.name === LspSourceOptions.INTERNAL ? mname : undefined}
          value={selectedLspSource?.name === LspSourceOptions.INTERNAL ? undefined : mname}
          onChange={(e) => (selectedLspSource?.name === LspSourceOptions.INTERNAL ? null : setMname(e.target.value))}
          disabled={selectedLspSource?.name === LspSourceOptions.INTERNAL}
          size="small"
          placeholder="Enter middle name"
          className="placeholder:text-xs"
        />
      </div>

      <div>
        <label htmlFor="lname" className="text-xs font-medium text-gray-600">
          Last Name
        </label>
        <Input
          id="lname"
          defaultValue={selectedLspSource?.name === LspSourceOptions.INTERNAL ? lname : undefined}
          value={selectedLspSource?.name === LspSourceOptions.INTERNAL ? undefined : lname}
          onChange={(e) => (selectedLspSource?.name === LspSourceOptions.INTERNAL ? null : setLname(e.target.value))}
          disabled={selectedLspSource?.name === LspSourceOptions.INTERNAL}
          size="small"
          placeholder="Enter last name"
          className="placeholder:text-xs"
        />
      </div>

      <div>
        <label htmlFor="exp" className="text-xs font-medium text-gray-600">
          Experience
        </label>
        <Input
          id="exp"
          value={Number(experience)}
          onChange={(e) => setExperience(Number(e.target.value))}
          size="small"
          placeholder="Enter number of years"
          className="placeholder:text-xs"
        />
      </div>

      <div className="mt-1">
        <label htmlFor="intro" className="block text-xs font-medium text-gray-600 mb-1">
          Introduction
        </label>
        <textarea
          id="intro"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          rows={2}
          placeholder="Please enter the LSP's preferred introduction here"
          className="w-full py-3 px-4 placeholder:text-gray-300 placeholder:text-xs block resize-none border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </>
  );
};
