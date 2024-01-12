import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useDispatch, useSelector } from "react-redux";
import MovieSuggestion from "./MovieSuggestion";
import MovieDetail from "./MovieDetail";
import { openOrCloseMovieModal } from "../appStore/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);
  const movieModal = useSelector((store) => store.movies?.movieModal);
  const handleModalClose = () => {
    dispatch(openOrCloseMovieModal({ isOpen: false, detail: null }));
  };
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
      <MovieDetail
        onClose={handleModalClose}
        {...movieModal?.detail}
        isOpen={movieModal.isOpen}
      />
    </div>
  );
};

export default Browse;
