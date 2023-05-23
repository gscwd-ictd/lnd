"use client";

import { ColumnSearchInput } from "@lms/components/osprey/ui/data-table-test/view/ColumnSearchInput";

export default function DashboardArchives() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-96">
        <ColumnSearchInput onSearch={(e) => console.log(e)} debounce={500} className="h-full" placeholder="Search" />
      </div>
    </div>
  );
}
