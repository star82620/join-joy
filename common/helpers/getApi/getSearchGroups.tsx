import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

export type GroupsSearchKeyType = {
  cityId: number;
  startDate: string;
  gameName: string;
  groupFilter: number;
  groupTag: number;
  groupppl: number;
  joinppl: number;
  page: number;
  pageSize: number;
};

export const defaultGroupsSearchKey: GroupsSearchKeyType = {
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

const searchGroupsApiParams: apiParamsType = {
  apiPath: apiPaths["search-group"],
  method: "POST",
};

export async function getSearchGroups(
  searchKey: GroupsSearchKeyType,
  haveCount?: "haveCount"
) {
  if (searchKey) {
    searchGroupsApiParams.data = searchKey;
  }

  console.log("KEY", searchGroupsApiParams);

  try {
    const res = await fetchApi(searchGroupsApiParams);

    console.log("我ji3", res);

    if (!res.status) {
      return res.message;
    }

    if (haveCount) {
      const data = res?.data;
      return data;
    }

    const data = res?.data.finalGroups ?? [];

    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
