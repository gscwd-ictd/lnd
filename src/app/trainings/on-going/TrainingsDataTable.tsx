"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
//import { trainingExternalColumns } from "@lms/utilities/columns/training-external-columns";
import { ExternalTraining } from "@lms/utilities/types/training-external.type";
import { createColumnHelper } from "@tanstack/react-table";
// import { url } from "@lms/utilities/url/api-url";
import { FunctionComponent } from "react";

// type TrainingProps = {
//   data: Training[];
// };
const helper = createColumnHelper<ExternalTraining>();

const trainingExternalColumns = [
  helper.accessor("id", {
    header: "Name",
    cell: (info) => info?.getValue(),
  }),
];

export const TrainingsDataTable: FunctionComponent = () => {
  return (
    <>
      <DataTable<ExternalTraining>
        datasource={`http://172.20.110.45:5286/api/lms/v1/trainings`}
        queryKey={["training"]}
        columns={trainingExternalColumns}
        title="Trainings & Seminars"
        subtitle="List of Training"
      ></DataTable>
    </>
  );
};
