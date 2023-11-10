import { useRouter } from "next/router";
import deleteCookie from "../helpers/deleteCookie";

export default function useLogout() {
  const router = useRouter();

  return function logout() {
    alert("登出了！");
    deleteCookie("authToken");
    router.push("/");
  };
}
