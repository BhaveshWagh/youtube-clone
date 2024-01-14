import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    // Subscribe the needed portion of the store don't subscribe whole store 
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    // Early Return pattern
    // if(!isMenuOpen) return null

  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
    <ul>
      <li>Home</li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
      <li>Music</li>
      <li>Trending</li>
      <li>Live</li>
      <li>Shopping</li>
      </ul>
    </div>
  );
};

export default Sidebar;
