"use client";

import { Avatar } from "@lms/components/osprey/ui/avatar/view/Avatar";
import { createColumnHelper } from "@tanstack/react-table";
import { faker } from "@faker-js/faker";
import { Person } from "@lms/app/dashboard/reports/page";
import { Checkbox } from "@lms/components/osprey/ui/checkbox/view/Checkbox";

type Pagination<T> = {
  items: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
};

export type TrainingSource = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  id: string;
  name: string;
};

const helper = createColumnHelper<TrainingSource>();

export const trainingSourceColumns = [
  // helper.accessor("id", {
  //   cell: (info) => info.getValue(),
  // }),

  helper.accessor("name", {
    header: "Name",
    cell: (info) => (
      <div className="flex items-center gap-2">
        <Avatar
          size="sm"
          source="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="avatar"
        />
        <div>
          <span>{info.getValue()}</span>
          <p className="font-mono text-xs">{faker.internet.email().toLowerCase()}</p>
        </div>
      </div>
    ),
  }),

  helper.accessor("createdAt", {
    header: "Date Created",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("updatedAt", {
    header: "Last Update",
    cell: (info) => info.getValue(),
  }),

  // helper.accessor("deletedAt", {
  //   cell: (info) => info.getValue(),
  // }),
];

const personHelper = createColumnHelper<Person>();

export const personColumns = [
  personHelper.accessor("photoUrl", {
    header: ({ table }) => (
      <div className="pl-2">
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),

    cell: ({ row }) => (
      <Checkbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
    enableColumnFilter: false,
    enableSorting: false,
  }),

  personHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
    // cell: (info) => (
    //   <div className="flex items-center gap-2">
    //     <Avatar size="sm" source={info.row.original.photoUrl} alt="avtr" />
    //     <div>
    //       <span className="text-gray-700">{info.getValue()}</span>
    //       <p className="font-mono text-xs text-gray-400">{info.row.original.email}</p>
    //     </div>
    //   </div>
    // ),
  }),

  personHelper.accessor("company", {
    header: "Company",
    cell: (info) => info.getValue(),
  }),

  personHelper.accessor("address", {
    header: "Address",
    cell: (info) => info.getValue(),
    // enableSorting: false,
  }),

  personHelper.accessor("country", {
    header: "Country",
    cell: (info) => info.getValue(),
  }),
];
