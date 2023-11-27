import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { GameType } from "@/constants/types/groupDataType";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameType | { error: string }>
) {
  try {
    const apiParams: apiParamsType = {
      apiPath: apiPaths["get-all-game-types"],
      method: "GET",
    };

    const res = await fetchApi(apiParams);
    const json = res.json();
    const data = json.data;

    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
