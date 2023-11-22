import React, { useContext } from "react";
import fetchApi, { apiParamsType } from "./fetchApi";
import apiPaths from "@/constants/apiPaths";
// import { AuthContext } from "@/common/contexts/AuthProvider";

export async function checkIsLeader(authData, groupId) {
  if (!authData?.userId || !groupId) return false;

  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["get-all-members"]}?groupId=${groupId}`,
    method: "GET",
  };

  const res = await fetchApi(apiParams);
  if (!res.status || !res.data) return false;

  const data = res.data;

  // 從一包成員中找到團主，確認他是不是我
  const groupLeader = data.filter((user) => {
    return user.status === "leader";
  });

  const leaderId = groupLeader[0].userId;
  const authUserID = authData.userId;

  const isLeader = leaderId === authUserID;

  return isLeader;
}
