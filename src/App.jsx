import "./App.css";
import React from "react";
import MainChatRoom from "./components/MainChatRoom";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import Login from "./Pages/Login";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route
          path="/chat"
          element={
            <PrivateRoutes>
              <MainChatRoom />
            </PrivateRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
