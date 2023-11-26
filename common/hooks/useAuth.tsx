import React, { useEffect, useState } from "react";
import { AuthDataType } from "@/constants/globalTypes";

export function useAuth() {
  const [authData, setAuthData] = useState<AuthDataType | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const res = await fetch("/api/global/checkLoginStatus");
        const json = await res.json();
        const data = await json.data;

        if (!res.status || !data) return null;

        setAuthData(data);
        setIsLogin(true);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchAuthData();
  }, []);

  return { authData, isLogin, setAuthData, setIsLogin };
}
