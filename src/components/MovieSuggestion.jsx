import React, { useEffect } from "react";
import GPTSearchBar from "./GPTSearchBar";
import MovieSuggestionResult from "./MovieSuggestionResult";
import { BG_IMG } from "../utils/constant";
import { useDispatch } from "react-redux";
import { clearMoviesDetail } from "../appStore/gptSlice";

const MovieSuggestion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(clearMoviesDetail());
  }, []);
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMG} alt="background" />
      </div>
      <GPTSearchBar />
      <MovieSuggestionResult />
    </div>
  );
};

export default MovieSuggestion;
