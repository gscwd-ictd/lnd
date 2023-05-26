"use client";

import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/overlays/modal/view/Modal";
import { SlideOver } from "@lms/components/osprey/ui/overlays/slider-over/view/SliderOver";
import { useState } from "react";

export default function DashboardArchives() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

          <Modal>
            <ModalTrigger asChild>
              <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
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
                  deleniti sit natus magni aperiam maiores sed porro, repellendus quidem vitae nesciunt inventore vero
                  quod beatae neque labore ad corporis, nemo qui. Laudantium voluptas commodi doloremque asperiores
                  quaerat porro? Distinctio officia blanditiis doloremque. Autem, voluptatibus tempora accusamus modi
                  excepturi quod totam voluptatem accusantium unde fugit sed, provident libero laboriosam molestiae
                  quas? Laborum nobis fuga laudantium saepe cum ea. Odio ducimus molestiae reiciendis nulla. Dolorum,
                  voluptate! Tempora, vel. Numquam omnis sapiente laboriosam voluptatum, quis maxime perspiciatis
                  facilis! Incidunt autem nostrum laborum placeat dolore consectetur at nihil, necessitatibus adipisci
                  ad ex amet mollitia minus, eos enim repellendus dolores esse dolor praesentium, animi iusto.
                  Doloremque eos adipisci itaque molestiae praesentium ducimus placeat vero quae ipsam saepe
                  reprehenderit ea repellat, eum obcaecati et odio hic laudantium deserunt ut numquam dolores tempore
                  necessitatibus excepturi? Recusandae a officiis accusantium totam natus tempore commodi expedita
                  provident maxime nesciunt veniam tenetur corrupti cum consequatur enim eius quaerat rerum ad at,
                  tempora ex. Libero minus ad ab cupiditate illum aliquid odio incidunt ut esse hic, quae deleniti
                  corrupti cumque reiciendis architecto suscipit provident officiis assumenda dolorum fugit. Dicta aut
                  doloribus sapiente, minima eligendi labore deserunt veritatis, minus magnam quam error sed sequi
                  dignissimos. Voluptatibus quaerat eum, porro similique laborum, ad corrupti distinctio accusantium in
                  velit dolore aperiam ullam. Facere laudantium quam minima deserunt aspernatur fugiat temporibus
                  similique expedita dicta molestiae vel sequi inventore eius eos quasi, beatae neque velit ullam dolore
                  quo. Adipisci, quis natus veniam necessitatibus molestias voluptates suscipit quidem asperiores alias
                  iure repellendus in aliquam fugiat, quas saepe corrupti quae vitae voluptatibus, eius neque
                  exercitationem ullam? Quasi, eum rem? Ad eaque deserunt perspiciatis maiores! Aliquam cumque nostrum
                  alias necessitatibus impedit fugiat, natus nulla, minus tempora saepe dolorem vitae ipsam incidunt
                  totam dolore, omnis quibusdam architecto similique fugit. Sequi, recusandae. Aliquid, autem quae
                  facilis eaque exercitationem quisquam molestias reprehenderit non harum cumque, eos consectetur
                  delectus consequatur! Odio voluptate autem corrupti quasi accusamus dolor nobis, amet, tempore animi
                  fuga expedita harum repellat cupiditate tenetur quaerat iusto aliquam vero optio in fugiat? Natus
                  necessitatibus tempore magnam quos repudiandae ipsa error voluptatem. Id, obcaecati sed voluptatem
                  voluptate velit consequatur itaque vel eius quo, nulla est fugit nemo accusamus deserunt similique
                  quae enim hic labore consequuntur placeat natus cumque sit cupiditate earum? Voluptate ipsam animi,
                  saepe, totam commodi magnam quidem earum nulla temporibus ea deserunt officiis omnis? Voluptatum
                  officiis deleniti nobis error saepe accusantium placeat ad accusamus magni dolore, dolorum, ab
                  consectetur veritatis esse, rem dolor. Repellat praesentium veniam dolor quisquam consequatur.
                </p>
              </ModalContent.Body>
              <ModalContent.Footer>Footer</ModalContent.Footer>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
