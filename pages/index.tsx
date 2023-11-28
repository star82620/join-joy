import { createContext, useContext } from "react";
import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import LandingPage from "@/modules/LandingPage";
import Layout from "@/common/components/Layout";
import {
  defaultGroupsSearchKey,
  getSearchGroups,
} from "@/common/helpers/getApi/getSearchGroups";
import {
  defaultStoresSearchKey,
  getSearchStores,
} from "@/common/helpers/getApi/getSearchStores";
import {
  DefaultDataContextType,
  HomeProps,
  defaultCitiesData,
  defaultCommentsData,
} from "@/modules/LandingPage/data";
import {
  defaultGroupsData,
  defaultStoresData,
} from "@/constants/defaultSearchDate";

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
      apiPath: apiPaths["get-cities"],
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

    // 有登入用戶的喜好設定
    const preferenceApiParams: apiParamsType = {
      apiPath: apiPaths["get-preference-group"],
      method: "POST",
      authToken: authToken,
      data: {
        page: 1,
        pageSize: 8,
      },
    };

    const preferenceRes = await fetchApi(preferenceApiParams);

    if (preferenceRes.status) {
      preferenceData = preferenceRes.data;
    }

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

export const defaultDataContext = {
  citiesData: defaultCitiesData,
  commentsData: defaultCommentsData,
  nearbyGroupsData: defaultGroupsData,
  remainingGroupsData: defaultGroupsData,
  preferenceData: defaultGroupsData,
  nearbyStoresData: defaultStoresData,
};

export const GetDataContext =
  createContext<DefaultDataContextType>(defaultDataContext);

export default function Home({
  citiesData,
  commentsData,
  nearbyGroupsData,
  remainingGroupsData,
  preferenceData,
  nearbyStoresData,
}: HomeProps) {
  const dataSet = {
    citiesData: citiesData,
    commentsData: commentsData,
    nearbyGroupsData: nearbyGroupsData,
    remainingGroupsData: remainingGroupsData,
    preferenceData: preferenceData,
    nearbyStoresData: nearbyStoresData,
  };

  return (
    <>
      <Layout pageCategory="landing-page">
        <GetDataContext.Provider value={dataSet}>
          <LandingPage />
        </GetDataContext.Provider>
      </Layout>
    </>
  );
}
