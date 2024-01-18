import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // store.search gives u empty object
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  // console.log(searchQuery)

  /**
   * searchCache = {
   *  "iphone":["iphone 11","iphone 14"]
   * }
   * searchQuery = iphone
   */

  useEffect(() => {
    // API Call
    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms
    // Decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // cleartimeout will call when the component is unmounted or again refreshing
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * search query => iphone
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => to make an api call after 200ms
   *
   * - before 200ms I press the key p it triggers the reconciliation method again
   * key - ip
   * - It'll destroy the component(it'll call useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make an api call after 200ms
   *
   *
   * setTimeout(200) - after 200ms we didn't type anything then automatically make an API call
   */

  const getSearchSuggestions = async () => {
    console.log("API CALL - ", searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    // dispatch an action to update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col  p-4 my-2 shadow-lg ">
      <div className="logo flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-log"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="search-box col-span-10">
        <div>
          <input
            type="text"
            className="w-1/2 px-10 border border-gray-400 p-2 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-4 bg-slate-100  rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 "
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="user col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
