import React, { useMemo, useState } from "react";
import { findPrime } from "./utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   console.log("Rendering", text);
  // heavy operation
  const prime = useMemo(() => findPrime(text), [text]);
  // console.log("Calculate Prime Number of", text);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-slate-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div className="">
        <input
          className="px-2 border border-black w-72 text-slate-800 "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl text-center">
          nth Prime : {prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;
