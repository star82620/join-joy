import { createContext, useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AuthContext } from "@/common/contexts/AuthProvider";
import Layout from "@/common/components/Layout";

import useLogout from "@/common/hooks/useLogout";
import LandingPage from "@/modules/LandingPage";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { CommentDataType } from "@/constants/types/commentDataType";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const apiParams: apiParamsType = {
    apiPath: "/storeinfo/getnewestrating",
    method: "GET",
  };
  let data;
  try {
    const res = await fetchApi(apiParams);
    data = res.data;
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      commentsData: data,
    },
  };
}

// 搜尋的地點內容：城市
// 搜尋的日期內容
// 用戶資料（如果有登入）
// 就差你一個成團 => 可以直接打
// 你附近的揪團 => IP位置
// 你可能有興趣的揪團 => 先取得用戶資料、以遊戲喜好搜尋（有搜喜好地區嗎？）
// 你附近的店家 => IP位置
// 評價

type HomeProps = {
  commentsData: CommentDataType[];
};
const DataContext = createContext({});

export default function Home({ commentsData }: HomeProps) {
  const authContext = useContext(AuthContext);
  const { authData } = authContext;
  const logout = useLogout();

  const dataSet = {
    commentsData: commentsData,
  };

  console.log("data", commentsData);

  return (
    <>
      <Layout pageCategory="landingpage">
        <DataContext.Provider value={dataSet}>
          <LandingPage />
        </DataContext.Provider>
      </Layout>
    </>
  );
}
