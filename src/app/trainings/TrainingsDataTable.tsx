"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { trainingExternalColumns } from "@lms/utilities/columns/training-external-columns";
import { Training } from "@lms/utilities/types/training-external.type";
import { FunctionComponent } from "react";

type TrainingProps = {
  data: Training[];
};

export const TrainingsDataTable: FunctionComponent<TrainingProps> = ({ data }) => {
  return (
    <>
      <DataTable
        data={data}
        columns={trainingExternalColumns}
        title="Trainings & Seminars"
        subtitle="List of Training"
      ></DataTable>
    </>
  );
};
