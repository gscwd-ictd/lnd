"use client";

import { Avatar } from "@lms/components/osprey/ui/avatar/view/Avatar";
import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import { FunctionComponent, useEffect, useState } from "react";
import { PersonalInformation } from "./PersonalInformation";
import { ContactInformation } from "./ContactInformation";
import { SubjectMatterExpertise } from "./SubjectMatterExpertise";
import { EducationDetails } from "./EducationDetails";
import { TrainingDetails } from "./TrainingDetails";
import { ProjectsImplemented } from "./ProjectsImplemented";
import { CoachingExperience } from "./CoachingExperience";
import { Affiliations } from "./Affiliations";
import { AwardsAndRecognitions } from "./AwardsAndRecognitions";
import { Certifications } from "./Certifications";
import { LspDetailsSummary } from "./LspDetailsSummary";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useLspDetailsStore } from "@lms/utilities/stores/lsp-details-store";
import { url } from "@lms/utilities/url/api-url";

export const AddNewLspModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [source, setSource] = useState<"Internal" | "External" | undefined>();

  const trainingSourceId = useLspDetailsStore((state) => state.trainingSource);
  const setTrainingSource = useLspDetailsStore((state) => state.setTrainingSource);

  const queryClient = useQueryClient();

  useEffect(() => {
    const getTrainingSource = async () => {
      const { data } = await axios.get(`${url}/training-sources/q?source=${source}`);

      setTrainingSource(data.id);
    };
    if (source !== undefined) getTrainingSource();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    contactNumber,
    email,
    postalAddress,
    experience,
    trainingSource,
    photoUrl,
    expertise,
    affiliations,
    awards,
    certifications,
    coaching,
    education,
    projects,
    trainings,
  } = useLspDetailsStore();

  const lspDataTableMutation = useMutation({
    onSuccess: (data, variable) => {
      setOpen(false);
      queryClient.refetchQueries({ queryKey: ["lsp"], type: "all", exact: true, stale: true });
    },
    onError: () => console.log("error"),
    mutationFn: async () => {
      const response = await axios.post(`${url}/lsp-details`, {
        employeeId,
        firstName,
        middleName,
        lastName,
        contactNumber,
        email,
        postalAddress,
        experience,
        trainingSource: trainingSourceId,
        photoUrl,
        expertise,
        affiliations,
        awards,
        certifications,
        coaching,
        education,
        projects,
        trainings,
      });

      return response.data;
    },
  });

  return (
    <Modal isOpen={open} setIsOpen={setOpen} size="md" isStatic>
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
                  <DropdownMenu.Item
                    className="px-2 py-1 outline-none hover:bg-gray-100 border-b border-b-100 focus:bg-gray-100 transition-colors"
                    asChild
                  >
                    <ModalTrigger className="text-xs text-gray-600 font-medium" onClick={() => setSource("Internal")}>
                      Internal
                    </ModalTrigger>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    asChild
                    className="px-2 py-1 outline-none hover:bg-gray-100 focus:bg-gray-100 transition-colors"
                  >
                    <ModalTrigger className="text-xs text-gray-600 font-medium" onClick={() => setSource("External")}>
                      External
                    </ModalTrigger>
                  </DropdownMenu.Item>
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
      <ModalContent>
        <ModalContent.Title>
          <div className="px-2">
            <Avatar
              source="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1224.jpg"
              size="xl"
            />
          </div>
          <header className="mt-1 px-2">
            <p className="text-xs text-indigo-500 font-medium">{page} of 10</p>
            <div className="flex items-start gap-2">
              <h3 className="text-lg font-semibold text-gray-600">Subject Matter Expert Profile</h3>
              <p
                className={`${
                  source === "Internal"
                    ? "text-green-600 bg-green-50 border-green-100"
                    : source === "External"
                    ? "text-amber-600 bg-amber-50 border-amber-100"
                    : null
                } text-xs px-[0.25rem] py-[0.1rem] font-semibold rounded border`}
              >
                {source}
              </p>
            </div>
            <p className="text-sm text-gray-400">
              {page === 1
                ? "Personal information"
                : page === 2
                ? "Contact information"
                : page === 3
                ? "Subject-matter expertise"
                : page === 4
                ? "Educational attainment"
                : page === 5
                ? "Related trainings conducted for the past 5 years"
                : page === 6
                ? "Related projects implemented for the past 5 years"
                : page === 7
                ? "Related coaching experience for the past 5 years"
                : page === 8
                ? "Learning Service Provider's affiliations"
                : page === 9
                ? "Learning Service Provider's awards & recognitions"
                : "Learning Service Provider's certifications"}
            </p>
          </header>
        </ModalContent.Title>
        <ModalContent.Body>
          {source === "External" ? (
            <main className="px-2 space-y-2">
              {page === 1 && <PersonalInformation />}
              {page === 2 && <ContactInformation />}
              {page === 3 && <SubjectMatterExpertise />}
              {page === 4 && <EducationDetails />}
              {page === 5 && <TrainingDetails />}
              {page === 6 && <ProjectsImplemented />}
              {page === 7 && <CoachingExperience />}
              {page === 8 && <Affiliations />}
              {page === 9 && <AwardsAndRecognitions />}
              {page === 10 && <Certifications />}
              {page === 11 && <LspDetailsSummary />}
            </main>
          ) : source === "Internal" ? (
            <>Get data from HRMS</>
          ) : null}
        </ModalContent.Body>
        <ModalContent.Footer>
          <div className="px-2 py-3">
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
                  page === 11 ? lspDataTableMutation.mutate() : setPage(page + 1);
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
