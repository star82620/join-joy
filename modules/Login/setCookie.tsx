import Cookies from "js-cookie";

export function setCookie(key, value) {
  Cookies.set(key, value);
}
