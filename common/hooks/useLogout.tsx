import { useRouter } from "next/router";
import deleteCookie from "../helpers/deleteCookie";

export function useLogout() {
  const router = useRouter();

  return function logout() {
    deleteCookie("authToken");
    alert("登出了！");
    router.push("/");
  };
}
