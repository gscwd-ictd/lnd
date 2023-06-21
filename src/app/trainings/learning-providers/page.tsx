import { LspDataTable } from "../../../components/composables/lsp-data-table/LspDataTable";
import { AddNewLspModal } from "../../../components/composables/lsp-modal/AddNewLspModal";
import Link from "next/link";

export default async function LearningProviders() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <AddNewLspModal />

        <div>
          <ul className="flex items-center gap-1 text-sm">
            <Link href="/trainings/on-going" className="text-gray-700">
              Trainings /{" "}
            </Link>
            <li className="text-gray-500">Providers</li>
          </ul>
        </div>
      </div>
      <LspDataTable />
    </div>
  );
}
