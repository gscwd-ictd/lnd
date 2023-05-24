import { Table } from "@tanstack/react-table";
import { forwardRef, useCallback, useState } from "react";

type DataTableGlobalSearchProps = {
  wait?: number;
  table: Table<any>;
};

export const DataTableGlobalSearch = forwardRef<HTMLInputElement, DataTableGlobalSearchProps>(
  ({ wait = 500, table, ...restProps }, forwardedRef) => {
    const [isSearching, setIsSearching] = useState(false);

    const [searchVal, setSearchVal] = useState("");

    const onSearch = (value: string) => table.setGlobalFilter(value);

    const debounce = (fn: Function) => {
      let timer: NodeJS.Timer | null;

      return (...args: any[]) => {
        setIsSearching(true);
        const context = this;
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          setIsSearching(false);
          timer = null;
          fn.apply(context, args);
        }, wait);
      };
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFn = useCallback(debounce(onSearch), []);

    return (
      <div className="bg-green-100">
        <div className="relative flex rounded-md z-[100]">
          <input
            {...restProps}
            ref={forwardedRef}
            disabled={table.getCoreRowModel().rows.length === 0}
            type="text"
            value={searchVal}
            className="py-3 px-4 pl-11 block w-full border-transparent bg-gray-50 rounded-l-md text-sm focus:z-10 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search..."
            onChange={(e) => {
              debounceFn(e.target.value);
              setSearchVal(e.target.value);
            }}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            {!isSearching ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500 animate-spin"
              >
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="currentColor"
                />
                <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
              </svg>
            )}
          </div>
          <button
            type="button"
            className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm"
            disabled={table.getCoreRowModel().rows.length === 0}
            onClick={() => {
              table.resetColumnFilters();
              table.resetGlobalFilter();
              setSearchVal("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
);

DataTableGlobalSearch.displayName = "DataTableGlobalSearch";
