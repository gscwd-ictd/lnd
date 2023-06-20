import { TrainingNoticeDataTable } from "@lms/components/composables/training-notice-data-table/TrainingNoticeDataTable";
import { AddNewTrainingNoticeModal } from "@lms/components/composables/training-notice-modal/AddNewTrainingNoticeModal";
import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { useState } from "react";

export default function TrainingNotice() {
  return (
    <div className="p-5">
      <div className="mb-3">
        <AddNewTrainingNoticeModal />
      </div>

      <TrainingNoticeDataTable />
    </div>
  );
}
