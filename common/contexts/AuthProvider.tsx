import { useState, useEffect, createContext, Children, ReactNode } from "react";
import fetchApi from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import {
  AuthDataType,
  AuthContextType,
  AuthProviderProps,
} from "@/constants/globalTypes";

export const AuthContext = createContext<AuthContextType>({
  authData: null,
  setAuthData: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authData, setAuthData] = useState<AuthDataType | null>(null);

  // 每次進入頁面時就跑一次
  useEffect(() => {
    async function fetchAuthData() {
      const res = await fetchApi({
        apiPath: apiPaths["check-login-status"],
        method: "GET",
      });
      if (res.data) {
        console.log("AA", res.data);
        setAuthData(res.data);
      }
    }

    fetchAuthData();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}
