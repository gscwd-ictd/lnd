import { Content } from "@radix-ui/react-dialog";
import { ModalSize } from "./types";
import { ReactNode } from "react";

/**
 * Type used for modal's compound components - Title, Body, and Footer
 */
export type ModalCompositionProps = {
  children: ReactNode | ReactNode[];
};

/**
 * Custom type for ModalContent component
 */
export type ModalContentProps = React.ComponentPropsWithoutRef<typeof Content> & {
  fixedHeight?: boolean;
  center?: boolean;
  size?: ModalSize;
  isStatic?: boolean;
};
