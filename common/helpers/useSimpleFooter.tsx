import React from "react";
import { useRouter } from "next/router";
import { log } from "console";

// 這些頁面要簡單款的 Footer
const simplePages: Array<string> = [
  "signup",
  "login",
  "forget-password",
  "create-group",
];

export default function useSimpleFooter() {
  const router = useRouter();
  console.log(router.pathname);
  const isSimple = simplePages.some((page) => {
    return router.pathname.includes(page);
  });
  return isSimple;
}
