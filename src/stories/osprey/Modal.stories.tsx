import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalContent, ModalTrigger } from "../../components/osprey/ui/overlays/modal/view/Modal";
import { Button } from "../../components/osprey/ui/button/view/Button";

const meta: Meta<typeof Modal> = {
  title: "Example/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDynamicHeight = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

const ModalFixedHeightXs = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent fixedHeight size="xs">
          <ModalContent.Title>
            <h3 className="text-lg text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500 text-sm">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

const ModalFixedHeightSm = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent fixedHeight size="sm">
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

const ModalFixedHeightMd = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent fixedHeight size="md">
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

const ModalFixedHeightLg = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent fixedHeight size="lg">
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

const ModalFixedHeightXl = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent fixedHeight size="xl">
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

const ModalFixedHeightFull = () => {
  return (
    <div className="h-96 w-full flex items-center justify-center overflow-hidden">
      <Modal>
        <ModalTrigger asChild>
          <Button>Open Modal</Button>
        </ModalTrigger>
        <ModalContent fixedHeight size="full">
          <ModalContent.Title>
            <h3 className="text-2xl text-gray-700 font-semibold">Modal</h3>
            <p className="text-gray-500">This modal component has no fixed height</p>
          </ModalContent.Title>
          <ModalContent.Body>
            <p>
              Be bold. Motivate teams to do their best work. Offer best practices to get users going in the right
              direction. Be bold and offer just enough help to get the work started, and then get out of the way. Give
              accurate information so users can make educated decisions. Know your user&apos;s struggles and desired
              outcomes and give just enough information to let them get where they need to go. Be optimistic Focusing on
              the details gives people confidence in our products. Weave a consistent story across our fabric and be
              diligent about vocabulary across all messaging by being brand conscious across products to create a
              seamless flow across all the things. Let people know that they can jump in and start working expecting to
              find a dependable experience across all the things. Keep teams in the loop about what is happening by
              informing them of relevant features, products and opportunities for success. Be on the journey with them
              and highlight the key points that will help them the most - right now. Be in the moment by focusing
              attention on the important bits first. Be practical, with a wink Keep our own story short and give teams
              just enough to get moving. Get to the point and be direct. Be concise - we tell the story of how we can
              help, but we do it directly and with purpose. Be on the lookout for opportunities and be quick to offer a
              helping hand. At the same time realize that novbody likes a nosy neighbor. Give the user just enough to
              know that something awesome is around the corner and then get out of the way. Write clear, accurate, and
              concise text that makes interfaces more usable and consistent - and builds trust. We strive to write text
              that is understandable by anyone, anywhere, regardless of their culture or language so that everyone feels
              they are part of the team.
            </p>
          </ModalContent.Body>
          <ModalContent.Footer>
            <div className="flex items-center justify-end gap-2 py-2">
              <Button size="small" variant="ghost">
                Cancel
              </Button>
              <Button size="small">Confirm</Button>
            </div>
          </ModalContent.Footer>
        </ModalContent>
      </Modal>
    </div>
  );
};

export const NonFixedHeight: Story = {
  render: () => <ModalDynamicHeight />,
};

export const FixedHeightXs: Story = {
  render: () => <ModalFixedHeightXs />,
};

export const FixedHeightSm: Story = {
  render: () => <ModalFixedHeightSm />,
};

export const FixedHeightMd: Story = {
  render: () => <ModalFixedHeightMd />,
};

export const FixedHeightLg: Story = {
  render: () => <ModalFixedHeightLg />,
};

export const FixedHeightXl: Story = {
  render: () => <ModalFixedHeightXl />,
};

export const FixedHeightFull: Story = {
  render: () => <ModalFixedHeightFull />,
};
