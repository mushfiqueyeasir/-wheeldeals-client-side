import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layouts/AppLayout";

function UserRouteAuth({ children }) {
  const { user } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (user.role !== "customer") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default UserRouteAuth;
