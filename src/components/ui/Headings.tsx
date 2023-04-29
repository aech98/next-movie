import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";

/***********************
 # HEADING 1
***********************/
interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading1 = forwardRef<HTMLHeadingElement, Heading1Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={clsx(
          "text-white font-stix font-600 text-lg lg:text-xlg",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

Heading1.displayName = "Heading1";

/***********************
 # HEADING 2
***********************/
interface Heading2Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading2 = forwardRef<HTMLHeadingElement, Heading2Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={clsx(
          "text-slate-100 font-stix font-600 text-md lg:text-lg",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

Heading2.displayName = "Heading2";

/***********************
 # HEADING 3
***********************/
interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading3 = forwardRef<HTMLHeadingElement, Heading3Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={clsx(
          "text-slate-100 text-stix font-500 text-xsm lg:text-sm",
          className
        )}
      >
        {children}
      </p>
    );
  }
);

Heading3.displayName = "Heading3";
