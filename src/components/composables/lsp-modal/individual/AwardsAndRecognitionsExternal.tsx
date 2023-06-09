"use client";

import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useLspDetailsStore } from "@lms/utilities/stores/lsp-details-store";
import { UndrawContractSvg } from "../UndrawContractSvg";

type AwardsMutation = {
  isShowing: boolean;
  type: null | "add" | "edit";
};

export const AwardsAndRecognitionsExternal: FunctionComponent = () => {
  const awards = useLspDetailsStore((state) => state.awards);
  const setAwards = useLspDetailsStore((state) => state.setAwards);

  const [awardsVal, setAwardsVal] = useState("");
  const [awardsIndexToEdit, setAwardsIndexToEdit] = useState(-1);
  const [awardsMutation, setAwardsMutation] = useState<AwardsMutation>({ isShowing: false, type: null });

  const awardsInputRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (awardsMutation.isShowing) awardsInputRef?.current?.focus();
  }, [awardsMutation.isShowing]);

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className="text-xs font-medium text-gray-600">Awards & recognitions</p>
        <Tooltip.Provider delayDuration={500}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                className="flex items-center justify-center h-5 w-5 hover:bg-gray-100 transition-colors rounded"
                onClick={() => {
                  setAwardsMutation({ isShowing: true, type: "add" });
                  setAwardsVal("");
                  awardsInputRef?.current?.focus();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-700"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Content
              sideOffset={2}
              className="bg-zinc-800 z-50 text-xs text-white px-2 py-1 rounded font-medium"
            >
              Add award & recognition
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      {awards.length === 0 ? (
        <div className="border-2 bg-gray-50/50 rounded-lg border-dashed w-full flex items-center justify-center">
          <div className="py-4">
            <div className="flex justify-center">
              <UndrawContractSvg />
            </div>
            <h3
              role="button"
              className="text-gray-500"
              onClick={() => {
                setAwardsMutation({ isShowing: true, type: "add" });
                awardsInputRef?.current?.focus();
              }}
            >
              Add awards & recognitions
            </h3>
          </div>
        </div>
      ) : (
        <ul className="space-y-2">
          {awards.map((item, index) => (
            <div
              key={index}
              className="text-sm border-l-4 border-l-blue-400 border-y border-r rounded-r grid grid-cols-12"
            >
              <h3 className="col-span-10 pl-4 py-2">{item.name}</h3>
              <div className="col-span-2 py-2 text-center flex items-start justify-center gap-1">
                <Tooltip.Provider delayDuration={500}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button
                        onClick={() => {
                          setAwardsMutation({ isShowing: true, type: "edit" });
                          setAwardsVal(item.name);
                          setAwardsIndexToEdit(index);
                          awardsInputRef?.current?.focus();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        sideOffset={2}
                        className="bg-zinc-800 z-50 text-xs text-white px-2 py-1 rounded font-medium"
                      >
                        Edit
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>

                <Tooltip.Provider delayDuration={500}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button
                        onClick={() => {
                          const newAwards = [...awards];
                          newAwards.splice(index, 1);
                          setAwards(newAwards);
                          setAwardsMutation({ isShowing: false, type: null });
                          setAwardsVal("");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Content
                      sideOffset={2}
                      className="bg-zinc-800 z-50 text-xs text-white px-2 py-1 rounded font-medium"
                    >
                      Remove
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </div>
          ))}
        </ul>
      )}

      {awardsMutation.isShowing && (
        <div>
          <input
            value={awardsVal}
            onChange={(e) => setAwardsVal(e.target.value)}
            ref={awardsInputRef}
            type="text"
            placeholder="Please specify the name of award or recognition"
            className="py-2 px-3 placeholder:text-gray-300 block w-full border-gray-200 rounded text-xs focus:border-indigo-500 focus:ring-indigo-500"
          />

          <div className="flex items-center gap-1 mt-2">
            <button
              disabled={awardsVal === ""}
              onClick={() => {
                /**
                 * Check if type id edit
                 */
                if (awardsMutation.type === "edit") {
                  // get a copy of the current expertise state
                  const newAwards = [...awards];

                  // update the value of the expertise based on what is typed by the user
                  newAwards[awardsIndexToEdit].name = awardsVal;

                  // set the new state for expertise
                  setAwards(newAwards);

                  // reset the value of editExpertise value for index to update
                  setAwardsIndexToEdit(-1);

                  /**
                   * If type is add
                   */
                } else if (awardsMutation.type === "add") {
                  // add the new expertise in the array
                  setAwards([...awards, { name: awardsVal }]);
                }

                // reset the value of expertiseVal state
                setAwardsVal("");

                // reset the value of addExpertise state
                setAwardsMutation({ isShowing: false, type: null });
              }}
              className="text-xs py-1 px-2 inline-flex justify-center items-center gap-2 rounded border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setAwardsMutation({ isShowing: false, type: null });
                setAwardsVal("");
              }}
              className="text-xs py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
