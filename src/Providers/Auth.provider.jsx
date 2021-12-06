import axios from "axios";
import React, { useContext, useReducer, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { verifyToken } from "../utils/api";

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
    return {
      ...state,
      token: payload,
    };
  }

  if (type === AUTH_ACTIONS.LOGOUT) {
    return {
      ...state,
      token: null,
    };
  }

  return state;
};

export default function AuthProvider({ children }) {
  const [authData, dispatch] = useReducer(authReducer, initialState);
  const intervalRef = useRef();

  const validate = async (token) => {
    if (token !== null) {
      const tokenResp = await verifyToken();
      const isValid = !tokenResp.error;
      if (!isValid) dispatch(logoutAction());
    }
  };

  useEffect(() => {
    if (authData.token !== null)
      intervalRef.current = setInterval(() => {
        validate(authData.token);
      }, 10000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [authData.token]);

  useEffect(() => {
    axios.defaults.headers.common["auth-token"] = authData.token;
    validate(authData.token);
  }, [authData.token]);

  return <AuthContext.Provider value={[authData, dispatch]}>{children}</AuthContext.Provider>;
}
