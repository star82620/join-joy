import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import TabSection from "../TabSection";
import GroupItem from "./GroupItem";
import setGroupStatus from "./setGroupStatus";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import ModalWrapper from "@/common/components/ModalWrapper";
import { BtnSetType, GroupListProps, tabs } from "../date";

// 無論 leader member 都是要用這個元件，只有顯示的按鈕會依據類型不同，資料一開始傳入就不同了

export default function GroupsList({
  pageCategory = "member",
  groupSetData,
  ratingStatusSet,
}: GroupListProps) {
  if (!groupSetData) return null;

  const router = useRouter();

  // both：前往評價頁
  const pushToCommentPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.value;
    router.push(`/setting/feedback/${id}`);
  };

  // leader：前往揪團管理頁
  const pushToManagementGroupPage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = e.currentTarget.value;
    router.push(`/user-center/group/${id}`);
  };

  // Tab 控制 state，預設 upcoming
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  // 我開的揪團（團主）
  const isLeaderPage = pageCategory === "leader";
  // 我加入的揪團（團員）
  const isMemberPage = pageCategory === "member";
  // 尚未開始 tab
  const isUpcoming = activeTab === "upcoming";
  // 已結束 tab
  const isExpired = activeTab === "expired";

  const btnSet: BtnSetType = {
    pending: {
      text: "取消申請",
      func: handleCancelApply,
      disabled: false,
    },
    member: {
      text: "退出揪團",
      func: handleQuitGroup,
      disabled: false,
    },
    leader: {
      text: "管理",
      func: pushToManagementGroupPage,
      disabled: false,
    },
    closed: {
      text: "評價",
      func: pushToCommentPage,
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

    const title = isLeaderPage ? leaderBtnTitle : memberBtnTitle;

    const result = isExpired ? "評價" : title;

    return result;
  };

  const btnTitle = setBtnTitle();

  // 篩選要跑出來的列表內容
  const filteredData = groupSetData.filter((group) => {
    const { groupName, endTime, groupStatus, memberStatus } = group;

    const status = setGroupStatus(groupStatus, memberStatus);

    const isClosed = status === "closed";

    const now = new Date();
    const today = now.toISOString();
    const isExpiredGroup = endTime <= today;

    if (isUpcoming) {
      if (isExpiredGroup || isClosed) return false;
      return true;
    }

    if (isClosed) {
      if (isExpiredGroup || isClosed) return true;
    }

    // Something wrong here...

    return false;
  });

  const isEmptyList = filteredData.length === 0;

  const modalTitle = isLeaderPage ? "我開的揪團" : "我加入的揪團";

  return (
    <ModalWrapper title={modalTitle} layout="primary" fill>
      <section className="px-6 pt-8 pb-6 md:p-4">
        <TabSection
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="mt-10 mdg:mt-4">
          <div className="w-full flex justify-between items-center gap-3 p-2 mb-3 border-b-2 text-center font-semibold leading-[1.2] mdg:text-sm mdg:hidden">
            <p className="w-[10%]">狀態</p>
            <p className="w-[20%]">名稱</p>
            <p className="w-[20%]">地點</p>
            <p className="w-[15%]">時間</p>
            <p className="w-[8%]">人數</p>
            <p className="w-[15%]">{btnTitle}</p>
          </div>
          <ul className="w-full flex flex-col gap-1 mdg:gap-3">
            {filteredData.map((group) => (
              <GroupItem
                key={group.groupId}
                group={group}
                btnSet={btnSet}
                ratingStatusSet={ratingStatusSet}
              />
            ))}
            {isEmptyList && (
              <p className="text-center text-gray-600">目前沒有任何紀錄唷！</p>
            )}
          </ul>
        </div>
      </section>
    </ModalWrapper>
  );
}

// member：取消加入揪團申請
async function handleCancelApply(e: React.MouseEvent<HTMLButtonElement>) {}

// member：退出揪團
async function handleQuitGroup(e: React.MouseEvent<HTMLButtonElement>) {
  const groupId = Number(e.currentTarget.value);
  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["leave-group"]}/${groupId}`,
    method: "POST",
  };

  try {
    const res = await fetchApi(apiParams);
    if (res.success) return alert("已退出揪團QQ");

    return alert("退出揪團失敗，請稍後再試");
  } catch (error) {
    console.error("好像發生了一點錯誤，請稍後再試", error);
  }
}
