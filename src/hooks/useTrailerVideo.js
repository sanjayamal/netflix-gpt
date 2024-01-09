import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../appStore/moviesSlice";
import { API_OPTION } from "../utils/constant";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTION
        );

        const data = await response.json();
        const filterData = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (error) {}
    };
    getMovieVideos();
  }, [movieId]);
};
export default useTrailerVideo;
