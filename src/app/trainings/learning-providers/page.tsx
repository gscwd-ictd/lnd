import { getPersons } from "@lms/app/dashboard/reports/page";
import { LspDataTable } from "./LspDataTable";
import { Button } from "@lms/components/osprey/ui/button/view/Button";
import Link from "next/link";

export default async function LearningProviders() {
  const data = await getPersons();
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <Button size="small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p>Add New</p>
        </Button>

        <div>
          <ul className="flex items-center gap-1 text-sm">
            <Link href="/trainings/on-going" className="text-gray-700">
              Trainings /{" "}
            </Link>
            <li className="text-gray-500">Providers</li>
          </ul>
        </div>
      </div>
      <LspDataTable data={data} />
    </div>
  );
}
