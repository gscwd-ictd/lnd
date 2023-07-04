"use client";

import { RadioGroup } from "@headlessui/react";
import {
  LspSource,
  useEmployeeSearchStore,
  useLspDetailsStore,
  useLspSourcesStore,
  useSelectedLspSource,
} from "@lms/utilities/stores/lsp-details-store";
import { url } from "@lms/utilities/url/api-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, FunctionComponent, useEffect } from "react";

export const ChooseLspSource: FunctionComponent = () => {
  //const setLspType = useLspTypeStore((state) => state.setLspType);
  const setSelectedLspSource = useSelectedLspSource((state) => state.setSelectedLspStore);

  const selectedLspSource = useSelectedLspSource((state) => state.selectedLspSource);

  const { setEmployeeId, setEmployeePds, setSearchInput } = useEmployeeSearchStore();

  const setLspSource = useLspDetailsStore((state) => state.setLspSource);

  const reset = useLspDetailsStore((state) => state.reset);

  const { lspSources, setLspSources } = useLspSourcesStore();

  useEffect(() => {
    if (selectedLspSource === undefined) setSelectedLspSource(lspSources[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lspSources]);

  useEffect(() => {
    setLspSource(selectedLspSource?.id as string);
  }, [selectedLspSource, setLspSource]);

  useQuery({
    queryKey: ["lsp-source", lspSources],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/lsp-sources`);
      setLspSources(data.items);
      return data.items as LspSource[];
    },
    enabled: lspSources?.length === 0,
  });

  return (
    <RadioGroup name="lsp-type">
      <div className="mb-3 mt-5">
        <RadioGroup.Label as="div">
          <h3>Learning Service Provider Source</h3>
          <p className="text-xs text-gray-500">Choose the LSP source from the options below</p>
        </RadioGroup.Label>
      </div>

      {lspSources.map((lspSource, index) => (
        <RadioGroup.Option key={index} value={lspSource.name} as={Fragment}>
          {({ checked }) => {
            // set checked value if lsp source from global store is equal to current name
            checked = selectedLspSource?.name === lspSource.name;

            return (
              <div
                className={`${
                  checked ? "bg-indigo-500 text-white font-medium" : "bg-white text-gray-600"
                } cursor-pointer px-4 py-2 mb-2 border rounded flex items-center justify-between hover:scale-105 transition-transform`}
                onClick={() => {
                  setSelectedLspSource(lspSource);
                  setEmployeeId(undefined);
                  setEmployeePds(undefined);
                  setSearchInput("");
                  reset();
                }}
              >
                <p>{lspSource.name}</p>
                {checked && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            );
          }}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
