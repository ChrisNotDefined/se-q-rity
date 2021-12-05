import axios from "axios";
import React, { useContext, useReducer } from "react";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw Error("Called Context Without provider");
  return ctx;
};

const initialState = {
  token: null,
};

export const AUTH_ACTIONS = {
  LOGIN: "AUTH/LOGIN",
  LOGOUT: "AUTH/LOGOUT",
};

export const loginAction = (payload) => [AUTH_ACTIONS.LOGIN, payload];
export const logoutAction = () => [AUTH_ACTIONS.LOGOUT];

const authReducer = (state = initialState, action) => {
  const [type, payload] = action;

  if (type === AUTH_ACTIONS.LOGIN) {
    axios.defaults.headers.common["auth-token"] = payload;
    return {
      ...state,
      token: payload,
    };
  }

  if (type === AUTH_ACTIONS.LOGOUT) {
    axios.defaults.headers.common["auth-token"] = null;
    return {
      ...state,
      token: null,
    };
  }

  return state;
};

export default function AuthProvider({ children }) {
  const [authData, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={[authData, dispatch]}>{children}</AuthContext.Provider>;
}
