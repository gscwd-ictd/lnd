import { Action, Close, Description, Provider, Root, Title, Viewport } from "@radix-ui/react-toast";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, FunctionComponent, ReactNode } from "react";
import { styles } from "../utils/style";
import { AnimatePresence, motion } from "framer-motion";
import { useToastStore } from "../utils/store";

type ToastProps = {
  title?: string;
  content?: string;
  children?: ReactNode | ReactNode[];
};

const Toasts: FunctionComponent<ToastProps> = ({ title, content, children }) => {
  const open = useToastStore((state) => state.open);
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          exit={{ x: 50, opacity: 0, transition: { duration: 0.25 } }}
          className="flex md:w-full md:max-w-sm shadow-lg rounded-lg bg-white border"
        >
          <div className="w-0 flex-1 flex items-center pl-5 py-4">
            <div className="w-full">
              {title && <Title className={`${styles.title}`}>{title}</Title>}
              <Description className={`${styles.description}`}>{content}</Description>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col px-3 py-2 space-y-1">
              <div className="h-0 flex-1 flex">
                <Close className={`${styles.close}`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="Menu / Close_SM">
                        <path
                          id="Vector"
                          d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Close>
              </div>
              <div className="h-0 flex-1 flex">
                {children && (
                  <Action asChild altText="Test">
                    {children}
                  </Action>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export const Toast = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ title, content, ...props }, forwardedRef) => {
    const { open, setOpen } = useToastStore();

    return (
      <Root
        ref={forwardedRef}
        {...props}
        className="top-2 right-2 fixed w-96"
        open={open}
        onOpenChange={setOpen}
        forceMount
      >
        <Toasts title={title} content={content} />
      </Root>
    );
  }
);

export const ToastProvider = Provider;

export const ToastViewport = Viewport;

Toast.displayName = "Toast";
