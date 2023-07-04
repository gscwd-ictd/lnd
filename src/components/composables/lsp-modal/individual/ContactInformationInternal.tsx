"use client";

import { Input } from "@lms/components/osprey/ui/input/view/Input";
import { useLspDetailsStore } from "@lms/utilities/stores/lsp-details-store";
import { FunctionComponent } from "react";

export const ContactInformationInternal: FunctionComponent = () => {
  const number = useLspDetailsStore((state) => state.contactNumber);
  const email = useLspDetailsStore((state) => state.email);
  const address = useLspDetailsStore((state) => state.postalAddress);

  return (
    <>
      <div>
        <label htmlFor="number" className="text-xs font-medium text-gray-600">
          Contact number
        </label>
        <Input
          id="number"
          defaultValue={number}
          disabled
          size="small"
          placeholder="Enter contact number"
          className="placeholder:text-xs"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-medium text-gray-600">
          Email address
        </label>
        <Input
          id="email"
          defaultValue={email}
          disabled
          size="small"
          placeholder="Enter email address"
          className="placeholder:text-xs"
        />
      </div>

      <div>
        <label htmlFor="address" className="text-xs font-medium text-gray-600">
          Postal address
        </label>
        <textarea
          defaultValue={address}
          disabled
          id="address"
          rows={4}
          placeholder="Enter postal address"
          className={`bg-gray-50 text-gray-500 w-full py-3 px-4 placeholder:text-gray-300 placeholder:text-xs resize-none border-gray-100 rounded-md text-sm`}
        />
      </div>
    </>
  );
};
