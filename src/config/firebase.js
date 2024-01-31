import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_aCdXH22HIIoDJWWceSLcPel4tX8hWbs",
    authDomain: "instantchat-7d1ab.firebaseapp.com",
    projectId: "instantchat-7d1ab",
    storageBucket: "instantchat-7d1ab.appspot.com",
    messagingSenderId: "1012780317367",
    appId: "1:1012780317367:web:c48bcd97abb99989cdeb32",
    measurementId: "G-XBTRJFGS2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);