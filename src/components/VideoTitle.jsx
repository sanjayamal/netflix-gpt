import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-2xl font-bold md:text-5xl md:w-1/2 w-3/4">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black mt-1 md:mt-0 py-1 md:py-2 md:px-12 px-3 text-xl  rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-2 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
