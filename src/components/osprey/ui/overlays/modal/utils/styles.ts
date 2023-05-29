import cls from "classnames";
import { ModalSize } from "./types";

export const styles = {
  container: "fixed inset-0 transition-all",
  overlay: "fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-opacity-0",
  content: (size: ModalSize | undefined, center: boolean | undefined) =>
    cls("flex flex-col items-center w-full h-full", {
      "pt-10": !center && size !== "full",
      "py-10": center && size !== "full",
      "justify-center": center,
    }),

  motionDiv: (size: ModalSize | undefined, shake: boolean) => {
    return cls("bg-white z-50 text-midnight-700 flex flex-col dark:bg-midnight-800 dark:text-midnight-200", {
      "rounded-md": size !== "full",
      "animate-shake": shake,
    });
  },

  childrenContainer: "h-full flex flex-col",
  title: "pl-4 pr-2 py-2 border-b",
  body: "p-4 flex-1 overflow-y-auto overflow-clip",
  footer: "px-4 py-2 border-t",
};
