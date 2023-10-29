import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { TabBlockProps, TabsSectionProps } from "./data";

// 單個 tab
const TabBlock = ({ tab, zIndex, isActive, setActiveTab }: TabBlockProps) => {
  const { tabName, tabText, img } = tab;

  const defaultStyle =
    "pb-2 bg-gray-200 text-gray-600 border-gray-400 border-l-gray-400";

  const activeStyle =
    "pb-[10px] bg-yellow-dark text-gray-950 border-gray-950 rounded-tl-md";

  const setImgSrc = () => {
    const activeImg = img.src.replace("light", "dark");
    const result = isActive ? activeImg : img.src;
    return result;
  };

  const imgSrc = setImgSrc();

  return (
    <p
      className={clsx(
        "pt-2 px-6",
        "-ml-3",
        "text-lg font-semibold leading-1",
        "border-[3px] border-b-0",
        "rounded-tr-md",
        "first:rounded-tl-md first:border-l-[3px] first:ml-0",
        isActive ? `z-10` : `z-${zIndex}`,
        isActive ? activeStyle : defaultStyle
      )}
      data-tab={tabName}
      onClick={() => setActiveTab(tabName)}
    >
      <span className="inline-block align-middle w-6 h-6 md:w-5 md:h-5 relative">
        <Image
          src={imgSrc}
          alt={img.alt}
          fill
          sizes="100%"
          className="object-contain"
        />
      </span>
      <span className="ml-2 align-middle">{tabText}</span>
    </p>
  );
};

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
