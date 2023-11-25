import apiPaths from "@/constants/apiPaths";
import fetchApi, { apiParamsType } from "../fetchApi";

export async function getGameTypesApi() {
  // 取得所有遊戲類別
  const apiParams: apiParamsType = {
    apiPath: apiPaths["get-all-game-types"],
    method: "GET",
  };
  const res = await fetchApi(apiParams);

  if (!res.status) return null;

  return res.data;
}
