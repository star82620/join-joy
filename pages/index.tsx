import { createContext, useContext, useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import Layout from "@/common/components/Layout";
import LandingPage from "@/modules/LandingPage";
import { CommentDataType } from "@/constants/types/commentDataType";
import { CitiesDataType } from "@/constants/globalTypes";
import { GroupDataType } from "@/constants/types/groupDataType";
import { StoreDataType } from "@/constants/types/storeDataType";
import {
  defaultGroupsSearchKey,
  getSearchGroups,
} from "@/common/helpers/getSearchApi/getSearchGroups";
import {
  defaultStoresSearchKey,
  getSearchStores,
} from "@/common/helpers/getSearchApi/getSearchStores";
import {
  defaultCitiesData,
  defaultCommentsData,
  defaultGroupsData,
  defaultStoresData,
} from "@/modules/LandingPage/data";

const inter = Inter({ subsets: ["latin"] });

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
      ...defaultGroupsSearchKey,
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
      ...defaultGroupsSearchKey,
      cityId: nearbyCityId,
      page: 1,
      pageSize: 8,
    };

    nearbyGroupsData = await getSearchGroups(searchNearbyGroups);

    // group 差你一個
    const searchRemaining = {
      ...defaultGroupsSearchKey,
      joinppl: 1,
      page: 1,
      pageSize: 8,
    };

    remainingGroupsData = await getSearchGroups(searchRemaining);

    // 你附近的店家（IP 先定高雄）
    const searchLocationStores = {
      ...defaultStoresSearchKey,
      cityId: nearbyCityId,
      page: 1,
      pageSize: 6,
    };

    nearbyStoresData = await getSearchStores(searchLocationStores);

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
