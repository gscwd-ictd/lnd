"use client";

import { FunctionComponent } from "react";
import { Person } from "./page";
import { personColumns } from "@lms/utilities/columns/training-source-columns";
import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";

type LspDataTableProps = {
  data: Person[];
};

export const LspDataTable: FunctionComponent<LspDataTableProps> = ({ data }) => {
  return (
    <>
      {/* <DataTable<Person> data={data} columns={personColumns} onRowClick={(e) => console.log(e)} /> */}
      {/* <DataTableSearch<Person> searchKey="name" search="" setSearch={() => null} /> */}
      <DataTable<Person>
        data={data}
        columns={personColumns}
        title="Learning Service Providers"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </>
  );
};
