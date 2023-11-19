import React, { useState } from "react";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import TabBlock from "@/common/components/FileWrapper/TabBlock";
import { TabType } from "@/common/components/FileWrapper/data";

export default function SearchBar() {
  const titleStyle = "text-lg md:text-md";
  const [activeTab, setActiveTab] = useState("store");
  const tabs: TabType[] = [
    {
      tabName: "group",
      tabText: "找揪團",
      img: { src: globalIcons["search-group"], alt: "search-group" },
    },
    {
      tabName: "store",
      tabText: "找店家",
      img: { src: globalIcons["search-store"], alt: "search-store" },
    },
  ];
  return (
    <>
      {/* <div className="flex items-start absolute">
        <p
          className={`
        pt-2 px-6 md:px-3
        -ml-3 md:-ml-2
        text-lg font-semibold leading-[1.5] md:text-sm
        border-[3px] border-b-0
        rounded-tr-md
        first:rounded-tl-md first:border-l-[3px] first:ml-0
        `}
          // isActive ? `z-10` : `z-${zIndex}`
          // isActive ? activeStyle : defaultStyle
          // data-tab={tabName}
          // onClick={() => setActiveTab(tabName)}
        >
          <span className="inline-block align-middle w-6 h-6 md:w-5 md:h-5 relative">
            <Image src="" alt="" fill sizes="100%" className="object-contain" />
          </span>
          <span className="ml-2 align-middle">edded</span>
        </p>
      </div> */}
      {tabs.map((tab, index, tabs) => {
        const zIndex = tabs.length - index;
        const isActive = tab.tabName === activeTab;
        return (
          <TabBlock
            key={tab.tabName}
            tab={tab}
            zIndex={zIndex}
            isActive={isActive}
            setActiveTab={setActiveTab}
          />
        );
      })}
      {/* 下面是搜尋欄位 */}
      <section className="border-[3px] bg-yellow-tint px-12 pt-12 pb-14 md:px-4 md:py-7">
        <form className="flex md:flex-col items-end gap-7 md:gap-4">
          <div>
            <h3 className={titleStyle}>地點</h3>
            <select className="inputStyle"></select>
          </div>
          <div>
            <h3 className={titleStyle}>日期</h3>
            <input type="text" className="inputStyle" />
          </div>
          <div>
            <h3 className={titleStyle}>關鍵字</h3>
            <input type="text" className="inputStyle" />
          </div>
          <Button type="submit" appearance="black" rounded>
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <Image
                src={globalIcons["search-white"]}
                alt="search"
                widthProp="w-6 md:w-2.5"
                heightProp="h-6 md:h-2.5"
              />
              搜出揪團
            </div>
          </Button>
        </form>
      </section>
    </>
  );
}
