import { NextApiRequest, NextApiResponse } from "next";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  try {
    const apiParams: apiParamsType = {
      apiPath: apiPaths.login,
      method: "POST",
      // body: 要從 page 的表單內容中取得
    };

    const result = await fetchApi(apiParams);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
