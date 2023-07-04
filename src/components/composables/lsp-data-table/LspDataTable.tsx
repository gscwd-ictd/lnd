"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { FunctionComponent, useState } from "react";
import { url } from "@lms/utilities/url/api-url";
import { LearningServiceProvider } from "@lms/utilities/types/lsp";
import * as Tooltip from "@radix-ui/react-tooltip";
import { SlideOver } from "@lms/components/osprey/ui/overlays/slider-over/view/SliderOver";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LspSourceOptions } from "@lms/utilities/stores/lsp-details-store";

const helper = createColumnHelper<LearningServiceProvider>();

const columns = [
  helper.accessor("firstName", {
    header: "Name",
    cell: (info) => (
      <>
        {info.row.original.firstName} {info.row.original.middleName} {info.row.original.lastName}
      </>
    ),
  }),

  helper.accessor("email", {
    header: "Email",
    cell: (info) => info?.getValue()?.toLocaleLowerCase(),
  }),

  helper.accessor("lspSource", {
    header: "Source",
    cell: (info) => (
      <span
        className={`${
          info.getValue() === LspSourceOptions.INTERNAL
            ? "text-purple-600 bg-purple-50 border-purple-100"
            : "text-amber-600 bg-amber-50 border-amber-100"
        } text-xs px-[0.25rem] py-[0.1rem] font-semibold rounded border`}
      >
        {info.getValue()}
      </span>
    ),
    enableSorting: false,
  }),

  helper.accessor("postalAddress", {
    header: "Address",
    cell: (info) => info?.getValue(),
  }),

  helper.accessor("id", {
    header: "Actions",
    enableColumnFilter: false,
    enableSorting: false,
    cell: (info) => (
      <div className="flex items-center gap-2">
        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                className="text-gray-800 rounded transition-colors"
                onClick={(e) => {
                  console.log("edit");
                  e.stopPropagation();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="z-[100] bg-zinc-900/75 px-2 py-1 rounded" sideOffset={4}>
                <span className="text-xs text-white font-semibold">Update</span>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <Tooltip.Provider delayDuration={300}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                className="text-gray-800 rounded transition-colors"
                onClick={(e) => {
                  console.log("remove");
                  e.stopPropagation();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="z-[100] bg-zinc-900/75 px-2 py-1 rounded" sideOffset={4}>
                <span className="text-xs text-white font-semibold">Remove</span>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    ),
  }),
];

export const LspDataTable: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [lspId, setLspId] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["lsp-details", lspId],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/lsp-individual-details/${lspId}`);
      return data;
    },
  });

  return (
    <>
      <SlideOver open={open} setOpen={setOpen}>
        <SlideOver.Title>Title</SlideOver.Title>
        <SlideOver.Body>{data && JSON.stringify(data)}</SlideOver.Body>
      </SlideOver>
      <DataTable<LearningServiceProvider>
        datasource={`${url}/lsp-individual-details?page=1&limit=40`}
        queryKey={["lsp"]}
        columns={columns}
        title="Learning Service Providers"
        subtitle="Select any of the learning service providers below to view details."
        onRowClick={(row) => {
          setOpen(true);
          setLspId(row.original.id);
        }}
      />
    </>
  );
};
