import cls from "classnames";

export const styles = {
  avatar: (size?: "sm" | "md" | "lg" | "xl") =>
    cls("inline-block rounded-full border-2 border-white", {
      "h-8 w-8 ": size === "sm",
      "h-[2.375rem] w-[2.375rem]": size === "md",
      "h-[2.875rem] w-[2.875rem]": size === "lg",
      "h-[3.875rem] w-[3.875rem]": size === "xl",
    }),
};
