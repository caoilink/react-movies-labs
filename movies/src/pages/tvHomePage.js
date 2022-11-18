import React from "react";
import { getTvs } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/tvCardIcons/addToFavorites';

const TvHomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvs.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (tvId) => true 

  return (
    <PageTemplate
      title="Discover Tvs"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavoritesIcon tv={tv} />
      }}
    />
);
};
export default TvHomePage;