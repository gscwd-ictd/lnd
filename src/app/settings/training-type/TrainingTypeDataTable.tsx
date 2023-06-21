"use client";

import { DataTable } from "@lms/components/osprey/ui/tables/data-table/view/DataTable";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UdpdateTrainingTypeModal } from "./UpdateTrainingTypeModal";
import { DeleteTrainingTypeModal } from "./DeleteTrainingTypeModal";
import { TrainingType } from "@lms/utilities/types/training-type.type";
import { url } from "@lms/utilities/url/api-url";

// type TrainingTypeDataTableProps = {
//   data: TrainingType[];
// };

// export const TrainingTypeDataTable: FunctionComponent<TrainingTypeDataTableProps> = ({data}) => {
export const TrainingTypeDataTable: FunctionComponent = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // useEffect(() => console.log("triggered"), [data]);

  return (
    <>
      <DataTable<TrainingType>
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
        datasource={`http://172.20.110.45:5286/api/lms/v1/training-types`}
        queryKey={["trainingtype"]}
        onRowClick={() => {}}
      />
      {/* <Modal></Modal> */}
    </>
  );
};
