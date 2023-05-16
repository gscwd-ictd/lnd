import { forwardRef } from "react";
import { styles } from "../utils/styles";
import { InputProps } from "../utils/props";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { size = "default", helperText, color = "primary", disabled = false, className, type = "text", ...restProps },
    forwardedRef
  ) => {
    return (
      <div>
        <div className="relative">
          <input
            disabled={disabled}
            type={type}
            {...restProps}
            ref={forwardedRef}
            className={styles.input(className, size, disabled, color)}
          />
          <div className="absolute right-0 pointer-events-none pr-3 h-full top-0 flex flex-col items-center justify-center">
            {color === "error" && (
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            )}

            {color === "success" && (
              <svg
                className="h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            )}
          </div>
        </div>
        <p className={styles.helperText(color)}>{helperText}</p>
      </div>
    );
  }
);

Input.displayName = "Input";
