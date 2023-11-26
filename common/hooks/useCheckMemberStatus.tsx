import React, { useEffect, useState } from "react";
import { UserType } from "@/constants/types/groupDataType";
import { useAuth } from "../hooks/useAuth";
import { MemberStatusType } from "@/constants/globalTypes";
import fetchApi, { apiParamsType } from "../helpers/fetchApi";

export function useCheckMemberStatus(groupId: number) {
  const { authData } = useAuth();
  const authUserID = authData?.userId;

  const [status, setStatus] = useState<MemberStatusType | null>(null);

  console.log("authUserID", authUserID, "groupId", groupId);

  useEffect(() => {
    const checkMemberStatus = async () => {
      try {
        const res = await fetch(`/api/group/${groupId}`);
        const json = await res.json();
        const data: UserType[] = await json?.data;

        console.log("memberStatussss res:::", data);

        if (!res.status || !data) return null;

        // 找到 id 跟使用者相同的團員
        const groupMember = await data.filter((user) => {
          return user.userId === authUserID;
        });

        const memberStatus = await groupMember[0].status;

        setStatus(await memberStatus);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    checkMemberStatus();
  });

  return status;
}
