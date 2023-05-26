import { ComponentPropsWithoutRef, createContext, ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { Content } from "@radix-ui/react-dialog";
import { ModalContextState } from "./types";

/**
 * Initialize ModalContext
 */
export const ModalContext = createContext({} as ModalContextState);
