import React, { Children } from "react";
import TabsSection from "./TabsSection";
import { WrapperFileProps } from "./data";

export default function WrapperFile({
  tabSet,
  activeTab,
  setActiveTab,
  children,
}: WrapperFileProps) {
  return (
    <section className="flex flex-col grow relative lg:w-full">
      <TabsSection
        tabSet={tabSet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="p-6 bg-yellow-dark border-[3px] border-t-2 w-full mt-[48.5pxs] md:mt-[41.5px] h-full">
        {children}
      </section>
    </section>
  );
}
