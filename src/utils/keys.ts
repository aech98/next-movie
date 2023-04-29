export const getMediaApiKey = () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey || apiKey.length === 0) {
    throw new Error("Error fetching TMDB_API_KEY");
  }

  return apiKey;
};
