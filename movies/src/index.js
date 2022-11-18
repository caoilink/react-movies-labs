import React from "react";
import ReactDOM from "react-dom";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MoviesContextProvider from "./contexts/moviesContext";
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Upcoming from "./pages/upcoming"
import MoviePage from "./pages/movieDetailsPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
//test
import TvHomePage from './pages/tvHomePage'
import TvReviewPage from "./pages/tvReviewPage"
import FavoriteTvsPage from "./pages/favoriteTvsPage";
import TvPage from "./pages/tvDetailsPage";
//import TvsContextProvider from "./contexts/tvsContext";
import AddTvReviewPage from './pages/addTvReviewPage'
import TrendingHomePage from "./pages/trendingHomePage";

//manages cache in browser - retain all data in the cache for 1 hour before it becomes invalidated
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const images = [
  "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
  "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
  "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
]

//<Route path="/tv/:id" element={<TvPage />} />

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/tvs" element={<TvHomePage />} />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/tvs/favorites" element={<FavoriteTvsPage />} />
      <Route path="/tvsreviews/:id" element={ <TvReviewPage /> } /> 
      <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      <Route path="/tvs/:id" element={<TvPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/tvreviews/form" element={ <AddTvReviewPage /> } />
      <Route path="/movies/upcoming" element={<Upcoming />} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies/trending" element={<TrendingHomePage/>} />
      <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
