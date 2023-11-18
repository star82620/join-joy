import { useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AuthContext } from "@/common/contexts/AuthProvider";
import Layout from "@/common/components/Layout";
import useLogout from "@/common/hooks/useLogout";
import LandingPage from "@/modules/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const authContext = useContext(AuthContext);
  const { authData } = authContext;
  const logout = useLogout();

  return (
    <>
      <Layout pageCategory="landingpage">
        <LandingPage />
      </Layout>
      <div>
        index
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
          <li>
            <Link href="/group">揪團詳細頁（切版示範）</Link>
          </li>
        </ul>
        <div className=" max-w-[826px]">hi!{authData?.nickName}</div>
        <div className="p-4 border cursor-pointer" onClick={logout}>
          登出
        </div>
      </div>
    </>
  );
}
