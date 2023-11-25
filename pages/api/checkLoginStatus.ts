import { NextApiRequest, NextApiResponse } from "next";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { AuthDataType } from "@/constants/globalTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthDataType | { error: string }>
) {
  try {
    const { authToken } = req.cookies;

    const apiParams: apiParamsType = {
      apiPath: apiPaths["check-login-status"],
      method: "GET",
      authToken: authToken,
    };

    console.log("試試看哦 API 路徑 ", apiParams.apiPath);

    const result = await fetchApi(apiParams);

    console.log("試試看哦結果是什麼", result);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
