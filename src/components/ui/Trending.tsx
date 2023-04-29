import { FC } from "react";
import clsx from "clsx";
import Paragraph from "@/components/ui/Paragraph";

interface TrendingProps {
  className?: string;
}

const Trending: FC<TrendingProps> = ({ className }) => {
  return (
    <Paragraph className={clsx("", className)}>
      Trending&nbsp;&#128293;
    </Paragraph>
  );
};

export default Trending;
