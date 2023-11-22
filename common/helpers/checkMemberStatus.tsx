import React, { useContext } from "react";
import fetchApi, { apiParamsType } from "./fetchApi";
import apiPaths from "@/constants/apiPaths";
import { AuthDataType } from "@/constants/globalTypes";
import { GroupIdType } from "@/modules/GroupProfile/data";
import { UserType } from "@/constants/types/groupDataType";

export async function checkMemberStatus(
  authData: AuthDataType | null,
  groupId: GroupIdType
) {
  if (!authData?.userId || !groupId) return null;

  const authUserID = authData.userId;

  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["get-all-members"]}?groupId=${groupId}`,
    method: "GET",
  };

  try {
    const res = await fetchApi(apiParams);
    if (!res.status || !res.data) return null;

    const data: UserType[] = res?.data;

    const groupMember = data.filter((user) => {
      return user.userId === authUserID;
    });

    const memberStatus = groupMember[0].status;

    return memberStatus;
  } catch (error) {
    console.error(error);
    return null;
  }
}
