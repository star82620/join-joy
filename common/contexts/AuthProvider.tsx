import { useState, useEffect, createContext, Children, ReactNode } from "react";
import fetchApi from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

type Props = {
  children: ReactNode;
};
type userDataType = {
  nickName: string;
  photo: String;
  userId: number;
};
type AuthContextType = {
  userData: userDataType | null;
  setUserData: React.Dispatch<React.SetStateAction<userDataType | null>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: Props) {
  const [userData, setUserData] = useState<userDataType | null>(null);

  // 每次進入頁面時就跑一次
  useEffect(() => {
    async function fetchUserData() {
      const res = await fetchApi({
        apiPath: apiPaths.checkLoginStatus,
        method: "GET",
      });
      if (res?.data) {
        setUserData(res.data);
      }
    }

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
