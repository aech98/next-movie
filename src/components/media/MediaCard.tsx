import { FC } from "react";
import Image from "next/image";
import { Heading3 } from "@/components/ui/Headings";
import Paragraph from "@/components/ui/Paragraph";
import Rating from "@/components/ui/Rating";

interface MediaCardProps {
  id: number;
  src: string;
  alt: string;
  title: string;
  releaseDate: string;
  rating: number;
}

const MediaCard: FC<MediaCardProps> = ({
  src,
  alt,
  title,
  releaseDate,
  rating,
}) => {
  return (
    <div className="h-full relative rounded-3xl overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[linear-gradient(rgba(0,0,0,0.32),rgba(0,0,0,0.3))] after:z-20">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full relative"
        fill={true}
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <article className="absolute bottom-0 left-0 w-full p-4 bg-transparent backdrop-blur-lg rounded-t-3xl grid grid-cols-[1fr_0.2fr] z-30">
        <div className="border-r border-neutral-400">
          <Heading3 className="line-clamp-1 mb-1">{title}</Heading3>
          <Paragraph>{releaseDate}</Paragraph>
        </div>
        <Rating rating={rating} className="justify-self-end" />
      </article>
    </div>
  );
};

export default MediaCard;
