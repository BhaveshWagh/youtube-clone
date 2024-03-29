import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log("json", json);
    // console.log("json.items",json.items[0].id)
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-center">
    <AddVideoCard info={videos[0]}/>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video}/>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
