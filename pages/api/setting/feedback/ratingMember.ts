import { NextApiRequest, NextApiResponse } from "next";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { authToken } = req.cookies;
    const data = req.body;

    const apiParams: apiParamsType = {
      apiPath: apiPaths["rating-member"],
      method: "POST",
      data: JSON.stringify(data),
      authToken: authToken,
    };

    const result = await fetchApi(apiParams);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
