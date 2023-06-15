"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TrainingType } from "@lms/utilities/types/training-type.type";

type TrainingSourceDataTableProps = {
  data: TrainingType[];
};

export const TrainingSourceDataTable: FunctionComponent<TrainingSourceDataTableProps> = ({ data }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <DataTable
        title="Training Sources"
        subtitle="List of Training Source"
        columns={[
          {
            accessorKey: "name",
            cell: (info) => info.getValue(),
            header: "Description ",
          },
        ]}
        data={data}
        onRowClick={() => {}}
      />
    </>
  );
};
