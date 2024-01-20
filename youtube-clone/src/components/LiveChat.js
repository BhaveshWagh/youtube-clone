import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  // Dispatch an action to add messages inside object
  const dispatch = useDispatch();

  //   SUBSCRIBE OUR STORE TO READ DATA USING useSelector()
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling : fetch an api convert into json and dispatch an action
      //   console.log("API Polling");
      // lets dispatch an action
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + " 🚀",
        })
      );
    },1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer : Don't use indexes as keys
            chatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("ON FORM SUBMIT", liveMessage);
          dispatch(
            addMessage({
              name: "Bhavesh Wagh",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="w-96 px-2 py-1 border border-gray-400 rounded-lg"
          type="text"
          placeholder="Add Comment"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-1 mx-2 bg-green-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
