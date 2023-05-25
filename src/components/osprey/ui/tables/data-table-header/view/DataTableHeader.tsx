import { FunctionComponent, useState } from "react";
import { Table } from "@tanstack/react-table";
import { AnimatePresence, motion } from "framer-motion";
import * as Popover from "@radix-ui/react-dropdown-menu";
import { DataTableGlobalSearch } from "../../data-table-global-search/view/DataTableGlobalSearch";

type DataTableHeaderProps<T extends unknown> = {
  title?: string;
  subtitle?: string;
  table: Table<T>;
};

export const DataTableHeader = <T extends unknown>({ title, subtitle, table }: DataTableHeaderProps<T>) => {
  //const [open, setOpen] = useState(false);
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

{
  /* <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
              <button
                type="button"
                className="py-2 space-x-1 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-0 transition-all text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <span className="text-xs">Columns</span>
              </button>
            </Popover.Trigger>

            <AnimatePresence>
              {open ? (
                <Popover.Portal forceMount>
                  <Popover.Content asChild align="end" alignOffset={2} sideOffset={4}>
                    <motion.ul
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 1, opacity: 1 }}
                      exit={{ y: -5, opacity: 0 }}
                      className="z-[300] bg-white w-40 shadow-sm border rounded p-2"
                    >
                      {table.getAllLeafColumns().map((column) => {
                        return (
                          <li key={column.id} className="px-1">
                            <label htmlFor={column.id}>
                              <input
                                {...{
                                  id: column.id,
                                  type: "checkbox",
                                  className: "mr-2 border-gray-200 rounded text-blue-600 focus:ring-blue-500",
                                  checked: column.getIsVisible(),
                                  onChange: column.getToggleVisibilityHandler(),
                                }}
                              />
                              {column.columnDef.header?.toString()}
                            </label>
                          </li>
                        );
                      })}
                    </motion.ul>
                  </Popover.Content>
                </Popover.Portal>
              ) : null}
            </AnimatePresence>
          </Popover.Root> */
}
