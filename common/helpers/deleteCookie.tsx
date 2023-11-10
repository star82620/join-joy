import Cookies from "js-cookie";

export default function deleteCookie(key: string) {
  Cookies.remove(key);
}
