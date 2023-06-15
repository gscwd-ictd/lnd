import { Pagination } from "@lms/utilities/types/table-pagination.type";
import { TrainingsDataTable } from "../TrainingsDataTable";
import axios from "axios";
import { Training } from "@lms/utilities/types/training-external.type";
import Link from "next/link";
import { AddTrainingModal } from "../AddTrainingModal";

export const getData = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/trainings`);
  return data as Pagination<Training>;
};

export default async function ExternalTrainings() {
  const tableData = await getData();
  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <AddTrainingModal />
          <div>
            <ul className="flex items-center gap-1 text-sm">
              <Link href="/trainings/on-going" className="text-gray-700">
                Trainings /
              </Link>
              <li className="text-gray-500">Trainings</li>
            </ul>
          </div>
        </div>
        <TrainingsDataTable data={tableData.items} />
      </div>
    </>
  );
}
