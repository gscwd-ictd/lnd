"use client";

import { Person } from "@lms/app/dashboard/reports/page";
import { Avatar } from "@lms/components/osprey/ui/avatar/view/Avatar";
import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { createColumnHelper } from "@tanstack/react-table";
import { FunctionComponent, useEffect, useState } from "react";

type LspDataTableProps = {
  data: Person[];
};

const helper = createColumnHelper<Person>();

const columns = [
  helper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
    // cell: (info) => (
    //   <div className="flex items-center gap-2">
    //     <Avatar size="sm" source={info.row.original.photoUrl} alt="avatar" />
    //     <div>
    //       <h3 className="text-xs">{info.getValue()}</h3>
    //       <p className="text-gray-400">{info.row.original.email.toLocaleLowerCase()}</p>
    //     </div>
    //   </div>
    // ),
  }),

  helper.accessor("email", {
    header: "Email address",
    cell: (info) => info.getValue().toLocaleLowerCase(),
  }),

  helper.accessor("company", {
    header: "Company",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("address", {
    header: "Address",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("country", {
    header: "Country",
    cell: (info) => info.getValue(),
  }),
];

export const LspDataTable: FunctionComponent<LspDataTableProps> = ({ data }) => {
  return (
    <DataTable<Person>
      data={data}
      columns={columns}
      title="Learning Service Providers"
      subtitle="Select any of the learning service providers below to view details."
      enableGlobalFilter={data.length === 0 ? false : true}
    />
  );
};
