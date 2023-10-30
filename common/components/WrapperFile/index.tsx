import React, { Children } from "react";
import TabsSection from "./TabsSection";
import { TabsSectionProps } from "./data";

export default function WrapperFile({
  tabSet,
  activeTab,
  setActiveTab,
}: TabsSectionProps) {
  const activeComponent = tabSet.map((tab) => {
    if (tab.tabName !== activeTab) return null;
    return tab.target;
  });
  console.log(activeComponent);
  return (
    <section className="flex flex-col grow relative lg:w-full">
      <TabsSection
        tabSet={tabSet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="p-6 bg-yellow-dark border-[3px] border-t-2 w-full mt-[48.5px] md:mt-[41.5px]">
        {activeComponent}
      </section>
    </section>
  );
}
