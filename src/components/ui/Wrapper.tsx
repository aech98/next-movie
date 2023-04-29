import { FC, ReactNode } from "react";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { Heading2 } from "@/components/ui/Headings";
import Button from "@/components/ui/Button";

interface WrapperProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

const Wrapper: FC<WrapperProps> = ({ children, label, className }) => {
  return (
    <div className={clsx("grid grid-cols-12", className)}>
      {label ? (
        <div className="col-span-full flex items-center justify-between mb-4">
          <Heading2>{label}</Heading2>
          <Button className="flex items-center">
            See more <ChevronRight className="ml-1" size={18} />
          </Button>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Wrapper;
