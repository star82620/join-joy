import { useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AuthContext } from "@/common/contexts/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { userData } = useContext(AuthContext);

  return (
    <>
      <div>index</div>
      <ul>
        <li>
          <Link href="/create-group">我要開團</Link>
        </li>
        <li>
          <Link href="/login">登入</Link>
        </li>
        <li>
          <Link href="/signup">註冊</Link>
        </li>
        <li>
          <Link href="/user-center">我的個人資訊</Link>
        </li>
        <li>
          <Link href="/user">會員個人頁（切版示範）</Link>
        </li>
      </ul>

      <div className=" max-w-[826px]">ccc{userData.nickName}</div>
    </>
  );
}
