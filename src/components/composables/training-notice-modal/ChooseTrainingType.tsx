"use client";

import { RadioGroup } from "@headlessui/react";
import {
  useSelectedTrainingType,
  useTrainingNoticeStore,
  useTrainingTypesStore,
} from "@lms/utilities/stores/training-notice-store";
import { TrainingType } from "@lms/utilities/types/training";
import { url } from "@lms/utilities/url/api-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, FunctionComponent, useEffect, useState } from "react";

export const ChooseTrainingType: FunctionComponent = () => {
  // the state to hold all training type options
  const { trainingTypes, setTrainingTypes } = useTrainingTypesStore();

  // the state to hold the selected training type from the options
  const selectedTrainingType = useSelectedTrainingType((state) => state.selectedTrainingType);
  const setSelectedTrainingType = useSelectedTrainingType((state) => state.setSelectedTrainingType);

  const setTrainingType = useTrainingNoticeStore((state) => state.setTrainingType);

  useEffect(() => {
    if (selectedTrainingType === undefined) setSelectedTrainingType(trainingTypes[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainingTypes]);

  useQuery({
    queryKey: ["training-type", trainingTypes],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/training-types`);
      setTrainingTypes(data.items);
      return data.items as TrainingType[];
    },
    enabled: trainingTypes.length === 0,
  });

  useEffect(() => {
    setTrainingType(selectedTrainingType?.id as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTrainingType]);

  return (
    <RadioGroup name="type" defaultValue={trainingTypes[0]} className="">
      <div className="mb-3 mt-5">
        <RadioGroup.Label as="div">
          <h3>Training Types</h3>
          <p className="text-xs text-gray-500">Choose a training type from the options below</p>
        </RadioGroup.Label>
      </div>
      {trainingTypes.map((type, index) => (
        <RadioGroup.Option key={index} value={type.id} as={Fragment}>
          {({ active, checked }) => {
            // set checked value if training type from global store is equal to current name
            checked = selectedTrainingType?.name === type.name;

            return (
              <div
                className={`${
                  checked ? "bg-indigo-500 text-white font-medium" : "bg-white text-gray-600"
                } cursor-pointer px-4 py-2 mb-2 border rounded flex items-center justify-between hover:scale-105 transition-transform`}
                onClick={() => setSelectedTrainingType(type)}
              >
                <p>{type.name}</p>
                {checked && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            );
          }}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
