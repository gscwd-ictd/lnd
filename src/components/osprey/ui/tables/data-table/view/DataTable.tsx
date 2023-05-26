"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  GroupingState,
  Row,
  RowSelectionState,
  SortingState,
  Table,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement, ReactNode, createContext, useMemo, useState } from "react";
import { DataTableColumnHeader } from "../../data-table-column-header/view/DataTableColumnHeader";
import { DataTableHeader } from "../../data-table-header/view/DataTableHeader";
import { DataTablePagination } from "../../data-table-pagination/view/DataTablePagination";
import { DataTableColumnSort } from "../../data-table-column-sort/view/DataTableColumnSort";
import { AnimatePresence, motion } from "framer-motion";

export type DataTableProps<T extends unknown> = {
  data: Array<T>;
  columns: Array<ColumnDef<T, any>>;
  onRowClick?: (row: Row<T>) => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

type DataTableContextState<T> = {
  table: Table<T>;
};

export const DataTableContext = createContext({} as DataTableContextState<any>);

export const DataTable = <T extends unknown>({
  data,
  columns,
  onRowClick,
  title,
  subtitle,
  children,
}: DataTableProps<T>): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [globalFilter, setGlobalFilter] = useState("");

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [grouping, setGroup] = useState<GroupingState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const tblCols = useMemo(() => columns, [columns]);

  const tblData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: tblData,
    columns: tblCols,
    state: { sorting, globalFilter, columnFilters, columnVisibility, grouping, rowSelection },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGroupingChange: setGroup,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
  });

  return (
    <div className="relative border rounded overflow-clip overflow-x-auto shadow-md shadow-gray-50">
      <DataTableHeader<T> title={title} subtitle={subtitle} table={table} />

      <DataTableContext.Provider value={{ table } as DataTableContextState<T>}>
        <AnimatePresence>
          {table.getSelectedRowModel().rows.length > 0 ? (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="absolute top-0 flex w-full justify-center items-center"
            >
              {children}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </DataTableContext.Provider>

      <table className="flex-1 w-full text-left whitespace-no-wrap bg-white table-auto">
        {/**
         *
         * table header starts here
         */}
        <thead className="sticky top-0 z-30 text-sm text-gray-600 border-y bg-zinc-50">
          {table.getHeaderGroups().map((group) => {
            return (
              <tr key={group.id}>
                {group.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      scope="col"
                      className="px-4 py-2 align-left border-l-0 border-r-0 whitespace-nowrap"
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex items-center gap-1">
                          {header.column.getCanFilter() && tblData.length > 0 ? (
                            <DataTableColumnHeader column={header.column}>
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </DataTableColumnHeader>
                          ) : (
                            <span className="text-xs font-semibold text-left text-gray-600">
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </span>
                          )}
                          {header.column.getCanSort() && tblData.length > 0 ? (
                            <DataTableColumnSort<T> column={header.column} />
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        {/**
         *
         * start of table body here
         */}
        {tblData && tblData.length !== 0 ? (
          <>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    onClick={onRowClick ? () => onRowClick(row) : () => null}
                    className="cursor-pointer even:bg-zinc-50 text-gray-700 border-b border-b-gray-100 last:border-b-transparent hover:bg-gray-50 bg-white"
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="text-xs px-6 py-3 align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td colSpan={columns.length} className="text-xs text-center">
                <div className="py-5">
                  <div className="flex items-center justify-center mt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      width="120"
                      height="120"
                      viewBox="0 0 647.63626 632.17383"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="opacity-20"
                    >
                      <path
                        d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
                        transform="translate(-276.18187 -133.91309)"
                        fill="#f2f2f2"
                      />
                      <path
                        d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
                        transform="translate(-276.18187 -133.91309)"
                        fill="#3f3d56"
                      />
                      <path
                        d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
                        transform="translate(-276.18187 -133.91309)"
                        fill="#6c63ff"
                      />
                      <circle cx="190.15351" cy="24.95465" r="20" fill="#6c63ff" />
                      <circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff" />
                      <path
                        d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
                        transform="translate(-276.18187 -133.91309)"
                        fill="#e6e6e6"
                      />
                      <path
                        d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
                        transform="translate(-276.18187 -133.91309)"
                        fill="#3f3d56"
                      />
                      <path
                        d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
                        transform="translate(-276.18187 -133.91309)"
                        fill="#6c63ff"
                      />
                      <circle cx="433.63626" cy="105.17383" r="20" fill="#6c63ff" />
                      <circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff" />
                    </svg>
                  </div>

                  <h3 className="text-xl text-center mt-10 text-gray-300 font-semibold select-none">
                    No record to display
                  </h3>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>

      {tblData.length !== 0 ? (
        <footer className="border-t pl-2 py-1 w-full">
          <DataTablePagination<T> table={table} />
        </footer>
      ) : null}
    </div>
  );
};
