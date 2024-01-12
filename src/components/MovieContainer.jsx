import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black pb-1">
      <div className="mt-0 md:-mt-52 relative z-30">
        {movies?.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        )}
        {movies?.topRatedMovies && (
          <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title="Popular" movies={movies?.popularMovies} />
        )}
        {movies?.upComingMovies && (
          <MovieList title="Upcoming" movies={movies?.upComingMovies} />
        )}
      </div>
    </div>
  );
};

export default MovieContainer;
