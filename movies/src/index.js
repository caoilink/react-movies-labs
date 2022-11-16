import React from "react";
import ReactDOM from "react-dom";
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Upcoming from "./pages/upcoming"
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader />
    <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/movies/upcoming" element={<Upcoming />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
