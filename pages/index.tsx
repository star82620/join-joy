import { useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AuthContext } from "@/common/contexts/AuthProvider";
import Layout from "@/common/components/Layout";

import useLogout from "@/common/hooks/useLogout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const authContext = useContext(AuthContext);
  const { authData } = authContext;
  const logout = useLogout();

  const storesKey: apiParamsType = {
    apiPath: `${apiPaths.getCityStores}?city=1`,
    method: "GET",
  };
  async function text() {
    const res = await fetchApi(storesKey);
    console.log("rrrrres", res);
  }
  text();

  return (
    <>
      <Layout pageCategory="landingpage">
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
          <li>
            <Link href="/group">揪團詳細頁（切版示範）</Link>
          </li>
        </ul>

        <div className=" max-w-[826px]">hi!{authData?.nickName}</div>
        <div className="p-4 border cursor-pointer" onClick={logout}>
          登出
        </div>
      </Layout>
    </>
  );
}
