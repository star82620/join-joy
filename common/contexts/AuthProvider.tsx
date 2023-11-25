import { useState, useEffect, createContext, Children, ReactNode } from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import {
  AuthDataType,
  AuthContextType,
  AuthProviderProps,
} from "@/constants/globalTypes";

export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  setIsLogin: () => {},
  authData: null,
  setAuthData: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [authData, setAuthData] = useState<AuthDataType | null>(null);

  useEffect(() => {
    async function getAuthData() {
      const apiParams: apiParamsType = {
        apiPath: apiPaths["check-login-status"],
        method: "GET",
      };

      const res = await fetchApi(apiParams);
      return res;
    }

    getAuthData().then((info) => {
      if (info.data) {
        setAuthData(info.data);
        setIsLogin(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, authData, setAuthData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
