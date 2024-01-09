import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="font-bold text-5xl w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
