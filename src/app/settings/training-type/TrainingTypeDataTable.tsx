"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UdpdateTrainingTypeModal } from "./UpdateTrainingTypeModal";
import { DeleteTrainingTypeModal } from "./DeleteTrainingTypeModal";
import { TrainingType } from "@lms/utilities/types/training-type.type";

type TrainingTypeDataTableProps = {
  data: TrainingType[];
};

export const TrainingTypeDataTable: FunctionComponent<TrainingTypeDataTableProps> = ({ data }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => console.log("triggered"), [data]);

  return (
    <>
      <DataTable
        title="Training Types"
        subtitle="List of Training Types"
        columns={[
          {
            accessorKey: "name",
            cell: (info) => info.getValue(),
            header: "Description ",
          },
          {
            accessorKey: "id",
            cell: (info) => (
              <div className="flex items-center gap-1">
                <UdpdateTrainingTypeModal id={info.getValue()} />
                <DeleteTrainingTypeModal id={info.getValue()} />
              </div>
            ),
            enableColumnFilter: false,
            enableSorting: false,
            header: "Actions",
          },
        ]}
        data={data}
        onRowClick={() => {}}
      />
      {/* <Modal></Modal> */}
    </>
  );
};
