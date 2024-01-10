import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4 hover:scale-110">
      <img alt="Movie" src={`${IMG_CDN}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
