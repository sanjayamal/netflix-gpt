import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../appStore/moviesSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTION
      );
      const data = await response.json();
      console.log(data);
      dispatch(addNowPlayingMovies(data.results));
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
