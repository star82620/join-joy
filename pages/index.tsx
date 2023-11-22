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
  defaultGroupsData,
  defaultStoresData,
} from "@/modules/LandingPage/data";
import { AuthContext } from "@/common/contexts/AuthProvider";
import { AuthDataType } from "@/constants/globalTypes";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { authToken } = req.cookies;

  let userInfo: AuthDataType | null = null;

  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["check-login-status"]}`,
    method: "GET",
    authToken: authToken,
  };

  const res = await fetchApi(apiParams);
  if (res.data) {
    userInfo = res.data;
  }

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
      userInfo: userInfo,
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
  userInfo,
}: HomeProps) {
  const dataSet = {
    citiesData: citiesData,
    commentsData: commentsData,
    nearbyGroupsData: nearbyGroupsData,
    remainingGroupsData: remainingGroupsData,
    preferenceData: preferenceData,
    nearbyStoresData: nearbyStoresData,
  };

  const { setAuthData, setIsLogin } = useContext(AuthContext);
  if (!!userInfo) {
    setAuthData(userInfo);
    setIsLogin(true);
  }

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
