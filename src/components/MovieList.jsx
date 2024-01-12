import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      {movies && (
        <div className="flex overflow-x-scroll container-snap">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                movieId={movie.id}
                title={movie.original_title}
                rate={movie.vote_average}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
