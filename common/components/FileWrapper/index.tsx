import React, { Children } from "react";
import TabsSection from "./TabsSection";
import { FileWrapperProps } from "./data";

export default function FileWrapper({
  tabSet,
  activeTab,
  setActiveTab,
  children,
}: FileWrapperProps) {
  return (
    <section className="flex flex-col grow relative lg:w-full">
      <TabsSection
        tabSet={tabSet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="p-6 bg-yellow-dark border-[3px] w-full mt-[47px] md:mt-[40px]">
        {children}
      </section>
    </section>
  );
}
