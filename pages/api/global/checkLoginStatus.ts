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

    const result = await fetchApi(apiParams);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
