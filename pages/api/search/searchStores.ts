import { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;

    const searchStoresApiParams: apiParamsType = {
      apiPath: apiPaths["search-store"],
      method: "POST",
      data: JSON.stringify(data),
    };

    const result = await fetchApi(searchStoresApiParams);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
