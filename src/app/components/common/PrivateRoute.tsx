import React from "react";
import { Navigate, Route, RouteProps, useRoutes } from "react-router-dom";
import { Admin } from "../layout";

export function PrivateRoute() {
  let element = useRoutes([
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (!isLoggedIn) return <Navigate to="/login" />;
  return element;
}
export default PrivateRoute;
