import Cookies from "js-cookie";

export default function getClientToken() {
  const authCookie = Cookies.get("authToken");

  if (!authCookie) return null;

  const authToken = `Bearer ${authCookie}`;

  return authToken;
}
