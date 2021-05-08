export default function searchResultsTransformer(response) {
  return response?.map(
    ({ id, title, overview, vote_average, poster_path, release_date }) => ({
      id,
      poster: poster_path,
      title,
      year: release_date,
      blurb: overview,
      rating: vote_average,
    })
  );
}
