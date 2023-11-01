import React from "react";
import TabBlock from "./TabBlock";
import { TabsSectionProps } from "./data";

export default function TabsSection({
  tabSet,
  activeTab,
  setActiveTab,
}: TabsSectionProps) {
  return (
    <div className="flex items-start absolute">
      {tabSet.map((tab, index) => {
        const isActive = activeTab === tab.tabName;
        return (
          <TabBlock
            key={tab.tabName}
            tab={tab}
            zIndex={tabSet.length - index}
            isActive={isActive}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
}
