import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    const apiParams: apiParamsType = {
      apiPath: `${apiPaths["get-all-members"]}?groupId=${id}`,
      method: "GET",
    };

    const result = await fetchApi(apiParams);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
