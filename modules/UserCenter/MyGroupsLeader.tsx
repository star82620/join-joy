import React, { useState } from "react";
import groupStatus from "@/constants/groupStatus";

const tabs = [
  {
    tabId: "upcoming",
    text: "未開始",
  },
  {
    tabId: "over",
    text: "已結束",
  },
];

export default function MyGroupsLeader() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const defaultTabStyle = "text-gray-500";
  const activeTabStyle = "border-b-[3px] border-purple-dark";

  const handleSetTab = (tab) => {
    setActiveTab(tab.tabId);
  };

  return (
    <section className="px-6 py-8 md:p-4">
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const isActive = tab.tabId === activeTab;
          const tabStyle = isActive ? activeTabStyle : defaultTabStyle;
          return (
            <p
              key={tab.tabId}
              className={`px-12 py-3 font-semibold ${tabStyle}`}
              onClick={() => handleSetTab(tab)}
            >
              {tab.text}
            </p>
          );
        })}
      </div>
      <div className="mt-10 md:mt-4">
        <div className="w-full flex justify-between gap-3 md:gap-2 p-2 mb-3 border-b-2 text-center font-semibold leading-[1.2] md:hidden">
          <p className="min-w-[64px]">狀態</p>
          <p className="min-w-[208px]">名稱</p>
          <p className="min-w-[208px]">地點</p>
          <p className="min-w-[176px]">時間</p>
          <p className="min-w-[64px]">人數</p>
          <p className="min-w-[80px]">取消/退出</p>
        </div>
        <div>
          content
          <div className="w-full flex justify-between gap-3 md:gap-2 p-2 mb-3 text-center text-sm md:hidden">
            <p className={`min-w-[64px] text-xs`}>
              <span className="groupStatusLight before:bg-green-light">
                審核中
              </span>
            </p>
            <p className="min-w-[208px] text-">輕鬆派對揪友團</p>
            <p className="min-w-[208px]">地點</p>
            <p className="min-w-[176px]">時間</p>
            <p className="min-w-[64px]">人數</p>
            <p className="min-w-[80px]">取消/退出</p>
          </div>
        </div>
      </div>
    </section>
  );
}
