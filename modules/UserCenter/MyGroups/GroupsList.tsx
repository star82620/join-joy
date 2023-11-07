import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import TabSection from "../TabSection";
import formatDate from "@/common/helpers/formateDate";
import statusSet from "@/constants/groupStatusSet";
import { groupsData, tabs, ActionBtnType } from "./data";
import { useRouter } from "next/router";

// 是哪一種狀態
const setStatus = (endTime: string, status: string) => {
  const now = new Date();
  const today = now.toISOString();
  if (status === "pending") return "pending";
  if (endTime < today) return "over";
  return "member";
};

export default function GroupsList({}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  const handleCancelApply = (event: React.MouseEvent<HTMLElement>) => {};
  const handleQuitGroup = (event: React.MouseEvent<HTMLElement>) => {};
  const handleToComment = (event: React.MouseEvent<HTMLElement>) => {
    router.push("/about");
  };

  const actionBtns: Record<string, ActionBtnType> = {
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
            const {
              groupId,
              groupName,
              store,
              place,
              totalMemberNum,
              currentNum,
              startTime,
              endTime,
              status,
              commented,
            } = group;

            // 得到狀態："pending" "member" "over"
            const groupStatus = setStatus(endTime, status);
            // 狀態表示
            const statusStyle = statusSet[groupStatus].style;
            const statusText = statusSet[groupStatus].text;

            const isActive =
              (isActiveOver && groupStatus === "over") ||
              (!isActiveOver && groupStatus !== "over");
            if (!isActive) return;

            // ----

            // 目前的評價狀態如何，會從 API 得取
            const isCommented = commented;

            // 自動抓取對應的按鈕
            //如果是 activeTab === over，看是否已有評價？
            const selectBtn = () => {
              if (!isActiveOver) return groupStatus;
              if (isCommented) return "commented";
              return "over";
            };
            const actionBtnId = selectBtn();
            const btnDisabled = actionBtns[actionBtnId].disabled;
            const btnOnClick = actionBtns[actionBtnId].func;
            const btnText = actionBtns[actionBtnId].text;

            const isPlace = place === "NULL";
            const location = isPlace ? store.storeName : place;

            const { groupDate, formatStartTime, formatEndTime } = formatDate(
              startTime,
              endTime
            );
            const groupTime = `${formatStartTime} - ${formatEndTime}`;

            return (
              <li
                key={groupId}
                className="w-full flex justify-between items-center p-2 mb-3 bg-yellow-tint text-center text-sm"
              >
                <p className="w-[10%] text-xs">
                  <span className={`groupStatusDot ${statusStyle}`}>
                    {statusText}
                  </span>
                </p>
                <p className="w-[20%] truncate text-sm">
                  <Link href={`/group/${groupId}`}>{groupName}</Link>
                </p>
                <p className="w-[20%] truncate">{location}</p>
                <p className="w-[20%] flex flex-wrap justify-center gap-2">
                  <span className=" whitespace-nowrap">{groupDate}</span>
                  <span className=" whitespace-nowrap">{groupTime}</span>
                </p>
                <p className="w-[10%]">
                  {currentNum}/{totalMemberNum}
                </p>
                <div className="w-[10%]">
                  <Button
                    type="button"
                    appearance="black"
                    rounded
                    className="w-full"
                    isDisabled={btnDisabled}
                    onClick={btnOnClick}
                  >
                    <p className="text-sm">{btnText}</p>
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
