import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type TabType = {
  tabName: string;
  tabText: string;
  img: imgType;
};

type imgType = {
  src: string;
  alt: string;
};

type TabBlockProps = {
  tab: TabType;
  zIndex: number;
  isActive: boolean;
};

// ---------一整包----------

type WrapperFileProps = {
  tabSet: TabType[];
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};

export default function WrapperFile({
  tabSet,
  activeTab,
  setActiveTab,
}: WrapperFileProps) {
  // 單個 tab
  function TabBlock({ tab, zIndex, isActive }: TabBlockProps) {
    const { tabName, tabText, img } = tab;

    const activeStyle =
      "pb-[10px] border-l-[3px] rounded-tl-md bg-yellow-dark z-10";

    const defaultStyle = "pb-2 border-gray-400 text-gray-600 bg-gray-200";

    const toggleActiveImgSrc = () => {
      const activeImg = img.src.replace("light", "dark");
      const result = isActive ? activeImg : img.src;
      return result;
    };

    const imgSrc = toggleActiveImgSrc();

    return (
      <p
        // className={clsx(
        //   "pt-2 px-6",
        //   "-ml-0.5",
        //   "text-lg font-semibold leading-1",
        //   "border-[3px] border-l-0 border-b-0 border-r-danger",
        //   "rounded-tr-md",
        //   "first:rounded-tl-md first:border-l-[3px] first:ml-0",
        //   `z-${zIndex}`,
        //   // defaultStyle
        //   isActive ? activeStyle : defaultStyle
        // )}
        className={`pt-2 px-6 -ml-0.5 text-lg font-semibold leading-1 border-[3px] border-l-0 border-b-0 border-r-danger rounded-tr-md first:rounded-tl-md first:border-l-[3px] first:ml-0 z-${zIndex} ${
          isActive ? activeStyle : defaultStyle
        }`}
        data-tab={tab.tabName}
        onClick={() => {
          setActiveTab(tab.tabName);
          console.log("activeTab", activeTab);
        }}
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
  }

  // const handleActiveTab = ;

  return (
    <div className="flex items-start absolute">
      {tabSet.map((tab, index) => {
        const isActive = activeTab === tab.tabName ? true : false;
        return (
          <TabBlock
            key={tab.tabName}
            tab={tab}
            zIndex={tabSet.length - index}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
}
