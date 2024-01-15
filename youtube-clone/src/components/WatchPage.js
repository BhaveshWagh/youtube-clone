import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

/* eslint-disable no-lone-blocks */
const WatchPage = () => {
  const [searchParams] = useSearchParams();

  //   console.log(searchParams.get("v"));
  const dispath = useDispatch();

  useEffect(() => {
    dispath(closeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="490"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
