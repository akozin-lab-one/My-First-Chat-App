import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
    const{ currentUser, siginWithGoogle} = UserAuth();
    const navigate = useNavigate();
    console.log(currentUser);
    const handleLogin = async ()=>{
        try {
            await siginWithGoogle();
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
      if(currentUser){
        navigate('/chat')
      }
    },[currentUser])
  return (
    <div className="grid place-items-center h-screen">
      <button
        className="btn btn-active btn-neutral"
        onClick={handleLogin}
        type="button"
      >
        signIn with Google
      </button>
    </div>
  );
};

export default Login;
