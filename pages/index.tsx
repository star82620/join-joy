import { createContext } from "react";
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
  HomeProps,
  defaultCitiesData,
  defaultCommentsData,
  defaultGroupsData,
  defaultStoresData,
} from "@/modules/LandingPage/data";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { authToken } = req.cookies;

  let citiesData = defaultCitiesData;
  let commentsData = defaultCommentsData;
  let nearbyGroupsData = defaultGroupsData;
  let remainingGroupsData = defaultGroupsData;
  let preferenceData = defaultGroupsData;
  let nearbyStoresData = defaultStoresData;

  try {
    const nearbyCityId = 15;

    // 取得所有城市
    // const citiesApiParams: apiParamsType = {
    //   apiPath: apiPaths.getCities,
    //   method: "GET",
    // };
    // const citiesRes = await fetchApi(citiesApiParams);

    // const citiesData = citiesRes.data;

    // 取得最新評價
    // const commentsApiParams: apiParamsType = {
    //   apiPath: apiPaths["get-newest-rating"],
    //   method: "GET",
    // };
    // const commentsRes = await fetchApi(commentsApiParams);
    // commentsData = commentsRes?.data ?? [];

    // 有登入用戶的喜好設定
    // const preferenceApiParams: apiParamsType = {
    //   apiPath: apiPaths["get-preference-group"],
    //   method: "POST",
    //   authToken: authToken,
    //   data: {
    //     page: 1,
    //     pageSize: 8,
    //   },
    // };

    // const preferenceRes = await fetchApi(preferenceApiParams);

    // if (preferenceRes.status) {
    //   preferenceData = preferenceRes.data;
    // }

    // group IP位置（先固定高雄）
    // const searchNearbyGroups = {
    //   ...defaultGroupsSearchKey,
    //   cityId: nearbyCityId,
    //   page: 1,
    //   pageSize: 8,
    // };

    // nearbyGroupsData = await getSearchGroups(searchNearbyGroups);

    // group 差你一個
    // const searchRemaining = {
    //   ...defaultGroupsSearchKey,
    //   joinppl: 1,
    //   page: 1,
    //   pageSize: 8,
    // };

    // remainingGroupsData = await getSearchGroups(searchRemaining);

    // 你附近的店家（IP 先定高雄）
    // const searchLocationStores = {
    //   ...defaultStoresSearchKey,
    //   cityId: nearbyCityId,
    //   page: 1,
    //   pageSize: 6,
    // };

    // nearbyStoresData = await getSearchStores(searchLocationStores);
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      citiesData: citiesData || defaultCitiesData,
      commentsData: commentsData || defaultCommentsData,
      nearbyGroupsData: nearbyGroupsData || defaultGroupsData,
      remainingGroupsData: remainingGroupsData || defaultGroupsData,
      preferenceData: preferenceData || defaultGroupsData,
      nearbyStoresData: nearbyStoresData || defaultStoresData,
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

export const GetDataContext = createContext<HomeProps>(defaultDataContext);

export default function Home({
  citiesData,
  commentsData,
  nearbyGroupsData,
  remainingGroupsData,
  preferenceData,
  nearbyStoresData,
}: HomeProps) {
  const dataSet = {
    citiesData,
    commentsData,
    nearbyGroupsData,
    remainingGroupsData,
    preferenceData,
    nearbyStoresData,
  };

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
