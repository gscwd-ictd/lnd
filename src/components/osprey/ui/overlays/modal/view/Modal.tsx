import { Root, DialogProps, Content, Portal, Overlay, Trigger, Close } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ElementRef, forwardRef, FunctionComponent, useContext, useState } from "react";
import { ModalContext } from "../utils/context";
import { ModalCompositionProps, ModalContentProps } from "../utils/props";
import { ScrollableArea } from "../../../scrollable-area/view/ScrollableArea";
import { styles } from "../utils/styles";
import { ModalContentComposition } from "../utils/types";

/**
 * Copy Dialog.Trigger as ModalTrigger
 *
 * This component is used to open the modal
 */
export const ModalTrigger = Trigger;

/**
 * Copy Dialog.Close as ModalClose
 *
 * This component is used to close the modal
 */
export const ModalClose = Close;

/**
 *
 * - A component in which users cannot interact with your application until it is closed.
 * - Interrupt the user’s attention and halt all other actions until a message is dealt with or dismissed.
 * - This component is using radix-ui's Dialog primitive for out-of-the-box accessibility.
 * - Please visit their official website documentation to learn more: https://www.radix-ui.com/docs/primitives/components/dialog
 *
 * @example
 * <Modal>
 *    <ModalTrigger>Open Modal</ModalTrigger>
 *    <ModalContent>
 *       <ModalContent.Title>My Title</ModalContent.Title>
 *       <ModalContent.Body>The quick brown fox jumps over a lazy dog near the riverbanks.</ModalContent.Body>
 *       <ModalContent.Footer>
 *          <ModalClose>Okay</ModalClose>
 *       </ModalContent.Footer>
 *    </ModalContent>
 * <Modal />
 */
export const Modal: FunctionComponent<DialogProps> = ({ children, defaultOpen, modal = true, open = false }) => {
  /**
   * initialize state to listen to the current open state of Dialog.Root
   * expose this state via context so that it can be consumed by the Dialog.Content
   */
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Root
      // assign Dialog.Root props
      open={isOpen}
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={setIsOpen}
    >
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>
    </Root>
  );
};

/**
 * Abstraction component for <Dialog.Content />
 */
const modalContent = forwardRef<ElementRef<typeof Content>, ModalContentProps>(
  (
    {
      fixedHeight = false,
      center = false,
      size = "sm",
      children,
      forceMount,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onInteractOutside,
      ...props
    },
    forwardedRef
  ) => {
    /**
     * listen to the current value of Dialog.Root's open state so it can be used
     * by AnimatePresence for controlling the exit animation of ModalContent
     */
    const { isOpen } = useContext(ModalContext);

    const staticY = {
      initial: {
        opacity: 0,
        y: 20,
        width:
          size === "xs"
            ? "20rem"
            : size === "sm"
            ? "25rem"
            : size === "md"
            ? "30rem"
            : size === "lg"
            ? "70rem"
            : size === "xl"
            ? "90%"
            : "100%",
        height:
          size === "xs"
            ? "22rem"
            : fixedHeight && size === "sm"
            ? "27rem"
            : fixedHeight && size === "md"
            ? "32rem"
            : fixedHeight && size === "lg"
            ? "35rem"
            : fixedHeight && size === "xl"
            ? "90%"
            : fixedHeight && size === "full"
            ? "100%"
            : "",
      },
      exit: { opacity: 0, scale: 0.95 },
      animate: {
        opacity: 1,
        y: 0,
        width:
          size === "xs"
            ? "20rem"
            : size === "sm"
            ? "25rem"
            : size === "md"
            ? "30rem"
            : size === "lg"
            ? "70rem"
            : size === "xl"
            ? "90%"
            : "100%",
        height:
          size === "xs"
            ? "22rem"
            : fixedHeight && size === "sm"
            ? "27rem"
            : fixedHeight && size === "md"
            ? "32rem"
            : fixedHeight && size === "lg"
            ? "35rem"
            : fixedHeight && size === "xl"
            ? "90%"
            : fixedHeight && size === "full"
            ? "100%"
            : "",
      },
    };

    const dynamicY = {
      initial: {
        opacity: 0,
        y: 20,
        maxHeight: "90%",
        width:
          size === "xs"
            ? "20rem"
            : size === "sm"
            ? "25rem"
            : size === "md"
            ? "30rem"
            : size === "lg"
            ? "70rem"
            : size === "xl"
            ? "90%"
            : "100%",
      },
      exit: { opacity: 0, scale: 0.95 },
      animate: {
        opacity: 1,
        y: 0,
        maxHeight: "90%",
        width:
          size === "xs"
            ? "20rem"
            : size === "sm"
            ? "25rem"
            : size === "md"
            ? "30rem"
            : size === "lg"
            ? "70rem"
            : size === "xl"
            ? "90%"
            : "100%",
      },
    };

    return (
      <AnimatePresence>
        {isOpen ? (
          <Portal forceMount>
            <div className={styles.container}>
              <Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className={styles.overlay}
                />
              </Overlay>
              <Content
                {...props}
                ref={forwardedRef}
                asChild
                forceMount
                onOpenAutoFocus={onOpenAutoFocus}
                onCloseAutoFocus={onCloseAutoFocus}
                onEscapeKeyDown={onEscapeKeyDown}
                onPointerDownOutside={onPointerDownOutside}
                onInteractOutside={onInteractOutside}
              >
                <div className={styles.content(size, center)}>
                  <motion.div
                    variants={fixedHeight ? staticY : dynamicY}
                    initial={fixedHeight ? staticY.initial : dynamicY.initial}
                    animate={fixedHeight ? staticY.animate : dynamicY.animate}
                    exit={fixedHeight ? staticY.exit : dynamicY.exit}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={styles.motionDiv(size)}
                  >
                    {children}
                  </motion.div>
                </div>
              </Content>
            </div>
          </Portal>
        ) : null}
      </AnimatePresence>
    );
  }
);

/**
 * Custom Title component for ModalContent
 */
const Title: FunctionComponent<ModalCompositionProps> = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};

/**
 * Custom Body component for ModalContent
 */
const Body: FunctionComponent<ModalCompositionProps> = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

/**
 * Custom Footer component for ModalContent
 */
const Footer: FunctionComponent<ModalCompositionProps> = ({ children }) => {
  return <div className={`${styles.footer}`}>{children}</div>;
};

/**
 * This component is using a compound component pattern in conjunction with forwarding
 * refs and inheriting props from Dialog.Content.
 * Please refer to this stackoverflow question to learn more:
 * https://stackoverflow.com/questions/70202711/
 */
export const ModalContent = {
  ...modalContent,
  Title: Title,
  Body: Body,
  Footer: Footer,
} as ModalContentComposition<FunctionComponent<ModalCompositionProps>>;

modalContent.displayName = "ModalContent";
