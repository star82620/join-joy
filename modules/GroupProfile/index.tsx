import React, { createContext, useContext, useState } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import GroupInformation from "./GroupInformation";
import MembersList from "./MembersList";
import CommentsBoard from "./CommentsBoard";
import { GroupDataContextType, GroupProfileProps } from "./data";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { AuthContext } from "@/common/contexts/AuthProvider";
import { checkIsLeader } from "@/common/helpers/checkIsLeader";

export const GroupDataContext = createContext<GroupDataContextType>(
  {} as GroupDataContextType
);

export default function GroupProfile({ data }: GroupProfileProps) {
  const { groupId, groupData, commentsData } = data;

  const currentMemberNum = groupData.members.reduce((counter, member) => {
    counter += member.initNum;
    return counter;
  }, 0);

  const [applyNum, setApplyNum] = useState<number>(1);

  const handleJoinSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      groupId: groupId,
      initNum: applyNum,
    };

    const apiParams: apiParamsType = {
      apiPath: apiPaths["apply-join-group"],
      method: "POST",
      data: data,
    };

    const res = await fetchApi(apiParams);
    if (!res.status) return;

    alert("成功送出申請");
    // 按下送出 API
  };

  return (
    <section className="container py-14 md:py-9">
      <div className="flex justify-center items-stretch gap-9 md:flex-col">
        <GroupDataContext.Provider
          value={{ groupId, groupData, currentMemberNum, commentsData }}
        >
          <div className="flex flex-col gap-9 md:gap-8 grow">
            <div className="grow">
              <ModalWrapper title="揪團資訊" layout="primary">
                <GroupInformation
                  setApplyNum={setApplyNum}
                  handleJoinSubmit={handleJoinSubmit}
                />
              </ModalWrapper>
            </div>
            <div>
              <ModalWrapper title="留言板" layout="secondary">
                <CommentsBoard />
              </ModalWrapper>
            </div>
          </div>
          <div className="w-[304px] md:w-full">
            <ModalWrapper title="參加者列表" layout="secondary">
              <MembersList />
            </ModalWrapper>
          </div>
        </GroupDataContext.Provider>
      </div>
    </section>
  );
}
