"use client";

import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import { SlideOver } from "@lms/components/osprey/ui/overlays/slider-over/view/SliderOver";
import { useState } from "react";

export default function DashboardArchives() {
  const [open, setOpen] = useState(false);
  // const { isOpen, setIsOpen } = useContext(ModalContext);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-96">
          <SlideOver open={open} setOpen={setOpen} size="sm">
            <SlideOver.Header>Header</SlideOver.Header>
            <SlideOver.Body>Body</SlideOver.Body>
            <SlideOver.Footer>Footer</SlideOver.Footer>
          </SlideOver>

          <Button onClick={() => setOpen(true)}>Open Slider</Button>

          <Modal
            isOpen={modal1}
            setIsOpen={setModal1}
            isStatic
            closeFn={() => console.log("do something else")}
            fixedHeight
            size="lg"
          >
            <ModalTrigger asChild>
              <Button>Open Modal</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalContent.Title>lorem2</ModalContent.Title>
              <ModalContent.Body>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam commodi in earum laudantium eveniet
                  numquam soluta laborum minima deleniti? Repellendus laudantium magni amet odit vero fugit minima
                  temporibus? Nisi, distinctio harum placeat iure amet magnam maxime laudantium asperiores esse
                  consequatur repellendus iusto neque accusantium delectus alias deleniti dolores itaque quia quibusdam
                  molestias fugiat facilis eius. Accusantium quis aut saepe incidunt molestias aperiam dicta deleniti
                  ab. Culpa deleniti voluptatum consequatur dolores? Et asperiores tempora illum eveniet est aspernatur,
                  ullam eligendi inventore quisquam ut ipsam magni placeat labore tempore. Itaque, eveniet laudantium
                </p>
              </ModalContent.Body>
              <ModalContent.Footer>
                <div className="flex justify-end">
                  <Button size="small" variant="ghost" onClick={() => setModal1(false)}>
                    Cancel
                  </Button>
                </div>
              </ModalContent.Footer>
            </ModalContent>
          </Modal>

          <Modal isOpen={modal2} setIsOpen={setModal2} closeFn={() => console.log("closer")}>
            <ModalTrigger>Test 2</ModalTrigger>

            <ModalContent>
              <ModalContent.Title>Title</ModalContent.Title>
              <ModalContent.Body>Body</ModalContent.Body>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
