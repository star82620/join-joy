import React from "react";
import { useRouter } from "next/router";
import { useLogout } from "@/common/hooks/useLogout";
import { useAuth } from "@/common/hooks/useAuth";

export default function Navbar() {
  const router = useRouter();
  const logout = useLogout();

  const { authData, isLogin } = useAuth();

  const nickName = authData?.nickName;

  return (
    <ul className="flex flex-col items-center absolute top-[56px] -right-0.5 border-2 bg-yellow-tint w-[180px]">
      {isLogin && (
        <>
          <li className="w-full p-3 flex border-b-2">
            Hi!<p className="mx-1 truncate font-semibold">{nickName}</p> 👋🏻
          </li>
          <li
            className="w-full p-3 cursor-pointer"
            onClick={() => {
              router.push("/user-center");
            }}
          >
            個人檔案
          </li>

          <li className="w-full p-3 cursor-pointer border-t-2" onClick={logout}>
            登出
          </li>
        </>
      )}
      {!isLogin && (
        <>
          <li
            className="w-full p-3 border-b cursor-pointer"
            onClick={() => {
              router.push("/signup");
            }}
          >
            註冊
          </li>
          <li
            className="w-full p-3 cursor-pointer"
            onClick={() => {
              router.push("/login");
            }}
          >
            登入
          </li>
        </>
      )}
    </ul>
  );
}
