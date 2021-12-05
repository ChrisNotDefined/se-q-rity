import React from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../../Providers/Auth.provider";

export default function CheckAuth({ mustBeAuth = true, redirectTo, children }) {
  const [auth] = useAuthContext();

  const is_permited = mustBeAuth === !!auth.token;

  if (!is_permited) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
}
