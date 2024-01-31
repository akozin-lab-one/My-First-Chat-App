import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { currentUser } = UserAuth();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/" />;
};
