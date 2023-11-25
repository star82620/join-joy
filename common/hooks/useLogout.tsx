import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import deleteCookie from "../helpers/deleteCookie";

export function useLogout() {
  const { setIsLogin, setAuthData, isLogin } = useContext(AuthContext);

  return function logout() {
    if (!isLogin) return;
    deleteCookie("authToken");

    setAuthData(null);

    setIsLogin(false);

    window.location.href = "/";
  };
}
