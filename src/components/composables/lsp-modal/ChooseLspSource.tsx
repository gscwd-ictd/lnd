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

  const { lspSources, setLspSources } = useLspSourcesStore();

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
            return (
              <p
                className={`${checked ? "bg-blue-500 text-white" : "text-gray-700"}`}
                onClick={() => {
                  setSelectedLspSource(lspSource);
                  setEmployeeId(undefined);
                  setEmployeePds(undefined);
                  setSearchInput("");
                }}
              >
                {lspSource.name}
              </p>
            );
          }}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
