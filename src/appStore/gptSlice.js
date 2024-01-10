import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResult: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieResult, movieNames } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
    clearMoviesDetail: (state) => {
      state.movieNames = null;
      state.movieResult = null;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult, clearMoviesDetail } =
  gptSlice.actions;

export default gptSlice.reducer;
