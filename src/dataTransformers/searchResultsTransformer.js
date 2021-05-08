export default function searchResultsTransformer(response) {
  return response?.map(
    ({ id, title, overview, vote_average, poster_path, release_date }) => {
      const year = release_date?.split("-")[0];
      return {
        id,
        poster: poster_path,
        title,
        year,
        blurb: overview,
        rating: vote_average,
      };
    }
  );
}
