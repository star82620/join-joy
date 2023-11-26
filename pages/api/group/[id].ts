import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { GameType, UserType } from "@/constants/types/groupDataType";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    // res.end(`看看我：${id}`);

    const apiParams: apiParamsType = {
      apiPath: `${apiPaths["get-all-members"]}?groupId=${id}`,
      method: "GET",
    };

    console.log("RRR試試看哦 API 路徑 ", apiParams.apiPath);

    const result = await fetchApi(apiParams);

    console.log("試試看哦結果是什麼", result);

    // res.status(200).json(result);
    res.status(200).json({ message: `处理的ID是${id}` });
    // res.status(200).end({ message: `获取到的id是${id}` });
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
