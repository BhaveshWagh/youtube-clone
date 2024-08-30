import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./utils/constants";

const SearchResult = () => {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return <div>SearchResult</div>;
};

export default SearchResult;
