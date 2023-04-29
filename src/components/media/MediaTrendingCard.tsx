import { FC } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Trending from "@/components/ui/Trending";

interface TrendingCardProps {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const TrendingCard: FC<TrendingCardProps> = ({ src, alt, title }) => {
  return (
    <div>
      <Image src={src} alt={alt} />
      <Trending />
      <Button>
        <Play />
        Watch Now
      </Button>
      <h3>{title}</h3>
    </div>
  );
};

export default TrendingCard;
