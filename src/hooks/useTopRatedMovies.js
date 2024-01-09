import { useDispatch } from "react-redux";
import { addTopRateMovies } from "../appStore/moviesSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?page=1",
          API_OPTION
        );
        const data = await response.json();
        dispatch(addTopRateMovies(data.results));
      } catch (error) {}
    };
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
