import PopularMovies from "@/components/media/PopularMovies";
import UpcomingMovies from "@/components/media/UpcomingMovies";
import { fetchMovies } from "@/lib/media";

export default async function Movies() {
  const { data: popularMovies, error } = await fetchMovies("popular");
  const { data: upcomingMovies, error: _ } = await fetchMovies("upcoming");

  return (
    <section>
      <UpcomingMovies movies={upcomingMovies!} />
      <PopularMovies movies={popularMovies!} />
    </section>
  );
}
