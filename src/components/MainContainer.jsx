import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { randomIntFromInterval } from "../utils/functions";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const rndInt = randomIntFromInterval(0, 10);
  const mainMovie = movies[4];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[45%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
