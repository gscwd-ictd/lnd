import axios from "axios";
import { TrainingTypeDataTable } from "./TrainingTypeDataTable";
import { AddTrainingTypeModal } from "./AddTrainingTypeModal";
import { TrainingType } from "../../../utilities/types/training-type.type";
import { Pagination } from "../../../utilities/types/table-pagination.type";
import Link from "next/link";

export const getData = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/training-types`);
  return data as Pagination<TrainingType>;
};

export default async function TrainingType() {
  const tableData = await getData();

  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <AddTrainingTypeModal />
          <div>
            <ul className="flex items-center gap-1 text-sm">
              <Link href="/trainings/on-going" className="text-gray-700">
                Settings /
              </Link>
              <li className="text-gray-500">Training Type</li>
            </ul>
          </div>
        </div>
        <TrainingTypeDataTable data={tableData.items} />
      </div>
    </>
  );
}
