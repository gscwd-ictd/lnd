"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { TrainingNotice } from "@lms/utilities/types/training";
import { url } from "@lms/utilities/url/api-url";
import { createColumnHelper } from "@tanstack/react-table";
import { FunctionComponent } from "react";

const helper = createColumnHelper<TrainingNotice>();

const columns = [
  helper.accessor("courseTitle", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("location", {
    header: "Location",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("trainingStart", {
    header: "From",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("trainingEnd", {
    header: "To",
    cell: (info) => info.getValue(),
  }),

  helper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
];

export const TrainingNoticeDataTable: FunctionComponent = () => {
  return (
    <>
      <DataTable<TrainingNotice>
        datasource={`${url}/training-individual-details`}
        queryKey={["training-notice"]}
        columns={columns}
        title="Notice of Training"
        subtitle="Training outline and other details for the upcoming training programs."
      />
    </>
  );
};
