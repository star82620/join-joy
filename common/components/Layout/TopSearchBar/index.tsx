import React, { useContext, useState } from "react";
import Button from "../../GeneralButton";
import { SearchContext } from "@/common/contexts/SearchProvider";
import useSearch from "@/modules/LandingPage/useSearch";
import { GetDataContext } from "@/pages";
import SearchTab from "./SearchTab";
import { DisplayCategoryType } from "./data";
import { CitiesDataContext } from "@/common/contexts/CitiesProvider";

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

  // const getDataContext = useContext(GetDataContext);
  // const { citiesData } = getDataContext;

  const cityDataContext = useContext(CitiesDataContext);
  // const citiesData = getDataContext;
  console.log("dd", cityDataContext);

  const keywordPlaceholderText = isGroup
    ? "輸入你想找的遊戲"
    : "輸入你想找的店家名稱";

  // 切換不顯示、一般款和簡易款

  const [displayCategory, setDisplayCategory] =
    useState<DisplayCategoryType>("default");

  // 畫面滾動位置為依據
  const ishidden = displayCategory === "hidden";
  // 點擊切換、手機版
  const isDefault = displayCategory === "default";
  const isSimply = displayCategory === "simply";

  const setCategory = () => {
    // setDisplayCategory(!displayCategory);
  };

  return (
    <div className="py-4 md:px-4 md:py-3 bg-brown-dark">
      <form onSubmit={submitSearch}>
        {/* 手機版 */}
        {/* {!isdisplayCategory && (
          <div className="container flex items-center gap-2">
            <SearchTab />
            <div className="inputStyle !mt-0" onClick={setCategory}>
              台北市 信義區、2023/10/5 searchKeys
            </div>
          </div>
        )} */}
        {isDefault && (
          <div className="container flex items-center md:flex-col gap-7 md:gap-4">
            <SearchTab />
            <div className="w-full flex md:flex-col gap-7 md:gap-4 md:mt-1">
              <select
                className="inputStyle !mt-0"
                value={searchKeys.cityId}
                onChange={setSelectValue}
              >
                <option value="">選擇城市</option>
                {/* {citiesData.map((city) => (
                  <option key={city.Id} value={city.Id}>
                    {city.CityName}
                  </option>
                ))} */}
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
              <span className="whitespace-nowrap">{submitBtnText}</span>
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
