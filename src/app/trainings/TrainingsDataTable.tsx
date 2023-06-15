"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { trainingExternalColumns } from "@lms/utilities/columns/training-external-columns";
import { Training } from "@lms/utilities/types/training-external.type";
import { url } from "@lms/utilities/url/api-url";
import { FunctionComponent } from "react";

// type TrainingProps = {
//   data: Training[];
// };

export const TrainingsDataTable: FunctionComponent = () => {
  return (
    <>
      <DataTable<Training>
        datasource={`http://172.20.110.45:5286/api/lms/v1/trainings`}
        queryKey={["training"]}
        columns={trainingExternalColumns}
        title="Trainings & Seminars"
        subtitle="List of Training"
      ></DataTable>
    </>
  );
};
