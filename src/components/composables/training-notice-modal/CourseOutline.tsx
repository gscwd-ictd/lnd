"use client";

import { FunctionComponent, MutableRefObject, useRef, useState } from "react";
import { UndrawContractSvg } from "../lsp-modal/UndrawContractSvg";
import { Input } from "@lms/components/osprey/ui/input/view/Input";
import { CourseContent } from "@lms/utilities/types/training";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useTrainingNoticeStore } from "@lms/utilities/stores/training-notice-store";

type Mutation = {
  type: "add" | "edit";
};

export const CourseOutline: FunctionComponent = () => {
  const [courseVal, setCourseVal] = useState("");
  const [mutation, setMutation] = useState<Mutation>({ type: "add" });
  const [courseIndexToEdit, setCourseIndexToEdit] = useState(-1);

  const courseContents = useTrainingNoticeStore((state) => state.courseContents);
  const setCourseContents = useTrainingNoticeStore((state) => state.setCourseContents);

  const courseInputRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;

  return (
    <>
      <div className="w-full flex items-center justify-between mb-10">
        <div className="mt-1 w-full">
          <form
            className="space-y-1"
            onSubmit={(e) => {
              e.preventDefault();

              /**
               *  if mutation type is add
               */
              if (mutation.type === "add") {
                // add course item
                setCourseContents([...courseContents, { title: courseVal }]);

                /**
                 *  if mutation type is edit
                 */
              } else if (mutation.type === "edit") {
                // create a copy of course content
                const newCourseContents = [...courseContents];

                // update the value of selected course item
                newCourseContents[courseIndexToEdit] = { title: courseVal };

                // set new value for course content
                setCourseContents(newCourseContents);

                // reset mutation type to add
                setMutation({ type: "add" });

                // reset course index to edit
                setCourseIndexToEdit(-1);
              }

              // reset value for input
              setCourseVal("");
            }}
          >
            <div className="mb-2">
              <label htmlFor="course-content" className="block text-xs font-medium text-gray-700">
                Course content
              </label>
              <p className="text-xs text-gray-500">The specific subject matter & topics covered in the training.</p>
            </div>

            <Input
              ref={courseInputRef}
              id="course-content"
              value={courseVal}
              onChange={(e) => setCourseVal(e.target.value)}
              placeholder="Add course content..."
              size="small"
              className="placeholder:text-xs w-full"
              helperText="Press Enter to add or update selected course content in the list."
            />
          </form>
        </div>
      </div>
      {courseContents?.length === 0 ? (
        <div className="border-2 bg-gray-50/50 rounded-lg border-dashed w-full flex items-center justify-center">
          <div className="py-4">
            <div className="flex justify-center">
              <UndrawContractSvg />
            </div>
            <h3 className="text-gray-500">Nothing to display</h3>
          </div>
        </div>
      ) : (
        <ul className="space-y-2">
          {courseContents?.map((item, index) => (
            <div
              key={index}
              className="text-sm border-l-4 border-l-rose-400 border-y border-r rounded-r grid grid-cols-12"
            >
              <div className="col-span-10 pl-4 py-2">
                <h3 className="font-medium">{item.title}</h3>
              </div>
              <div className="col-span-2 py-2 text-center flex items-start justify-center gap-1">
                <Tooltip.Provider delayDuration={500}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button
                        onClick={() => {
                          courseInputRef?.current?.focus();
                          setCourseIndexToEdit(index);
                          setCourseVal(item.title);
                          setMutation({ type: "edit" });
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
                          const newCourseContents = [...courseContents];
                          newCourseContents.splice(index, 1);
                          setCourseContents(newCourseContents);
                          setCourseVal("");
                          courseInputRef?.current?.focus();
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
    </>
  );
};
