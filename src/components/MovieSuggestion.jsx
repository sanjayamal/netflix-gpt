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
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-full object-cover"
          src={BG_IMG}
          alt="background"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <MovieSuggestionResult />
      </div>
    </>
  );
};

export default MovieSuggestion;
