// import { ToastProvider } from "@radix-ui/react-toast";
import { useState } from "react";
import { Button } from "../../components/osprey/ui/button/view/Button";

import type { Meta, StoryObj } from "@storybook/react";
import { useToastStore } from "../../components/osprey/ui/overlays/toast/utils/store";
import { Toast, ToastProvider, ToastRoot, ToastViewport } from "../../components/osprey/ui/overlays/toast/view/Toast";

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
    // <ToastProvider>
    //   <Button
    //     onClick={() => {
    //       setOpen(true);
    //     }}
    //   >
    //     Sample Toast
    //   </Button>
    //   <Toast title="Pull Request Review" content="Someone requested your review on" duration={0.25} />
    //   <ToastViewport className="ToastViewport" />
    // </ToastProvider>

    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Toast
      </Button>
      <ToastProvider>
        <ToastRoot duration={2000}>
          <Toast
            startIcon={
              <svg className="w-7 h-7 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                  fill="currentColor"
                />
              </svg>
            }
            color="default"
            title="Pull Request Review"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          >
            <Button size="small" variant="outline">
              Undo
            </Button>
            <Button size="small" variant="outline">
              Save
            </Button>
          </Toast>
        </ToastRoot>
        <ToastViewport className="ToastViewport" />
      </ToastProvider>
    </>
  );
};

export const Toasts: Story = {
  args: {
    children: <ToastComponent />,
  },
};
