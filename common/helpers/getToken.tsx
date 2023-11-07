import Cookies from "js-cookie";

export default function getToken() {
  const authCookie = Cookies.get("authToken");

  if (!authCookie) return;

  const authToken = `Bearer ${authCookie}`;

  return authToken;
}
