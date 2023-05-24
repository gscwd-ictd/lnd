"use client";

import { FunctionComponent, useContext } from "react";
import { DataTableContext } from "../../data-table/view/DataTable";

export const DataTableDefaultSelectionToolbar: FunctionComponent = () => {
  const { table } = useContext(DataTableContext);
  return (
    <div className="mt-2 px-3 py-2 text-center rounded bg-indigo-100 flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-indigo-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>

      <span className="text-xs text-indigo-500 font-medium">
        {table.getSelectedRowModel().rows.length} {table.getSelectedRowModel().rows.length !== 1 ? "rows " : "row "}
        selected
      </span>
    </div>
  );
};
