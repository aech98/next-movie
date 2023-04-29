"use client";

import { FC } from "react";
import SwiperManager from "@/components/common/SwiperManager";
import Wrapper from "@/components/ui/Wrapper";
import { mediaSwiperOptions } from "@/configs/swiperOptions";
import { Movie } from "@/utils/types";
import MediaCard from "@/components/media/MediaCard";

interface PopularMoviesProps {
  movies: Movie[];
}

const PopularMovies: FC<PopularMoviesProps> = ({ movies }) => {
  return (
    <Wrapper label="Popular Movies">
      <SwiperManager
        items={movies}
        swiperOptions={mediaSwiperOptions}
        keyExtractor={(item) => item.id}
        renderItem={({
          backdrop_path,
          id,
          title,
          release_date,
          vote_average,
        }) => (
          <MediaCard
            id={id}
            title={title}
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            releaseDate={release_date}
            rating={Number.parseInt(vote_average)}
          />
        )}
        swiperClassName="col-span-full !w-full"
        swiperSliderClassName="!w-[25rem] !h-[15rem]"
      />
    </Wrapper>
  );
};

export default PopularMovies;
