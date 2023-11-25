import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}
