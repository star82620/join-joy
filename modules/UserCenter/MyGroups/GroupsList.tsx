import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import TabSection from "../TabSection";
import GroupItem from "./GroupItem";
import { DataContext } from "@/pages/user-center";
import { tabs, ActionBtnsType, GroupListProps } from "./data";

export const setGroupStatus = (endTime: string, status: string) => {
  const now = new Date();
  const today = now.toISOString();

  // 審核中的團員
  if (status === "pending") return "pending";
  // 時間已過
  if (endTime < today || status === "已結束") return "closed";
  return "member";
};

function GroupsList({ pageStatus }: GroupListProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  const isLeaderPage = pageStatus === "leader";
  const isMemberPage = pageStatus === "member";
  const isExpired = activeTab === "Expired";
  const isUpcoming = activeTab === "upcoming";

  const groupsSetData = useContext(DataContext).groupsData;
  const groupsData = isLeaderPage
    ? groupsSetData["leader"]
    : groupsSetData["member"];

  const handleCancelApply = (event: React.MouseEvent<HTMLElement>) => {
    console.log("取消加入揪團申請");
  };
  const handleQuitGroup = (event: React.MouseEvent<HTMLElement>) => {
    console.log("退出揪團");
  };
  const handleToComment = (event: React.MouseEvent<HTMLElement>) => {
    console.log("跳到評價頁面");
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
    closed: {
      text: "評價",
      func: handleToComment,
      disabled: false,
    },
    commented: {
      text: "已評價",
      disabled: true,
    },
  };

  const upcomingBtnTitle = (
    <>
      <span className="whitespace-nowrap after:content-['/'] after:font-normal">
        取消
      </span>
      <span className="whitespace-nowrap">退出</span>
    </>
  );
  const expiredBtnTitle = "評價";

  // 篩選要跑出來的列表內容
  const filteredData = groupsData.filter((group) => {
    // const isLeaderGroup = group.status === "leader";
    // if (isLeaderPage && !isLeaderGroup) return false;
    // if (isMemberPage && isLeaderGroup) return false;

    const groupStatus = setGroupStatus(group.endTime, group.status);
    const isClosed = groupStatus === "closed";
    if (isUpcoming && isClosed) return false;
    if (isExpired && !isClosed) return false;

    return true;
  });

  const isEmptyList = filteredData.length === 0;

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
            {isExpired ? expiredBtnTitle : upcomingBtnTitle}
          </p>
        </div>
        <ul>
          {filteredData.map((group) => (
            <GroupItem
              key={group.groupId}
              group={group}
              isExpired={isExpired}
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

export default GroupsList;
