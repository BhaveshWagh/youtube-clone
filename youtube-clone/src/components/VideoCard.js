
import React from "react";

const VideoCard = ({ info }) => {
  // console.log("id : ",info)
  // const {snippet, statistics} = info
  // const {thumbnails} = snippet
  return (
    <div className="p-2 m-2 w-72 shadow-lg h-full">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AddVideoCard = ({info}) => {
  return(
    <div className="p-1 m-1 border border-red-300">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
