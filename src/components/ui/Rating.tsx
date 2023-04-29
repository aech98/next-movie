import { FC } from "react";
import clsx from "clsx";
import { Star } from "lucide-react";
import Paragraph from "@/components/ui/Paragraph";

interface RatingProps {
  rating: number;
  className?: string;
}

const Rating: FC<RatingProps> = ({ rating, className }) => {
  return (
    <Paragraph className={clsx("flex items-center", className)}>
      <Star className="mr-1" fill="#FFF" size={14} />
      {rating}
    </Paragraph>
  );
};

export default Rating;
