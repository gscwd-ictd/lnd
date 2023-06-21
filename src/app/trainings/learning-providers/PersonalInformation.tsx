"use client";

import { Input } from "@lms/components/osprey/ui/input/view/Input";
import { useLspDetailsStore } from "@lms/utilities/stores/lsp-details-store";
import { FunctionComponent } from "react";

export const PersonalInformation: FunctionComponent = () => {
  const fname = useLspDetailsStore((state) => state.firstName);
  const setFname = useLspDetailsStore((state) => state.setFirstName);

  const mname = useLspDetailsStore((state) => state.middleName);
  const setMname = useLspDetailsStore((state) => state.setMiddleName);

  const lname = useLspDetailsStore((state) => state.lastName);
  const setLname = useLspDetailsStore((state) => state.setLastName);

  const intro = useLspDetailsStore((state) => state.introduction);
  const setIntro = useLspDetailsStore((state) => state.setIntroduction);

  return (
    <>
      <div>
        <label htmlFor="fname" className="text-xs font-medium text-gray-600">
          First Name
        </label>
        <Input
          id="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          size="small"
          placeholder="Enter first name"
        />
      </div>

      <div>
        <label htmlFor="mname" className="text-xs font-medium text-gray-600">
          Middle Name
        </label>
        <Input
          id="mname"
          value={mname}
          onChange={(e) => setMname(e.target.value)}
          size="small"
          placeholder="Enter middle name"
        />
      </div>

      <div>
        <label htmlFor="lname" className="text-xs font-medium text-gray-600">
          Last Name
        </label>
        <Input
          id="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          size="small"
          placeholder="Enter last name"
        />
      </div>

      <div className="mt-1">
        <label htmlFor="intro" className="block text-xs font-medium text-gray-600 mb-1">
          Introduction
        </label>
        <textarea
          id="intro"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          rows={4}
          placeholder="Please enter the LSP's preferred introduction here"
          className="w-full py-3 px-4 placeholder:text-gray-300 block border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </>
  );
};