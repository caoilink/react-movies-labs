import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvsContext } from "../contexts/tvsContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/tvCardIcons/removeFromFavorites";
import WriteReview from "../components/tvCardIcons/writeReview";

const FavoriteTvsPage = () => {
  const {favorites: tvIds } = useContext(TvsContext);

  // Create an array of queries and run in parallel.
  const favoriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvs = favoriteTvQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Tvs"
      tvs={tvs}
      action={(tv) => {
        return (
          <>
            <RemoveFromFavorites tv={tv} />
            <WriteReview tv={tv} />
          </>
        );
      }}
    />
  );
};
export default FavoriteTvsPage;