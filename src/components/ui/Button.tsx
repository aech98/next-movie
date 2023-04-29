import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

const buttonVariants = cva("font-500 font-pop rounded-sm", {
  variants: {
    variant: {
      unstyled: "text-neutral-500 hover:text-neutral-600",
      primary: "text-dark bg-pri hover:bg-pri/90",
      outlined:
        "text-white bg-dark ring-1 ring-white hover:ring-neutral-400 hover:text-neutral-400",
    },

    size: {
      none: "text-xsm",
      sm: "py-2 px-8 text-xsm",
    },
  },

  defaultVariants: {
    variant: "unstyled",
    size: "none",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(className, buttonVariants({ variant, size }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
