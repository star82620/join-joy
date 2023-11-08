import React, { useState } from "react";
import { useRouter } from "next/router";
import TabSection from "../TabSection";
import GroupItem from "./GroupItem";
import { groupsData, tabs, ActionBtnsType, GroupListProps } from "./data";

export default function GroupsList({ memberStatus }: GroupListProps) {
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

  const isActiveOver = activeTab === "over";
  const upcomingActionTitle = (
    <>
      <span className="whitespace-nowrap after:content-['/'] after:font-normal">
        取消
      </span>
      <span className="whitespace-nowrap">退出</span>
    </>
  );
  const OverActionTitle = "評價";
  // const emptyList =

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
            {isActiveOver ? OverActionTitle : upcomingActionTitle}
          </p>
        </div>
        <ul>
          {groupsData.map((group) => {
            const isLeaderPage = memberStatus === "leader";
            const isLeaderList = group.status === "leader";
            const skipItem = isLeaderPage ? !isLeaderList : isLeaderList;
            if (skipItem) return;

            return (
              <GroupItem
                key={group.groupId}
                group={group}
                isActiveOver={isActiveOver}
                actionBtns={actionBtns}
              />
            );
          })}
          {/* { isEmptyList &&"目前沒有任何紀錄唷！"} */}
        </ul>
      </div>
    </section>
  );
}
