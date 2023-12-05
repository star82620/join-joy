import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { CitiesDataType } from "@/constants/types/apiTypes/city";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CitiesDataType | { error: string }>
) {
  try {
    const citiesApiParams: apiParamsType = {
      apiPath: apiPaths["get-cities"],
      method: "GET",
    };

    const result = await fetchApi(citiesApiParams);

    res.status(200).json(result);
  } catch (error) {
    console.error("API Error:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
