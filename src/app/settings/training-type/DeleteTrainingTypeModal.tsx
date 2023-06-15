import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Modal, ModalTrigger, ModalContent } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { TrainingType } from "@lms/utilities/types/training-type.type";

export const DeleteTrainingTypeModal = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrainingType>();

  const onSubmit: SubmitHandler<TrainingType> = async () => {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/training-types/${id}`);
    setIsOpen(false);
  };

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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        size="md"
        isStatic={true}
        closeFn={() => console.log("close button")}
      >
        <ModalTrigger asChild></ModalTrigger>
        <ModalContent>
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Training Type</h3>
            <p className="text-gray-500">Delete training type</p>
          </ModalContent.Title>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <ModalContent.Body>
              <div>Are you sure you want to delete this training type?</div>
              {/* <div className="flex items-center justify-end gap-2 py-2"></div> */}
            </ModalContent.Body>
            <ModalContent.Footer>
              <div className="flex items-center justify-end py-1">
                <Button type="submit" size="small" color="danger">
                  Confirm
                </Button>
              </div>
            </ModalContent.Footer>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
