import React, { useContext, useEffect, useState } from "react";
import useSearch from "@/common/hooks/useSearch";
import Button from "../../GeneralButton";
import Image from "../../FillImage";
import SearchTab from "./SearchTab";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { DisplayCategoryType } from "./data";
import { useGetAllCitiesData } from "@/common/hooks/useGetAllCitiesData";
import DatePickerInput from "../../Form/DatePickerInput";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";

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
  const { activeTab, setActiveTab, searchKeys, setSearchKeys } = searchContext;

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

  const [date, setDate] = useState("");

  useEffect(() => {
    setSearchKeys({ ...searchKeys, startDate: date });
  }, [date]);

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
          <div className="container flex md:flex-col gap-7 md:gap-4">
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
              {isGroup && <DatePickerInput value={date} setValue={setDate} />}
              <input
                type="text"
                className="inputStyle !mt-0"
                placeholder={keywordPlaceholderText}
                value={searchKeys.gameName}
                onChange={setInputValue}
              />
            </div>
            <Button type="submit" appearance="black" rounded>
              <div className="flex justify-center items-center gap-2.5 whitespace-nowrap">
                <Image
                  src={globalIcons["search-white"].src}
                  alt={globalIcons["search-white"].alt}
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
                <span className="whitespace-nowrap">{submitBtnText}</span>
              </div>
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
