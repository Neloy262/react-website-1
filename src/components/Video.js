import React from "react";
import vid from "../video/video-1.mp4";
import "../index.css";
function Video() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full object-contain gap-7">
      <video
        className="fixed -z-50 w-full h-full object-cover"
        src={vid}
        autoPlay
        loop
        muted
      ></video>
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl">
        ADVENTURE AWAITS
      </h1>
      <h2 className="text-white">What are you waiting for?</h2>
      <div className="flex flex-col gap-3 lg:flex-row ">
        <button className="bg-transparent text-xl hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
          GET STARTED
        </button>
        <button className="bg-transparent text-xl hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent ">
          WATCH TRAILER <i class="fa fa-play-circle" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Video;
