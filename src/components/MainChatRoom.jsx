import React from "react";
import PeopleSideBar from "./PeopleSideBar";
import ChatBox from "./ChatBox";

const MainChatRoom = () => {
  return (
    <div className="flex ">
        <PeopleSideBar/>
        <ChatBox/>
    </div>
  );
};

export default MainChatRoom;
