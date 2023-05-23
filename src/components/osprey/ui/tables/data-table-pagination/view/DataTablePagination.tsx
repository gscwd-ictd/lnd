import { Table } from "@tanstack/react-table";
import { ButtonGroup } from "../../../button-group/view/ButtonGroup";
import { ButtonItem } from "../../../button-group/view/ButtonItem";

type DataTablePaginationProps<T extends unknown> = {
  table: Table<T>;
};

export const DataTablePagination = <T extends unknown>({ table }: DataTablePaginationProps<T>) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        {/* <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.929 5L18.3432 6.41421L12.6863 12.0711L18.3432 17.7279L16.929 19.1421L9.85789 12.0711L16.929 5Z"
              fill="currentColor"
            />
            <path d="M8 19V5H6V19H8Z" fill="currentColor" />
          </svg>
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="border rounded p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z"
              fill="currentColor"
            />
            <path d="M16.3432 19V5H18.3432V19H16.3432Z" fill="currentColor" />
          </svg>
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div> */}
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className={`${
            !table.getCanPreviousPage() ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 text-gray-600"
          } h-8 w-8 rounded flex items-center justify-center transition-colors`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
            <path
              d="M16.929 5L18.3432 6.41421L12.6863 12.0711L18.3432 17.7279L16.929 19.1421L9.85789 12.0711L16.929 5Z"
              fill="currentColor"
            />
            <path d="M8 19V5H6V19H8Z" fill="currentColor" />
          </svg>
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={`${
            !table.getCanPreviousPage() ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 text-gray-600"
          } h-8 w-8 rounded flex items-center justify-center transition-colors`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={`${
            !table.getCanNextPage() ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 text-gray-600"
          } h-8 w-8 rounded flex items-center justify-center transition-colors`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className={`${
            !table.getCanNextPage() ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 text-gray-600"
          } h-8 w-8 rounded flex items-center justify-center transition-colors`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z"
              fill="currentColor"
            />
            <path d="M16.3432 19V5H18.3432V19H16.3432Z" fill="currentColor" />
          </svg>
        </button>

        {/* <div>{table.getRowModel().rows.length} Rows</div> */}
      </div>

      <span className="text-xs text-gray-600">
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </span>

      <div className="scale-90">
        <div className="relative">
          <input
            type="number"
            id="hs-inline-leading-pricing-select-label"
            name="inline-add-on"
            placeholder="Go to page..."
            // defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="py-3 px-4 bg-gray-50 pr-20 block w-56 border-transparent rounded-md text-sm focus:z-10 focus:border-indigo-500 focus:ring-indigo-500"
          />

          <div className="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
            <label htmlFor="hs-inline-leading-select-currency" className="sr-only">
              Currency
            </label>
            <select
              id="hs-inline-leading-select-currency"
              name="hs-inline-leading-select-currency"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="block bg-gray-50 w-full border-transparent rounded-md focus:ring-indigo-600 focus:border-indigo-600"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};