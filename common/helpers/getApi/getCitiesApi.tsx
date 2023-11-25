import apiPaths from "@/constants/apiPaths";
import fetchApi, { apiParamsType } from "../fetchApi";

export async function getCitiesApi() {
  // 取得所有城市
  const citiesApiParams: apiParamsType = {
    apiPath: apiPaths["get-cities"],
    method: "GET",
  };
  const citiesRes = await fetchApi(citiesApiParams);

  return citiesRes;
}
