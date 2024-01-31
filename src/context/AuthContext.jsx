import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const siginWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  const logout = ()=> signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    siginWithGoogle,
    logout
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      setCurrentUser(user);
      setLoading(true);
    });

    return unsubscribe;
  },[])
  return (
    <AuthContext.Provider value={value}>
        {loading && children}
    </AuthContext.Provider>
    );
};

export const UserAuth = ()=>{
    return useContext(AuthContext);
}
