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
import {
  defaultCitiesData,
  defaultCommentsData,
  defaultGroupsData,
  defaultStoresData,
} from "@/modules/LandingPage/data";
import { GroupDataType } from "@/constants/types/groupDataType";
import { StoreDataType } from "@/constants/types/storeDataType";

const inter = Inter({ subsets: ["latin"] });

const defaultStoreSearchKey = {
  cityId: 0, //城市
  storeName: "", //店名
  storeFilter: 0, //最相關...
  storeTag: 0, //服務設施
  page: 0, //分頁第幾頁
  pageSize: 0, //一頁多少筆
};

const defaultGroupSearchKey = {
  cityId: 0, //城市
  startDate: "", //日期
  gameName: "", //遊戲名稱、團名、遊戲類型（關鍵字搜尋）
  groupFilter: 0, //最相關...
  groupTag: 0, //遊戲面向
  groupppl: 0, //揪團總人數
  joinppl: 0, //剩餘人數
  page: 0, //分頁第幾頁
  pageSize: 0, //一頁多少筆
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { authToken } = req.cookies;

  let citiesData = [];
  let commentsData = [];
  let nearbyGroupsData = [];
  let remainingGroupsData = [];
  let preferenceData = [];
  let nearbyStoresData = [];

  try {
    const nearbyCityId = 15;

    // 取得所有城市
    const citiesApiParams: apiParamsType = {
      apiPath: apiPaths.getCities,
      method: "GET",
    };
    const citiesRes = await fetchApi(citiesApiParams);
    citiesData = citiesRes?.data ?? [];

    // 取得最新評價
    const commentsApiParams: apiParamsType = {
      apiPath: apiPaths["get-newest-rating"],
      method: "GET",
    };
    const commentsRes = await fetchApi(commentsApiParams);
    commentsData = commentsRes?.data ?? [];

    // 搜尋揪團的 APIparams
    const searchGroupApiParams: apiParamsType = {
      apiPath: apiPaths["search-group"],
      method: "POST",
    };

    const searchStoreApiParams: apiParamsType = {
      apiPath: apiPaths["search-store"],
      method: "POST",
    };

    // 有登入用戶的喜好設定 => 要問洛陽 gameType 的篩選?
    const userApiParams: apiParamsType = {
      apiPath: apiPaths["get-my-profile"],
      method: "GET",
      authToken: authToken,
    };
    const userRes = await fetchApi(userApiParams);
    const userData = userRes?.data ?? [];
    const userPreferGameTypes = userData.games;

    const searchPreferenceKey = {
      ...defaultGroupSearchKey,
      cityId: nearbyCityId,
    }; //這裡要改條件
    const searchPreferenceApiParams: apiParamsType = {
      ...searchGroupApiParams,
      data: searchPreferenceKey,
    };
    const preferenceRes = await fetchApi(searchPreferenceApiParams);
    preferenceData = preferenceRes?.data.finalGroups ?? [];

    // group IP位置（先固定高雄）
    const searchNearbyGroups = {
      ...defaultGroupSearchKey,
      cityId: nearbyCityId,
      page: 1,
      pageSize: 8,
    };

    const searchNearbyGroupsApiParams: apiParamsType = {
      ...searchGroupApiParams,
      data: searchNearbyGroups,
    };

    const nearbyGroupsRes = await fetchApi(searchNearbyGroupsApiParams);
    nearbyGroupsData = nearbyGroupsRes?.data.finalGroups ?? [];

    // group 差你一個
    const searchRemaining = {
      ...defaultGroupSearchKey,
      joinppl: 1,
      page: 1,
      pageSize: 8,
    };
    const searchRemainingGroupApiParams: apiParamsType = {
      ...searchGroupApiParams,
      data: searchRemaining,
    };
    const remainingGroupsRes = await fetchApi(searchRemainingGroupApiParams);
    remainingGroupsData = remainingGroupsRes?.data.finalGroups ?? [];

    // 你附近的店家（IP 先定高雄）
    const searchLocationStores = {
      ...defaultStoreSearchKey,
      cityId: nearbyCityId,
      page: 1,
      pageSize: 6,
    };
    const searchnearbyStoresApiParams: apiParamsType = {
      ...searchStoreApiParams,
      data: searchLocationStores,
    };
    const nearbyStoresRes = await fetchApi(searchnearbyStoresApiParams);
    nearbyStoresData = nearbyStoresRes?.data.matchedStores ?? [];

    //---
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      citiesData: citiesData,
      commentsData: commentsData,
      nearbyGroupsData: nearbyGroupsData,
      remainingGroupsData: remainingGroupsData,
      preferenceData: preferenceData,
      nearbyStoresData: nearbyStoresData,
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
  citiesData: CitiesDataType;
  commentsData: CommentDataType[];
  nearbyGroupsData: GroupDataType[];
  remainingGroupsData: GroupDataType[];
  preferenceData: GroupDataType[];
  nearbyStoresData: StoreDataType[];
};

export const defaultDataContext = {
  citiesData: defaultCitiesData,
  commentsData: defaultCommentsData,
  nearbyGroupsData: defaultGroupsData,
  remainingGroupsData: defaultGroupsData,
  preferenceData: defaultGroupsData,
  nearbyStoresData: defaultStoresData,
};

export const GetDataContext = createContext<HomeProps>(defaultDataContext);

export default function Home({
  citiesData,
  commentsData,
  nearbyGroupsData,
  remainingGroupsData,
  preferenceData,
  nearbyStoresData,
}: HomeProps) {
  // const authContext = useContext(AuthContext);
  // const { authData } = authContext;
  // const logout = useLogout();

  const dataSet = {
    citiesData: citiesData,
    commentsData: commentsData,
    nearbyGroupsData: nearbyGroupsData,
    remainingGroupsData: remainingGroupsData,
    preferenceData: preferenceData,
    nearbyStoresData: nearbyStoresData,
  };

  console.log("data", dataSet);

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
