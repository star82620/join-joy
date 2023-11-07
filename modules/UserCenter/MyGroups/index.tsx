import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import TabSection from "../TabSection";
import GroupsList from "./GroupsList";
import formatDate from "@/common/helpers/formateDate";
import groupStatus from "@/constants/groupStatus";
import { groupsData, tabs, tabIdType } from "../date";

export default function MyGroups({}) {
  const [activeTab, setActiveTab] = useState<tabIdType>("upcoming");

  const handleCancelApply = () => {};

  const handleQuitGroup = () => {};

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
            <span className="whitespace-nowrap after:content-['/'] after:font-normal">
              取消
            </span>
            <span className="whitespace-nowrap">退出</span>
          </p>
        </div>
        <ul>
          {/* <GroupsList activeTab={activeTab} /> */}
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

            const setStatus = () => {
              const now = new Date();
              const today = now.toISOString();
              if (status === "pending") return "pending";
              if (endTime < today) return "over";
              return "member";
            };

            const isActive =
              (activeTab === "over" && setStatus() === "over") ||
              (activeTab === "upcoming" && setStatus() !== "over");
            if (!isActive) return;
            //

            const actionBtns = {
              member: {
                text: "取消申請",
                func: console.log("取消 apply"),
                disabled: false,
              },
              pending: {
                text: "退出揪團",
                func: console.log("quit"),
                disabled: false,
              },
              over: {
                text: "評價",
                func: console.log("over"),
                disabled: false,
              },
              commented: {
                text: "已評價",
                func: console.log("commen"),
                disabled: true,
              },
            };
            const isCommented = commented;

            const selectBtn = () => {
              if (activeTab === "over" && isCommented) return "commented";

              // if (activeTab === "over" && !isCommented) return "over";
              console.log("ff");
              // return setStatus();
            };
            const btnId = setStatus();
            console.log(commented, "isCommented:" + isCommented, btnId);

            //如果是 activeTab === over，看是否已有評價？

            const statusStyle = groupStatus[setStatus()].style;
            const statusText = groupStatus[setStatus()].text;

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
                className="w-full flex justify-between items-center gap-3 md:gap-2 p-2 mb-3 bg-yellow-tint text-center text-sm"
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
                <p className="w-[10%]">
                  <Button
                    type="button"
                    appearance="black"
                    rounded
                    isDisabled={actionBtns[btnId].disabled}
                    onClick={actionBtns[btnId].func}
                  >
                    <span className="text-sm">{actionBtns[btnId].text}</span>
                  </Button>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
