import api from "@/lib/api";
import { TMDB_BASE_URL } from "@/utils/constants";
import { getMediaApiKey } from "@/utils/keys";
import { MediaApiResult } from "@/utils/types";

const mediaApi = api({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: getMediaApiKey(),
    language: "en-US",
    include_adult: false,
  },
});

export const fetchMovies = async (url: string) => {
  try {
    const response = await mediaApi.get<MediaApiResult>(`/movie/${url}`);
    if (response.status !== 200) throw new Error("Unable to fetch data!");
    return { data: response.data.results, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

export const fetchShows = (url: string) =>
  mediaApi.get<MediaApiResult>(`/tvshows/${url}`);

export const searchMedia = (url: string, query: string) =>
  mediaApi.get<MediaApiResult>(url, {
    params: {
      query,
    },
  });
