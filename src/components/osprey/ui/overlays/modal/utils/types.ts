import { ModalContentProps } from "./props";
import { Content } from "@radix-ui/react-dialog";

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Custom type for combining Dialog.Content props and Modal compound components
 */
export type ModalContentComposition<T> = React.ForwardRefExoticComponent<
  ModalContentProps & React.RefAttributes<typeof Content>
> & {
  Title: T;
  Body: T;
  Footer: T;
};

/**
 * Modal context state to keep track of modal's open state
 */
export type ModalContextState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};
