import { createContext, useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AuthContext } from "@/common/contexts/AuthProvider";
import Layout from "@/common/components/Layout";
import useLogout from "@/common/hooks/useLogout";
import LandingPage from "@/modules/LandingPage";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { CommentDataType } from "@/constants/types/commentDataType";
import apiPaths from "@/constants/apiPaths";
import { GetServerSidePropsContext } from "next";
import { CitiesDataType } from "@/constants/globalTypes";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { authToken } = req.cookies;

  // 取得所有城市
  const citiesApiParams: apiParamsType = {
    apiPath: apiPaths.getCities,
    method: "GET",
  };

  // 取得最新評價
  const commentsApiParams: apiParamsType = {
    apiPath: apiPaths["get-newest-rating"],
    method: "GET",
  };

  // 有登入用戶的喜好設定
  const userApiParams: apiParamsType = {
    apiPath: apiPaths["get-my-profile"],
    method: "GET",
    authToken: authToken,
  };

  const searchKey = {
    cityId: 0,
    storeName: "",
    storeFilter: 0,
    storeTag: 0,
    page: 0,
    pageSize: 0,
  };

  // IP位置（先固定成高雄）
  const searchGroupApiParams: apiParamsType = {
    apiPath: apiPaths["get-my-profile"],
    method: "GET",
    data: searchKey,
  };

  //---

  let commentsData;
  let citiesData;

  try {
    const citiesRes = await fetchApi(citiesApiParams);
    citiesData = citiesRes?.data ?? [];

    const ratingRes = await fetchApi(commentsApiParams);
    commentsData = ratingRes?.data ?? [];

    const userRes = await fetchApi(userApiParams);
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      commentsData: commentsData,
      citiesData: citiesData,
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

export type HomeProps = {
  commentsData: CommentDataType[];
  citiesData: CitiesDataType;
};

export const defaultDataContext = {
  commentsData: [] as CommentDataType[],
  citiesData: [] as CitiesDataType,
};

export const GetDataContext = createContext<HomeProps>(defaultDataContext);

export default function Home({ commentsData, citiesData }: HomeProps) {
  // const authContext = useContext(AuthContext);
  // const { authData } = authContext;
  // const logout = useLogout();

  const dataSet = {
    commentsData: commentsData,
    citiesData: citiesData,
  };

  console.log("data", commentsData);

  return (
    <>
      <Layout pageCategory="landingpage">
        <GetDataContext.Provider value={dataSet}>
          <LandingPage />
        </GetDataContext.Provider>
      </Layout>
    </>
  );
}
