"use client";

import { Avatar } from "@lms/components/osprey/ui/avatar/view/Avatar";
import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import { FunctionComponent, useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  LspSourceOptions,
  useAddLspModalStore,
  useLspDetailsStore,
  useLspTypeStore,
  useSelectedLspSource,
} from "@lms/utilities/stores/lsp-details-store";
import { url } from "@lms/utilities/url/api-url";
import { ChooseLspSource } from "./ChooseLspSource";
import { Affiliations } from "./individual/Affiliations";
import { AwardsAndRecognitionsExternal } from "./individual/AwardsAndRecognitionsExternal";
import { CertificationsExternal } from "./individual/CertificationsExternal";
import { CoachingExperience } from "./individual/CoachingExperience";
import { EducationDetailsExternal } from "./individual/EducationDetailsExternal";
import { LspDetailsSummary } from "./individual/LspDetailsSummary";
import { ProjectsImplemented } from "./individual/ProjectsImplemented";
import { SubjectMatterExpertise } from "./individual/SubjectMatterExpertise";
import { TrainingDetails } from "./individual/TrainingDetails";
import { PersonalInformationInternal } from "./individual/PeronalInformationInternal";
import { PersonalInformationExternal } from "./individual/PersonalInformationExternal";
import { ContactInformationInternal } from "./individual/ContactInformationInternal";
import { ContactInformationExternal } from "./individual/ContactInformationExternal";
import { EducationDetailsInternal } from "./individual/EducationDetailsInternal";
import { AwardsAndRecognitionInternal } from "./individual/AwardsAndRecognitionInternal";
import { CertificationsInternal } from "./individual/CertificationsInternal";

export const AddNewLspModal: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { page, setPage } = useAddLspModalStore();
  const selectedLspSource = useSelectedLspSource((state) => state.selectedLspSource);

  const lspType = useLspTypeStore((state) => state.lspType);
  const setLspType = useLspTypeStore((state) => state.setLspType);

  const queryClient = useQueryClient();

  const {
    employeeId,
    firstName,
    middleName,
    lastName,
    contactNumber,
    email,
    postalAddress,
    experience,
    lspSource,
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
      const response = await axios.post(`${url}/lsp-individual-details`, {
        employeeId,
        firstName,
        middleName,
        lastName,
        contactNumber,
        email,
        postalAddress,
        experience,
        lspSource: selectedLspSource?.id,
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
                    <ModalTrigger
                      className="text-left text-xs text-gray-600 font-medium"
                      onClick={() => setLspType({ name: "Individual" })}
                    >
                      Individual
                    </ModalTrigger>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    asChild
                    className="px-2 py-1 outline-none hover:bg-gray-100 focus:bg-gray-100 transition-colors"
                  >
                    <ModalTrigger
                      className="text-left text-xs text-gray-600 font-medium"
                      onClick={() => setLspType({ name: "Organization" })}
                    >
                      Organization
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
              <h3 className="text-lg font-semibold text-gray-600">Learning Provider Profile</h3>
              <div className="flex items-center gap-1">
                <p
                  className={`${
                    lspType?.name === "Individual"
                      ? "text-green-600 bg-green-50 border-green-100"
                      : lspType?.name === "Organization"
                      ? "text-amber-600 bg-amber-50 border-amber-100"
                      : null
                  } text-xs px-[0.25rem] py-[0.1rem] font-semibold rounded border`}
                >
                  {lspType?.name}
                </p>
                {selectedLspSource && (
                  <p
                    className={`text-purple-600 bg-purple-50 border-purple-100 text-xs px-[0.25rem] py-[0.1rem] font-semibold rounded border`}
                  >
                    {selectedLspSource.name}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {page === 2
                ? "Personal information"
                : page === 3
                ? "Contact information"
                : page === 4
                ? "Subject-matter expertise"
                : page === 5
                ? "Educational attainment"
                : page === 6
                ? "Related trainings conducted for the past 5 years"
                : page === 7
                ? "Related projects implemented for the past 5 years"
                : page === 8
                ? "Related coaching experience for the past 5 years"
                : page === 9
                ? "Learning Service Provider's affiliations"
                : page === 10
                ? "Learning Service Provider's awards & recognitions"
                : page === 11
                ? "Learning Service Provider's certifications"
                : ""}
            </p>
          </header>
        </ModalContent.Title>
        <ModalContent.Body>
          {lspType?.name === "Individual" ? (
            <main className="px-2 space-y-2">
              {page === 1 && <ChooseLspSource />}

              {page === 2 && (
                <>
                  {selectedLspSource?.name === LspSourceOptions.INTERNAL ? (
                    <PersonalInformationInternal />
                  ) : (
                    <PersonalInformationExternal />
                  )}
                </>
              )}

              {page === 3 && (
                <>
                  {selectedLspSource?.name === LspSourceOptions.INTERNAL ? (
                    <ContactInformationInternal />
                  ) : (
                    <ContactInformationExternal />
                  )}
                </>
              )}

              {page === 4 && <SubjectMatterExpertise />}

              {page === 5 && (
                <>
                  {selectedLspSource?.name === LspSourceOptions.INTERNAL ? (
                    <EducationDetailsInternal />
                  ) : (
                    <EducationDetailsExternal />
                  )}
                </>
              )}
              {page === 6 && <TrainingDetails />}
              {page === 7 && <ProjectsImplemented />}
              {page === 8 && <CoachingExperience />}
              {page === 9 && <Affiliations />}
              {page === 10 && (
                <>
                  {selectedLspSource?.name === LspSourceOptions.INTERNAL ? (
                    <AwardsAndRecognitionInternal />
                  ) : (
                    <AwardsAndRecognitionsExternal />
                  )}
                </>
              )}
              {page === 11 && (
                <>
                  {selectedLspSource?.name === LspSourceOptions.INTERNAL ? (
                    <CertificationsInternal />
                  ) : (
                    <CertificationsExternal />
                  )}
                </>
              )}
              {page === 12 && <LspDetailsSummary />}
            </main>
          ) : lspType?.name === "Organization" ? (
            <>Fill in org data</>
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
                  page === 13 ? lspDataTableMutation.mutate() : setPage(page + 1);
                }}
              >
                {page === 13 ? "Confirm" : "Proceed"}
              </Button>
            </div>
          </div>
        </ModalContent.Footer>
      </ModalContent>
    </Modal>
  );
};
