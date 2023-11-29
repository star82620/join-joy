import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import TabBlock from "@/common/components/FileWrapper/TabBlock";
import {
  SearchContext,
  defaultSearchKeys,
} from "@/common/contexts/SearchProvider";
import { GetDataContext } from "@/pages";

import { searchTabs } from "@/constants/searchTabs";
import useSearch from "@/common/hooks/useSearch";
import DatePickerInput from "@/common/components/Form/DatePickerInput";

export default function SearchBar() {
  const {
    setSelectValue,
    setInputValue,
    submitSearch,
    isError,
    isGroup,
    submitBtnText,
  } = useSearch();

  const searchContext = useContext(SearchContext);
  const { searchKeys, setSearchKeys, activeTab, setActiveTab } = searchContext;

  const getDataContext = useContext(GetDataContext);
  const { citiesData } = getDataContext;

  const titleStyle = "text-lg md:text-md";

  useEffect(() => {
    setSearchKeys(defaultSearchKeys);
  }, [activeTab]);

  const [date, setDate] = useState("");

  useEffect(() => {
    setSearchKeys({ ...searchKeys, startDate: date });
  }, [date]);

  const groupKeyWordInput = (
    <input
      type="text"
      className="inputStyle"
      placeholder="輸入你想找的遊戲"
      name="gameName"
      value={searchKeys.gameName}
      onChange={setInputValue}
    />
  );

  const storeKeyWordInput = (
    <input
      type="text"
      className="inputStyle"
      placeholder="輸入你想找的店家"
      name="storeName"
      value={searchKeys.storeName}
      onChange={setInputValue}
    />
  );

  return (
    <section className="w-full flex flex-col items-center relative lg:w-full">
      <div className="flex items-start absolute">
        {searchTabs.map((tab, index, tabs) => {
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

      {/* 搜尋欄位 */}
      <div className="w-full border-[3px] bg-yellow-tint px-12 pt-12 pb-14 md:px-4 md:py-7 mt-[47px] md:mt-[41px]">
        <form
          className="flex md:flex-col justify-between items-end gap-7 md:gap-4"
          onSubmit={submitSearch}
        >
          <div className="w-full">
            <h3 className={titleStyle}>地點</h3>
            <div className="relative">
              <select
                className="inputStyle !pl-9"
                name="cityId"
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
              <span className="absolute left-3 bottom-0.5 -translate-y-1/4 aheadIcon before:bg-group-card-location before:bg-cover before:w-5 before:h-5"></span>
            </div>
          </div>

          {isGroup && (
            <div className="w-full">
              <h3 className={titleStyle}>日期</h3>
              <DatePickerInput value={date} setValue={setDate} />
            </div>
          )}

          <div className="w-full">
            <h3 className={titleStyle}>關鍵字</h3>
            {isGroup ? groupKeyWordInput : storeKeyWordInput}
          </div>

          <div>
            {isError && (
              <p className="mb-1 text-center text-sm text-danger font-semibold">
                請填入搜尋條件
              </p>
            )}
            <Button
              type="submit"
              appearance="black"
              rounded
              className="md:w-full"
            >
              <div className="flex justify-center items-center gap-2.5 whitespace-nowrap">
                <Image
                  src={globalIcons["search-white"].src}
                  alt={globalIcons["search-white"].alt}
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
                {submitBtnText}
              </div>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
