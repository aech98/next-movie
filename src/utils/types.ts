export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: string;
};

export type MediaApiResult = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
