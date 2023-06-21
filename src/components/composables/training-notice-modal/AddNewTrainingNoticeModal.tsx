"use client";

import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import { TrainingSource } from "@lms/lib/types/training-source.type";
import { url } from "@lms/utilities/url/api-url";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { TrainingInformation } from "./TrainingInformation";
import { CourseOutline } from "./CourseOutline";
import { ChooseTrainingType } from "./ChooseTrainingType";
import { useTrainingNoticeStore } from "@lms/utilities/stores/training-notice-store";

export const AddNewTrainingNoticeModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [source, setSource] = useState<TrainingSource[]>([]);
  const [selectedSource, setSelectedSource] = useState<TrainingSource>();
  const [page, setPage] = useState(1);

  const trainingType = useTrainingNoticeStore((state) => state.trainingType);

  useEffect(() => {
    const getTrainingSource = async () => {
      const { data } = await axios.get(`${url}/training-sources`);
      setSource(data.items);
    };

    getTrainingSource();
  }, []);

  return (
    <Modal isOpen={open} setIsOpen={setOpen} size="md">
      <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenu.Trigger asChild>
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
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {dropdownOpen && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content align="start" side="right" sideOffset={4} asChild>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 1, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  className="bg-white rounded shadow-lg flex flex-col overflow-clip"
                >
                  {source.map((trainingSource, index) => {
                    return (
                      <DropdownMenu.Item
                        key={index}
                        className="px-2 py-1 outline-none hover:bg-gray-100 border-b border-b-100 focus:bg-gray-100 transition-colors"
                        asChild
                      >
                        <ModalTrigger
                          className="text-xs text-gray-600 font-medium"
                          onClick={() => setSelectedSource(trainingSource)}
                        >
                          {trainingSource.name}
                        </ModalTrigger>
                      </DropdownMenu.Item>
                    );
                  })}
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>

      <ModalContent>
        <ModalContent.Title>
          <header className="pl-2">
            <p className="text-xs text-indigo-500 font-medium">{page} of 4</p>
            <div className="flex items-start gap-2">
              <h3 className="text-lg font-semibold text-gray-600">Notice of Training</h3>
              <div className="flex items-center gap-1">
                <p
                  className={`${
                    selectedSource?.name === "Internal"
                      ? "text-green-600 bg-green-50 border-green-100"
                      : selectedSource?.name === "External"
                      ? "text-amber-600 bg-amber-50 border-amber-100"
                      : null
                  } text-xs px-[0.25rem] py-[0.1rem] font-semibold rounded border`}
                >
                  {selectedSource?.name}
                </p>
                {trainingType !== undefined && (
                  <p
                    className={`text-purple-600 bg-purple-50 border-purple-100 text-xs px-[0.25rem] py-[0.1rem] font-semibold rounded border`}
                  >
                    {trainingType.name}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-400">Fill in training details and course outline</p>
          </header>
        </ModalContent.Title>

        <ModalContent.Body>
          <main className="space-y-4 px-2">
            {page === 1 && <ChooseTrainingType />}
            {page === 2 && <TrainingInformation />}
            {page === 3 && <CourseOutline />}
          </main>
        </ModalContent.Body>

        <ModalContent.Footer>
          <div className="px-2 pb-3 pt-2">
            <div className="flex items-center gap-2 justify-end w-full">
              <Button
                size="small"
                variant="white"
                onClick={() => {
                  page === 1 ? setOpen(false) : setPage(page - 1);
                }}
              >
                {page === 1 ? "Cancel" : "Previous"}
              </Button>
              <Button
                size="small"
                onClick={() => {
                  page === 11 ? console.log("save") : setPage(page + 1);
                }}
              >
                {page === 11 ? "Confirm" : "Proceed"}
              </Button>
            </div>
          </div>
        </ModalContent.Footer>
      </ModalContent>
    </Modal>
  );
};
