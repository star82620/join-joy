import React, { MouseEventHandler, useContext, useState } from "react";
import Button from "../../GeneralButton";
import { TabType } from "../../FileWrapper/data";
import Image from "../../FillImage";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { SearchContext } from "@/common/contexts/SearchProvider";
import useSearch from "@/modules/LandingPage/useSearch";
import { searchTabs } from "@/constants/searchTabs";
import { GetDataContext } from "@/pages";

const SearchTab = () => {
  const defaultStyle = "bg-gray-200 text-gray-500";
  const activeStyle = "bg-yellow-tint text-gray-950";

  const searchContext = useContext(SearchContext);
  const { activeTab, setActiveTab } = searchContext;

  return (
    <div className="flex items-center gap-0.5 p-1 bg-yellow-tint font-semibold leading-6 whitespace-nowrap flex-shrink-0">
      {searchTabs.map((tab) => {
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

export default function TopSearchBar() {
  const {
    setSelectValue,
    setInputValue,
    submitSearch,
    isError,
    isGroup,
    submitBtnText,
  } = useSearch();

  const searchContext = useContext(SearchContext);
  const { activeTab, setActiveTab, searchKeys } = searchContext;

  const getDataContext = useContext(GetDataContext);
  const { citiesData } = getDataContext;

  const keywordPlaceholderText = isGroup
    ? "輸入你想找的遊戲"
    : "輸入你想找的店家名稱";

  const btnText = isGroup ? "搜出揪團" : "搜出店家";

  const [toggleDetail, setToggleDetail] = useState(true);

  const isToggleDetail = toggleDetail === true;

  const setToggleDetailInputs = () => {
    setToggleDetail(!toggleDetail);
  };

  return (
    <div className="py-4 md:px-4 md:py-3 bg-brown-dark">
      <form onSubmit={submitSearch}>
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
              <select
                className="inputStyle !mt-0"
                value={searchKeys.cityId}
                onChange={setSelectValue}
              >
                <option value="">選擇城市</option>
                {citiesData.map((city) => (
                  <option key={city.Id} value={city.Id}>
                    {city.CityName}
                  </option>
                ))}
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
                placeholder={keywordPlaceholderText}
                value={searchKeys.gameName}
                onChange={setInputValue}
              />
            </div>
            <Button type="submit" appearance="black" rounded>
              <span className="whitespace-nowrap">{btnText}</span>
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
