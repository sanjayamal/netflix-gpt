import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import MovieSuggestion from "./MovieSuggestion";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <MovieSuggestion />
      ) : (
        <>
          <MainContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
