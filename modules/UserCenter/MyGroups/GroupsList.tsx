import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import TabSection from "../TabSection";
import GroupItem from "./GroupItem";
import { DataContext } from "@/pages/user-center";
import setGroupStatus from "./setGroupStatus";
import { tabs, BtnSetType, GroupListProps } from "./data";
import { defaultGroupsData } from "../date";

function GroupsList({ category }: GroupListProps) {
  const router = useRouter();
  const handleCancelApply = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("取消加入揪團申請");
  };
  const handleQuitGroup = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("退出揪團");
  };
  const pushToComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    console.log("跳到評價頁面");
    router.push(`/user-center/group/${id}`);
  };
  const pushToManagement = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    router.push(`/user-center/group/${id}`);
  };

  // Tab 控制 state，預設 upcoming
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  // 我開的揪團（團主）
  const isLeaderPage = category === "leader";
  // 我加入的揪團（團員）
  const isMemberPage = category === "member";
  // 尚未開始 tab
  const isUpcoming = activeTab === "upcoming";
  // 已結束 tab
  const isExpired = activeTab === "Expired";

  console.log("isLeaderPage", isLeaderPage);
  console.log("isMemberPage", isMemberPage);
  console.log("isUpcoming", isUpcoming);

  // 取得 groupSet，根據角色分別抓對應的資料群
  const groupsSetData =
    useContext(DataContext)?.groupsData || defaultGroupsData;
  const groupsData = isLeaderPage
    ? groupsSetData["leader"]
    : groupsSetData["member"];

  const btnSet: BtnSetType = {
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
    leader: {
      text: "管理",
      func: pushToManagement,
      disabled: false,
    },
    closed: {
      text: "評價",
      func: pushToComment,
      disabled: false,
    },
    commented: {
      text: "已評價",
      disabled: true,
    },
    cancel: {
      text: "",
      disabled: true,
    },
  };

  const setBtnTitle = () => {
    const leaderBtnTitle = (
      <>
        <span className="whitespace-nowrap after:content-['/'] after:font-normal">
          預約
        </span>
        <span className="whitespace-nowrap">審核</span>
      </>
    );
    const memberBtnTitle = (
      <>
        <span className="whitespace-nowrap after:content-['/'] after:font-normal">
          取消
        </span>
        <span className="whitespace-nowrap">退出</span>
      </>
    );

    if (isLeaderPage) {
      if (isUpcoming) return leaderBtnTitle;
      return "評價";
    } else if (isMemberPage) {
      if (isUpcoming) return memberBtnTitle;
      return "評價";
    }
  };

  const btnTitle = setBtnTitle();

  // 篩選要跑出來的列表內容
  const filteredData = groupsData.filter((group) => {
    const { endTime, groupStatus, memberStatus } = group;
    const status = setGroupStatus(endTime, groupStatus, memberStatus);
    const isClosed = status === "closed";
    const now = new Date();
    const today = now.toISOString();
    const isExpiredGroup = endTime < today;

    if (isUpcoming) {
      if (isExpiredGroup) return false;
      if (isClosed) return false;
      return true;
    }

    if (isExpiredGroup) return true;
    if (isClosed) return true;

    return false;
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
          <p className="w-[10%]">{btnTitle}</p>
        </div>
        <ul>
          {filteredData.map((group) => (
            <GroupItem
              key={group.groupId}
              group={group}
              isExpired={isExpired}
              btnSet={btnSet}
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
