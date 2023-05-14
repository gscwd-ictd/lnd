import { HTMLAttributes, forwardRef } from "react";
import { styles } from "../utils/styles";

export const PageContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <main {...restProps} ref={forwardedRef} className={styles.pageContent(className)}>
        {children}
      </main>
    );
  }
);

PageContent.displayName = "PageContent";
