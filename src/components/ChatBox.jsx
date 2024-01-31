import React, { useEffect, useState } from "react";
import SendBox from "./SendBox";
import {
  QuerySnapshot,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { UserAuth } from "../context/AuthContext";

const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const {currentUser} = UserAuth();
  console.log(currentUser);
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        setMessage(messages);
      });
    });
  }, []);
  return (
    // <div className=" w-[75%] absolute bottom-0 top-16 left-1/4 overflow-scroll">

    //     {message &&
    //       message.map((me) => {
    //         console.log(currentUser.uid);
    //         return (
    //           <div key={me.id} className={`chat ${me.uid === currentUser.uid ? "chat-start mt-4 ms-4" : "chat-end mt-4 ms-4" }`}>
    //             <div className="chat-image avatar">
    //               <div className="w-10 rounded-full">
    //                 <img
    //                   alt="Tailwind CSS chat bubble component"
    //                   src={me.photo}
    //                 />
    //               </div>
    //             </div>
    //             <div className="chat-bubble">{me.text}</div>
    //           </div>
    //         );
    //       })}


    //   <SendBox />
    // </div>
    <div className="w-[75%] absolute bottom-0 top-16 left-1/4 overflow-auto">
  {message &&
    message.map((me) => {
      console.log(currentUser.uid);
      return (
        <div
          key={me.id}
          className={`chat ${
            me.uid === currentUser.uid
              ? "chat-start mt-4 ms-4 mb-28"
              : "chat-end mt-4 ms-4 mb-28"
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={me.photo} />
            </div>
          </div>
          <div className="chat-bubble">{me.text}</div>
        </div>
      );
    })}
<div className="sticky bottom-0 z-50 bg-green-300">
    <SendBox />
  </div>
</div>

  );
};

export default ChatBox;
