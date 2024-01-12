import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constant";
import { addGPTMovieResult } from "../appStore/gptSlice";

const GPTSearchBar = () => {
  const preferredLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMovieFromTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const data = await response.json();
    return data.results;
  };

  const handleGPTSearch = async () => {
    try {
      const userInput = searchText.current.value;
      const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${userInput}.
       Only give me name of 5 movies, comma separated like the example result given ahead. Example result: The Family Plan, Rewind, Wonka, Sound of Freedom, Don `;
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!gptResult?.choices) {
        //TODO Error handling
        return;
      }
      const gptMovies = gptResult?.choices?.[0].message?.content?.split(",");

      const dataPromiseArr = gptMovies.reduce((acc, curr) => {
        acc?.push(getMovieFromTMDB(curr));
        return acc;
      }, []);

      const tmdbResult = await Promise.all(dataPromiseArr);
      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResult: tmdbResult })
      );
    } catch (error) {}
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 md:col-span-9 col-span-8"
          placeholder={lang[preferredLang].gptSearchPlaceHolder}
        />
        <button
          className="md:col-span-3 col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          {lang[preferredLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
