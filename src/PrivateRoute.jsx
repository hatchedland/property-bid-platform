import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

export const PrivateRoute = ({ children }) => {
    var isAuthenticated = auth.currentUser;

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};
