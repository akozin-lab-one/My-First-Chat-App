import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';

const PeopleSideBar = () => {

  const [message, setMessage] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt")
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
    <div className='w-1/4 border-r-2 absolute bottom-0 top-16'>
        {
          message && message.map((me)=>{
            console.log(me);
          })
        }
    </div>
  )
}

export default PeopleSideBar