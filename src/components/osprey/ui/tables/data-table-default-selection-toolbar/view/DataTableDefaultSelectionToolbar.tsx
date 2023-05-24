"use client";

import { FunctionComponent, useContext } from "react";
import { DataTableContext } from "../../data-table/view/DataTable";

export const DataTableDefaultSelectionToolbar: FunctionComponent = () => {
  const { table } = useContext(DataTableContext);
  return (
    <div className="mt-2 px-3 py-2 text-center rounded bg-indigo-500 flex items-center gap-4">
      <span className="text-xs text-white font-medium">{table.getSelectedRowModel().rows.length} rows selected</span>
    </div>
  );
};
