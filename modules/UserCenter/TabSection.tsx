import React from "react";
import { TabSectionProps } from "./date";

const defaultTabStyle = "text-gray-500";
const activeTabStyle = "border-b-[3px] border-purple-dark";

export default function TabSection({
  tabs,
  activeTab,
  setActiveTab,
}: TabSectionProps) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = tab.tabId === activeTab;
        const tabStyle = isActive ? activeTabStyle : defaultTabStyle;
        return (
          <p
            key={tab.tabId}
            className={`px-12 py-3 font-semibold ${tabStyle}`}
            onClick={() => setActiveTab(tab.tabId)}
          >
            {tab.text}
          </p>
        );
      })}
    </div>
  );
}
