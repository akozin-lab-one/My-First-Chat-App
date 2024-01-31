import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

const SendBox = () => {
  const [value, setValue] = useState('');
  const {currentUser} = UserAuth();

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    console.log(value);
    if (value.trim() === '') {
      alert('Enter Something');      
    }

    try {
      const {uid, displayName, photoURL} = currentUser;
      await addDoc(collection(db, "messages"), {
        text:value,
        name: displayName,
        photo: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
      setValue('');
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className='absolute bottom-0 w-[100%]'>
      <form onSubmit={onSubmitHandle}>
        <div className='ms-12 w-[100%]'>
          <input
            type="text"
            placeholder="Type here"
            value={value}
            onChange={onChangeHandle}
            className="input mb-2 input-bordered w-[100%] max-w-xs"
          />
          <br />
          <button type='submit' className="btn btn-outline mb-2">Send</button>
        </div>
      </form>
    </div>
  );
};

export default SendBox;
