import React, { useContext, useEffect, useState } from "react";
import Button from "../../GeneralButton";
import useSearch from "@/common/hooks/useSearch";
import SearchTab from "./SearchTab";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { DisplayCategoryType } from "./data";
import { useGetAllCitiesData } from "@/common/hooks/useGetAllCitiesData";

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

  // 所有城市資料
  const allCitiesData = useGetAllCitiesData();

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
                name="cityId"
                value={searchKeys.cityId}
                onChange={setSelectValue}
              >
                <option value="">選擇城市</option>
                {allCitiesData.map((city) => (
                  <option key={city.Id} value={city.Id}>
                    {city.CityName}
                  </option>
                ))}
              </select>
              {isGroup && (
                <select
                  className="inputStyle !mt-0"
                  name="startDate"
                  value={searchKeys.startDate}
                  onChange={setSelectValue}
                >
                  <option>請選擇日期</option>
                  <option value="2023-11-31">2023/11/31</option>
                  <option value="2023-12-01">2023/12/01</option>
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
