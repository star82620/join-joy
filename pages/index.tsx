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
} from "@/common/helpers/getApi/search/getSearchGroups";
import {
  defaultStoresSearchKey,
  getSearchStores,
} from "@/common/helpers/getApi/search/getSearchStores";
import {
  DefaultDataContextType,
  HomeProps,
  defaultCitiesData,
  defaultCityData,
  defaultCommentsData,
} from "@/modules/LandingPage/data";
import {
  defaultGroupsData,
  defaultStoresData,
} from "@/constants/defaultSearchDate";
import { CitiesDataItemType } from "@/constants/types/apiTypes/city";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { authToken } = req.cookies;

  let citiesData = [];
  let commentsData = [];
  let nearbyCity = [];
  let nearbyGroupsData = [];
  let remainingGroupsData = [];
  let preferenceData = [];
  let nearbyStoresData = [];
  let newestData = [];

  try {
    const nearbyCityId = 15;

    // 取得所有城市
    const citiesApiParams: apiParamsType = {
      apiPath: apiPaths["get-cities"],
      method: "GET",
    };
    const citiesRes = await fetchApi(citiesApiParams);
    citiesData = citiesRes?.data ?? [];

    // 定位的城市
    [nearbyCity] = citiesData.filter((city: CitiesDataItemType) => {
      return city.Id === nearbyCityId;
    });

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

    // group 最新揪團
    const searchNewest = {
      ...defaultGroupsSearchKey,
      groupFilter: 2,
      page: 1,
      pageSize: 8,
    };

    newestData = await getSearchGroups(searchNewest);

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
      citiesData,
      commentsData,
      nearbyGroupsData,
      remainingGroupsData,
      preferenceData,
      nearbyStoresData,
      newestData,
      nearbyCity,
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
  newestData: defaultGroupsData,
  nearbyCity: defaultCityData,
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
  newestData,
  nearbyCity,
}: HomeProps) {
  const dataSet = {
    citiesData,
    commentsData,
    nearbyGroupsData,
    remainingGroupsData,
    preferenceData,
    nearbyStoresData,
    newestData,
    nearbyCity,
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
