"use client";

import { Table } from "@tanstack/react-table";
import { DataTableGlobalSearch } from "../../data-table-global-search/view/DataTableGlobalSearch";

type DataTableHeaderProps<T extends unknown> = {
  title?: string;
  subtitle?: string;
  table: Table<T>;
};

export const DataTableHeader = <T extends unknown>({ title, subtitle, table }: DataTableHeaderProps<T>) => {
  return (
    <div className="px-6 py-3 flex justify-between">
      <header>
        <h3 className="text-gray-700 text-lg font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </header>

      <div>
        <DataTableGlobalSearch table={table} />
      </div>
    </div>
  );
};
