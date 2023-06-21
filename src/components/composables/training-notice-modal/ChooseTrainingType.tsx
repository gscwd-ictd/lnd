"use client";

import { FunctionComponent, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TrainingType } from "@lms/lib/types/training-type.type";
import { url } from "@lms/utilities/url/api-url";
import { useTrainingNoticeStore } from "@lms/utilities/stores/training-notice-store";

export const ChooseTrainingType: FunctionComponent = () => {
  const [types, setTypes] = useState<TrainingType[]>([]);
  const selected = useTrainingNoticeStore((state) => state.trainingType);
  const setSelected = useTrainingNoticeStore((state) => state.setTrainingType);
  //const [selected, setSelected] = useState(types[0]);

  useQuery({
    queryKey: ["training-type"],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/training-types`);
      setTypes(data.items);
      return data;
    },
  });

  return (
    <div className="w-full px-4 pt-10">
      <div className="mx-auto w-full max-w-md">
        <h3 className="mb-4 font-medium text-gray-700">Please choose a training type:</h3>

        <RadioGroup value={selected} onChange={setSelected}>
          {/* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label> */}
          <div className="space-y-2">
            {types.map((type, index) => (
              <RadioGroup.Option
                key={index}
                value={type}
                className={({ active, checked }) =>
                  `${checked ? "bg-indigo-700 bg-opacity-75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 border focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}
                          >
                            {type.name}
                          </RadioGroup.Label>
                          {/* <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? "text-indigo-100" : "text-gray-500"}`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{" "}
                            <span aria-hidden="true">&middot;</span> <span>{plan.disk}</span>
                          </RadioGroup.Description> */}
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
