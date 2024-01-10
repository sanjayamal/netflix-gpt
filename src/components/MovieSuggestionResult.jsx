import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestionResult = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movieNames, movieResult } = gpt;

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      <div>
        {movieNames.map((name, index) => (
          <MovieList title={name} key={name} movies={movieResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default MovieSuggestionResult;
