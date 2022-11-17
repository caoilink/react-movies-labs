import { useEffect, useState } from "react";
import {getMovie} from '../api/tmdb-api';
import {getMoviesUpcoming} from '../api/tmdb-api';

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);

  useEffect(() => {
    getMoviesUpcoming(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie;