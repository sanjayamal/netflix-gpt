import React from "react";
import { IMG_CDN } from "../utils/constant";
import { useDispatch } from "react-redux";
import { openOrCloseMovieModal } from "../appStore/moviesSlice";

const MovieCard = ({ posterPath, movieId, title, rate }) => {
  const dispatch = useDispatch();
  if (!posterPath) return null;

  const handleModalOpen = () => {
    console.log({
      movieId,
      title,
      rate,
    });
    dispatch(
      openOrCloseMovieModal({
        isOpen: true,
        detail: {
          movieId,
          title,
          rate,
        },
      })
    );
  };
  return (
    <div
      className="w-36 md:w-48 pr-4 hover:scale-110"
      onClick={handleModalOpen}
    >
      <img alt="Movie" src={`${IMG_CDN}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
