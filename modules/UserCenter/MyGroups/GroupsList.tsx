import React, { useState } from "react";
import { useRouter } from "next/router";
import TabSection from "../TabSection";
import GroupItem from "./GroupItem";
import { groupsData, tabs, ActionBtnsType, GroupListProps } from "./data";

// 是哪一種狀態
export const setStatus = (endTime: string, status: string) => {
  const now = new Date();
  const today = now.toISOString();
  if (status === "pending") return "pending";
  if (endTime < today) return "over";
  return "member";
};

export default function GroupsList({ pageStatus }: GroupListProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  const handleCancelApply = (event: React.MouseEvent<HTMLElement>) => {};
  const handleQuitGroup = (event: React.MouseEvent<HTMLElement>) => {};
  const handleToComment = (event: React.MouseEvent<HTMLElement>) => {
    router.push("/about");
  };

  const actionBtns: ActionBtnsType = {
    pending: {
      text: "取消申請",
      func: handleQuitGroup,
      disabled: false,
    },
    member: {
      text: "退出揪團",
      func: handleCancelApply,
      disabled: false,
    },
    over: {
      text: "評價",
      func: handleToComment,
      disabled: false,
    },
    commented: {
      text: "已評價",
      disabled: true,
    },
  };

  const isOverActive = activeTab === "over";
  const upcomingActionTitle = (
    <>
      <span className="whitespace-nowrap after:content-['/'] after:font-normal">
        取消
      </span>
      <span className="whitespace-nowrap">退出</span>
    </>
  );
  const OverActionTitle = "評價";

  const isLeaderPage = pageStatus === "leader";

  const filterData = groupsData.filter((group) => {
    const isLeaderGroup = group.status === "leader";
    if (isLeaderPage && !isLeaderGroup) return false;
    if (!isLeaderPage && isLeaderGroup) return false;

    const groupStatus = setStatus(group.endTime, group.status);
    const isOverStatus = groupStatus === "over";
    if (!isOverActive && isOverStatus) return false;
    if (isOverActive && !isOverStatus) return false;

    return true;
  });

  const isEmptyList = filterData.length === 0;

  return (
    <section className="px-6 py-8 md:p-4">
      <TabSection
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="mt-10 md:mt-4">
        <div className="w-full flex justify-between items-center gap-3 md:gap-2 p-2 mb-3 border-b-2 text-center font-semibold leading-[1.2] mdg:text-sm md:hidden">
          <p className="w-[10%]">狀態</p>
          <p className="w-[20%]">名稱</p>
          <p className="w-[20%]">地點</p>
          <p className="w-[20%]">時間</p>
          <p className="w-[10%]">人數</p>
          <p className="w-[10%]">
            {isOverActive ? OverActionTitle : upcomingActionTitle}
          </p>
        </div>
        <ul>
          {filterData.map((group) => (
            <GroupItem
              key={group.groupId}
              group={group}
              isOverActive={isOverActive}
              actionBtns={actionBtns}
            />
          ))}
          {isEmptyList && (
            <p className="text-center text-gray-600">目前沒有任何紀錄唷！</p>
          )}
        </ul>
      </div>
    </section>
  );
}
