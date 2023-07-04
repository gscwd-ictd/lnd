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
import { ReactElement, ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { DataTableColumnHeader } from "../../data-table-column-header/view/DataTableColumnHeader";
import { DataTableHeader } from "../../data-table-header/view/DataTableHeader";
import { DataTablePagination } from "../../data-table-pagination/view/DataTablePagination";
import { DataTableColumnSort } from "../../data-table-column-sort/view/DataTableColumnSort";
import { AnimatePresence, motion } from "framer-motion";
import { DataTableEmptySvg } from "../../data-table-empty-svg/DataTableEmptySvg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Paginated } from "@lms/utilities/types/pagination";

export type DataTableProps<T extends unknown> = {
  datasource: string;
  queryKey: string[];
  columns: Array<ColumnDef<T, any>>;
  onRowClick?: (row: Row<T>) => void;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  enableGlobalFilter?: boolean;
};

type DataTableContextState<T> = {
  table: Table<T>;
};

export const DataTableContext = createContext({} as DataTableContextState<any>);

export const DataTable = <T extends unknown>({
  datasource,
  columns,
  queryKey,
  onRowClick,
  title,
  subtitle,
  enableGlobalFilter = true,
  children,
}: DataTableProps<T>): ReactElement => {
  // initialize state for table sorting
  const [sorting, setSorting] = useState<SortingState>([]);

  // initialize state for global filter
  const [globalFilter, setGlobalFilter] = useState("");

  // initialize state for column filters
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // initialize state for table header groupings
  const [grouping, setGroup] = useState<GroupingState>([]);

  // initialize state for column visibility
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // initialize state for table row selection
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  // initialize state for table data
  const [myData, setMyData] = useState<T[]>([]);

  // memoize table columns
  const tblCols = useMemo(() => columns, [columns]);

  // memoize table data
  const tblData = useMemo(() => myData, [myData]);

  const { status, data, error } = useQuery<Paginated<T>>({
    queryKey,
    queryFn: async () => {
      const { data } = await axios.get(datasource);
      setMyData(data.items);
      return data;
    },
  });

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

  if (error) return <>Cannot fetch table data</>;

  return (
    <div className="relative border rounded overflow-clip overflow-x-auto shadow-md shadow-gray-50">
      <DataTableHeader<T> title={title} subtitle={subtitle} table={table} enableGlobalFilter={enableGlobalFilter} />

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
                          {header.column.getCanFilter() && Number(tblData?.length) > 0 ? (
                            <DataTableColumnHeader column={header.column}>
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </DataTableColumnHeader>
                          ) : (
                            <span className="text-xs font-semibold text-left text-gray-600">
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </span>
                          )}
                          {header.column.getCanSort() && Number(tblData?.length) > 0 ? (
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
                  {/* <div className="flex items-center justify-center mt-5">
                    <DataTableEmptySvg />
                  </div> */}

                  <h3 className="text-xl text-center text-gray-300 font-semibold select-none">No data to display</h3>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>

      {tblData?.length !== 0 ? (
        <footer className="border-t pl-2 py-1 w-full bg-white">
          <DataTablePagination<T> table={table} />
        </footer>
      ) : null}
    </div>
  );
};
