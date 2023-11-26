import { useAuth } from "./useAuth";
import deleteCookie from "../helpers/deleteCookie";

export function useLogout() {
  const { setIsLogin, setAuthData, isLogin } = useAuth();

  return function logout() {
    if (!isLogin) return;

    deleteCookie("authToken");

    setAuthData(null);
    setIsLogin(false);

    window.location.href = "/";
  };
}
