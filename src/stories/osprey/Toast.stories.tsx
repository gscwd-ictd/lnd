// import { ToastProvider } from "@radix-ui/react-toast";
import { useState } from "react";
import { Button } from "../../components/osprey/ui/button/view/Button";
import { Toast, ToastProvider, ToastViewport } from "../../components/osprey/ui/overlays/toast/view/Toast";
import type { Meta, StoryObj } from "@storybook/react";
import { useToastStore } from "../../components/osprey/ui/overlays/toast/utils/store";

const meta: Meta<typeof ToastProvider> = {
  title: "Example/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

const ToastComponent = () => {
  const { setOpen } = useToastStore();
  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Sample Toast
      </Button>
      <Toast title="Pull Request Review" content="Someone requested your review on" />
      <ToastViewport className="ToastViewport" />
    </ToastProvider>
  );
};

export const Toasts: Story = {
  args: {
    children: <ToastComponent />,
  },
};
