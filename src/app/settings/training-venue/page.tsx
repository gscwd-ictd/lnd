"use client";

import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Input } from "@lms/components/osprey/ui/input/view/Input";
// import { TrainingType } from "@lms/lib/types/training-type.type";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type TrainingVenue = {
  name: String;
  address: String;
  contactNumber: String;
  contactPerson: String;
  email: String;
};

export default function TrainingTypes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingVenue>();

  const onSubmit: SubmitHandler<TrainingVenue> = async (data) => {
    const res = await axios.post("http://172.20.10.53:5286/api/lms/v1/training-types", data);
    console.log(res);
  };

  return (
    <div className="h-full w-full p-5">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2 m-5">
          <span className="h-14 w-14 flex items-center justify-center bg-gray-100 rounded">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9 5L5.63246 3.87749C4.33739 3.4458 3 4.40974 3 5.77485V17.5585C3 18.4193 3.55086 19.1836 4.36754 19.4558L9 21M9 5L15 3M9 5V21M15 3L19.6325 4.54415C20.4491 4.81638 21 5.58066 21 6.44152V18.2251C21 19.5903 19.6626 20.5542 18.3675 20.1225L15 19M15 3V19M15 19L9 21"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
          <h1 className="text-3xl font-bold text-gray-600">Training Venue</h1>
        </div>
        <div>
          <Button fluid>Create</Button>
        </div>
      </header>
      <div>
        <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit(onSubmit)}>
          <>Name</>
          <Input {...register("name")} />
          <>Address</>
          <Input {...register("address")} />
          <>Contact Number</>
          <Input {...register("contactNumber")} />
          <>Contact Person</>
          <Input {...register("contactPerson")} />
          <>Email</>
          <Input {...register("email")} />
          <Button fluid>Submit</Button>
        </form>
      </div>
    </div>
  );
}
