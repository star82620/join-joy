import React, { MouseEventHandler, useContext, useState } from "react";
import Button from "../../GeneralButton";
import { TabType } from "../../FileWrapper/data";
import Image from "../../FillImage";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { SearchContext } from "@/common/contexts/SearchProvider";

export const tabs: TabType[] = [
  {
    tabName: "group",
    tabText: "找揪團",
    img: {
      src: globalIcons["search-group-light"].src,
      alt: globalIcons["search-group-light"].alt,
    },
  },
  {
    tabName: "store",
    tabText: "找店家",
    img: {
      src: globalIcons["search-store-light"].src,
      alt: globalIcons["search-store-light"].alt,
    },
  },
];

export default function TopSearchBar() {
  const SearchTab = () => {
    const defaultStyle = "bg-gray-200 text-gray-500";
    const activeStyle = "bg-yellow-tint text-gray-950";

    return (
      <div className="flex items-center gap-0.5 p-1 bg-yellow-tint font-semibold leading-6 whitespace-nowrap flex-shrink-0">
        {tabs.map((tab) => {
          const { tabName, tabText, img } = tab;
          const isActive = activeTab === tabName;
          const tabStyle = isActive ? activeStyle : defaultStyle;
          const setImgSrc = () => {
            const activeImg = img.src.replace("light", "dark");
            const result = isActive ? activeImg : img.src;
            return result;
          };

          const imgSrc = setImgSrc();
          return (
            <div
              key={tabName}
              className={`flex items-center gap-1 px-2 py-1 md:p-1 ${tabStyle}`}
              onClick={() => {
                setActiveTab(tabName);
              }}
            >
              <Image
                src={imgSrc}
                alt={img.alt}
                widthProp="w-5 md:w-4"
                heightProp="h-5 md:h-4"
              />
              {tabText}
            </div>
          );
        })}
      </div>
    );
  };

  const searchContext = useContext(SearchContext);
  const { activeTab, setActiveTab, searchKeys } = searchContext;

  const isGroup = activeTab === "group";

  const [toggleDetail, setToggleDetail] = useState(true);

  const isToggleDetail = toggleDetail === true;

  const setToggleDetailInputs = () => {
    setToggleDetail(!toggleDetail);
  };

  return (
    <>
      <div className="py-4 md:px-4 md:py-3 bg-brown-dark">
        {/* 手機版 */}
        {!isToggleDetail && (
          <div className="container flex items-center gap-2">
            <SearchTab />
            <div className="inputStyle !mt-0" onClick={setToggleDetailInputs}>
              台北市 信義區、2023/10/5 searchKeys
            </div>
          </div>
        )}
        {isToggleDetail && (
          <div className="container flex items-center md:flex-col gap-7 md:gap-4">
            <SearchTab />
            <div className="w-full flex md:flex-col gap-7 md:gap-4 md:mt-1">
              <select className="inputStyle !mt-0" placeholder="台北市">
                <option>台北市</option>
              </select>
              {isGroup && (
                <select className="inputStyle !mt-0" placeholder="2023/10/5">
                  日期
                  <option>2023/10/5</option>
                </select>
              )}
              <input
                type="text"
                className="inputStyle !mt-0"
                placeholder="輸入你想找的遊戲"
              />
            </div>
            <Button type="submit" appearance="black" rounded>
              <span className="whitespace-nowrap">搜出店家</span>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
