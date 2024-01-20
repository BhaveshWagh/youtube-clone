import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  let x = 0;

  const ref = useRef(0);
  console.log("Rendering...");
  //   console.log("ref", ref);
  /**
   * not like ==> ref = 0
   *
   * like that ==> ref = {current: 0}
   *
   */
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(
      () => console.log("Namaste React", Math.random()),
      1000
    );
    return () => clearInterval(i.current);
  }, []);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-200 p-2 m-4 items-center"
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl text-center">Let = {x}</span>
      </div>

      <div>
        <button
          className="bg-green-200 p-2 m-4 items-center"
          onClick={() => setY(y + 1)}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl text-center">State = {y}</span>
      </div>

      <div>
        <button
          className="bg-green-200 p-2 m-4 items-center"
          onClick={() => {
            ref.current += 1;
            console.log("ref = ", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl text-center">
          Ref = {ref.current}
        </span>
      </div>
      <button
        onClick={() => {
          clearInterval(i.current);
        }}
        className="bg-red-500 p-4  m-4 text-white rounded-lg font-bold"
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
