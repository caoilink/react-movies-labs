import { useEffect, useState } from "react";
import {getTrendingMovies} from '../api/tmdb-api';

const useTrendingMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getTrendingMovies(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);

  return [movie, setMovie];
};

export default useTrendingMovie;