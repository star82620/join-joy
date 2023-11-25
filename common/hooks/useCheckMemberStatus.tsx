import React, { useEffect, useState } from "react";
import { UserType } from "@/constants/types/groupDataType";
import { useAuth } from "../hooks/useAuth";
import { MemberStatusType } from "@/constants/globalTypes";

export function useCheckMemberStatus() {
  const { authData } = useAuth();
  const authUserID = authData?.userId;

  const [status, setStatus] = useState<MemberStatusType | null>(null);

  useEffect(() => {
    const checkMemberStatus = async () => {
      try {
        const res = await fetch("/api/group/getAllMembers");
        const json = await res.json();
        const data: UserType[] = await json?.data;

        if (!res.status || !data) return null;

        // 找到 id 跟使用者相同的團員
        const groupMember = data.filter((user) => {
          return user.userId === authUserID;
        });

        const memberStatus = groupMember[0].status;

        setStatus(memberStatus);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    checkMemberStatus();
  }, []);

  return status;
}
