import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

export type StoresSearchKeyType = {
  cityId: number;
  storeName: string;
  storeFilter: number;
  storeTag: number;
  page: number;
  pageSize: number;
};

export const defaultStoresSearchKey: StoresSearchKeyType = {
  cityId: 0, //城市
  storeName: "", //店名
  storeFilter: 0, //最相關...
  storeTag: 0, //服務設施
  page: 0, //分頁第幾頁
  pageSize: 0, //一頁多少筆
};

const searchStoresApiParams: apiParamsType = {
  apiPath: apiPaths["search-store"],
  method: "POST",
};

export async function getSearchStores(searchKey: StoresSearchKeyType) {
  if (searchKey) {
    searchStoresApiParams.data = searchKey;
  }

  try {
    const res = await fetchApi(searchStoresApiParams);
    const data = res?.data.matchedStores ?? [];

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}