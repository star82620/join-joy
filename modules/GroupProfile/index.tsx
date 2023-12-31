import React, { createContext, useContext, useState } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import GroupInfo from "./GroupInfo";
import MembersList from "./MembersList";
import CommentsBoard from "./CommentsBoard";
import { GroupDataContextType, GroupProfileProps } from "./data";

export const GroupDataContext = createContext<GroupDataContextType>(
  {} as GroupDataContextType
);

export default function GroupProfile({ data }: GroupProfileProps) {
  const { groupId, groupData, commentsData } = data;

  const filteredMembers = groupData.members.filter((member) => {
    return member.status !== "pending";
  });

  const currentMemberNum = filteredMembers.reduce((counter, member) => {
    counter += member.initNum;
    return counter;
  }, 0);

  return (
    <section className="container py-14 md:py-9">
      <div className="flex justify-center items-stretch gap-9 md:flex-col">
        <GroupDataContext.Provider
          value={{ groupId, groupData, currentMemberNum, commentsData }}
        >
          <div className="flex flex-col gap-9 md:gap-8 grow">
            <ModalWrapper title="揪團資訊" layout="primary">
              <GroupInfo />
            </ModalWrapper>

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
