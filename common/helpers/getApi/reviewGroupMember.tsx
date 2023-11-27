import React from "react";
import fetchApi, { apiParamsType } from "../fetchApi";
import apiPaths from "@/constants/apiPaths";

// 審核
export async function reviewGroupMember(
  groupId: number,
  userId: number,
  acceptedStatus: "member" | "rejected"
) {
  if (!groupId || !userId || !acceptedStatus) return null;

  const data = {
    userId: userId,
    status: acceptedStatus,
  };

  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["review-group-member"]}/${groupId}`,
    method: "POST",
    data: data,
  };

  try {
    const res = await fetchApi(apiParams);

    return res;
  } catch (error) {
    console.error(error);
  }
}
