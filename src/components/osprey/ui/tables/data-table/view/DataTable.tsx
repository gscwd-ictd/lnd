"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  GroupingState,
  PaginationState,
  Row,
  SortingState,
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
import { ReactElement, useMemo, useState } from "react";
import { DataTableColumnHeader } from "../../data-table-column-header/view/DataTableColumnHeader";
import { DataTableHeader } from "../../data-table-header/view/DataTableHeader";
import { DataTablePagination } from "../../data-table-pagination/view/DataTablePagination";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DataTableColumnSort } from "../../data-table-column-sort/view/DataTableColumnSort";

export type DataTableProps<T extends unknown> = {
  data: Array<T>;
  columns: Array<ColumnDef<T, any>>;
  onRowClick?: (row: Row<T>) => void;
  title?: string;
  subtitle?: string;
};

export const DataTable = <T extends unknown>({
  data,
  columns,
  onRowClick,
  title,
  subtitle,
}: DataTableProps<T>): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [globalFilter, setGlobalFilter] = useState("");

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [grouping, setGroup] = useState<GroupingState>([]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const tblCols = useMemo(() => columns, [columns]);

  const tblData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: tblData,
    columns: tblCols,
    state: { sorting, globalFilter, columnFilters, columnVisibility, grouping },
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
  });

  return (
    <div className="border rounded overflow-clip overflow-x-auto shadow-md shadow-gray-50">
      <DataTableHeader<T> title={title} subtitle={subtitle} table={table} />

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
                          <DataTableColumnHeader column={header.column}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </DataTableColumnHeader>
                          {header.column.getCanSort() ? <DataTableColumnSort<T> column={header.column} /> : null}
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
        {data && data.length !== 0 ? (
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
                <div className="py-5">No records found</div>
              </td>
            </tr>
          </tbody>
        )}
      </table>

      <footer className="border-t pl-2 py-2 w-full">
        <DataTablePagination<T> table={table} />
      </footer>
    </div>
  );
};
