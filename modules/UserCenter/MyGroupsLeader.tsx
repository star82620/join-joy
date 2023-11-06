import React, { useState } from "react";

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
  const tableHeadStyle = "font-semibold leading-[1.2]";

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
        <div className="w-full flex gap-3 md:gap-2 py-2 md:hidden">
          <p className={tableHeadStyle}>狀態</p>
          <p className={tableHeadStyle}>名稱</p>
          <p className={tableHeadStyle}>地點</p>
          <p className={tableHeadStyle}>時間</p>
          <p className={tableHeadStyle}>人數</p>
          <p className={tableHeadStyle}>取消/退出</p>
        </div>
        <div>content</div>
      </div>
    </section>
  );
}
