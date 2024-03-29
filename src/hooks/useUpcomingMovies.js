import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../appStore/moviesSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  useEffect(() => {
    const getUpcomingMoviesMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTION
        );
        const data = await response.json();
        dispatch(addUpcomingMovies(data.results));
      } catch (error) {}
    };
    if (!upComingMovies) {
      getUpcomingMoviesMovies();
    }
  }, []);
};

export default useUpcomingMovies;
