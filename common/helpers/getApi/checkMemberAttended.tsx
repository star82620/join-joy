import React from "react";
import fetchApi, { apiParamsType } from "../fetchApi";
import apiPaths from "@/constants/apiPaths";

export async function checkMemberAttended(
  groupId: number,
  userId: number,
  isAttended: boolean
) {
  if (!groupId || !userId || !isAttended) return null;

  const data = {
    memberId: userId,
    isPresent: isAttended,
  };

  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["check-member-attended"]}?groupId=${groupId}`,
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
