import { HTMLAttributes, forwardRef } from "react";
import { styles } from "../utils/styles";

export const RootContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...restProps }, forwardedRef) => {
    return (
      <div {...restProps} ref={forwardedRef} className={styles.root(className)}>
        {children}
      </div>
    );
  }
);

RootContainer.displayName = "RootContainer";
