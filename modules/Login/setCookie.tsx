import Cookies from "js-cookie";

export function setCookie(name, value) {
  Cookies.set(name, value);
}
