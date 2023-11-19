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
      img: { src: globalIcons["search-group-light"], alt: "search-group" },
    },
    {
      tabName: "store",
      tabText: "找店家",
      img: { src: globalIcons["search-store-light"], alt: "search-store" },
    },
  ];

  return (
    <section className="w-full flex flex-col items-center relative lg:w-full">
      <div className="flex items-start absolute">
        {tabs.map((tab, index, tabs) => {
          const zIndex = tabs.length - index;
          const isActive = activeTab === tab.tabName;
          return (
            <TabBlock
              key={tab.tabName}
              tab={tab}
              zIndex={zIndex}
              isActive={isActive}
              setActiveTab={setActiveTab}
              activeColor="bg-yellow-tint"
            />
          );
        })}
      </div>
      {/* 下面是搜尋欄位 */}
      <div className="w-full border-[3px] bg-yellow-tint px-12 pt-12 pb-14 md:px-4 md:py-7 mt-[47px] md:mt-[40px]">
        <form className="flex md:flex-col justify-between items-end gap-7 md:gap-4">
          <div className="w-full">
            <h3 className={titleStyle}>地點</h3>
            <select className="inputStyle"></select>
          </div>
          <div className="w-full">
            <h3 className={titleStyle}>日期</h3>
            <input type="text" className="inputStyle" />
          </div>
          <div className="w-full">
            <h3 className={titleStyle}>關鍵字</h3>
            <input
              type="text"
              className="inputStyle"
              placeholder="輸入你想找的遊戲"
            />
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
      </div>
    </section>
  );
}
