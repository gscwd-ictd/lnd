"use client";

import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "@lms/components/osprey/ui/input/view/Input";
import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { TrainingType } from "@lms/utilities/types/training-type.type";
import { url } from "@lms/utilities/url/api-url";

export const UdpdateTrainingTypeModal = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [trainingType, setTrainingType] = useState<TrainingType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingType>();

  const onSubmit: SubmitHandler<TrainingType> = async (data) => {
    const res = await axios.patch(`${url}/training-types/${id}`, data);
    setIsOpen(false);
  };

  //Initialize training type name
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${url}/training-types/${id}`);
      setTrainingType(data);
    };
    getData();
  }, [id]);

  return (
    <>
      <button className="border px-2 py-1 rounded shadow-sm text-gray-700" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        size="md"
        isStatic={true}
        onClose={() => console.log("close button")}
      >
        <ModalTrigger asChild></ModalTrigger>
        <ModalContent>
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Training Type</h3>
            <p className="text-gray-500">Update training type</p>
          </ModalContent.Title>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <ModalContent.Body>
              <div className="flex flex-col gap-2">
                <div>Training Type</div>
                <Input defaultValue={trainingType?.name} {...register("name")} />
              </div>
            </ModalContent.Body>
            <ModalContent.Footer>
              <div className="flex items-center justify-end py-1">
                <Button size="small">Update</Button>
              </div>
            </ModalContent.Footer>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
