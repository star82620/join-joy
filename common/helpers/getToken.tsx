import Cookies from "js-cookie";

export default function getToken() {
  const authCookie = Cookies.get("authToken");

  if (!authCookie) return null;

  const authToken = `Bearer ${authCookie}`;

  return authToken;
}
