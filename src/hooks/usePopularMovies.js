import { useDispatch } from "react-redux";
import { addPopularMovies } from "../appStore/moviesSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTION
        );
        const data = await response.json();
        dispatch(addPopularMovies(data.results));
      } catch (error) {}
    };
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
