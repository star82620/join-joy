import Cookies from "js-cookie";

export default function getToken() {
  return Cookies.get("authToken");
}
