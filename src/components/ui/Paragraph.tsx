import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={clsx(
          "text-slate-200 text-pop font-400 text-xxsm lg:text-xsm",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
