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
import { TabType } from "@/common/components/FileWrapper/data";
import {
  SearchContext,
  defaultSearchValues,
} from "@/common/contexts/SearchProvider";
import { GetDataContext } from "@/pages";

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

export default function SearchBar() {
  const searchContext = useContext(SearchContext);
  const getDataContext = useContext(GetDataContext);

  const { searchValues, setSearchValues } = searchContext;
  const { citiesData } = getDataContext;

  const [activeTab, setActiveTab] = useState("group");

  const isGroup = activeTab === "group";

  const btnText = isGroup ? "搜出揪團" : "搜出店家";
  const titleStyle = "text-lg md:text-md";

  // 儲存 input value
  const setSelectValue: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const inputName = e.target.name;
    const isCityId = inputName === "cityId";
    const value = isCityId ? Number(e.target.value) : e.target.value;

    setSearchValues({ ...searchValues, [inputName]: value });
  };

  // 儲存 input value
  const setInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setSearchValues({ ...searchValues, [inputName]: value });
  };

  // 送出搜尋
  const submitSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("searchValues", searchValues);
    // 要跳到搜尋頁
  };

  useEffect(() => {
    setSearchValues(defaultSearchValues);
  }, [activeTab]);

  const groupKeyWordInput = (
    <input
      type="text"
      className="inputStyle"
      placeholder="輸入你想找的遊戲"
      name="gameName"
      value={searchValues.gameName}
      onChange={setInputValue}
    />
  );

  const storeKeyWordInput = (
    <input
      type="text"
      className="inputStyle"
      placeholder="輸入你想找的店家"
      name="storeName"
      value={searchValues.storeName}
      onChange={setInputValue}
    />
  );

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
                value={searchValues.cityId}
                onChange={setSelectValue}
              >
                <option value="">選擇城市</option>
                {citiesData.map((city) => (
                  <option key={city.Id} value={city.Id}>
                    {city.CityName}
                  </option>
                ))}
              </select>
              <span className="absolute left-3 bottom-0.5 -translate-y-1/4 aheadIcon before:bg-group-location before:bg-cover before:w-5 before:h-5"></span>
            </div>
          </div>

          {isGroup && (
            <div className="w-full">
              <h3 className={titleStyle}>日期</h3>
              <div className="relative">
                <select
                  className="inputStyle !pl-10"
                  name="startDate"
                  value={searchValues.startDate}
                  onChange={setSelectValue}
                >
                  <option value="">選擇遊玩的日期</option>
                </select>
                <span className="absolute left-3 -bottom-[1px] -translate-y-1/4 aheadIcon  before:bg-search-date before:w-6 before:h-6 before:md:w-5 before:md:h-5"></span>
              </div>
            </div>
          )}

          <div className="w-full">
            <h3 className={titleStyle}>關鍵字</h3>
            {isGroup ? groupKeyWordInput : storeKeyWordInput}
          </div>
          <Button
            type="submit"
            appearance="black"
            rounded
            className="md:w-full"
          >
            <div className="flex justify-center items-center gap-2.5 whitespace-nowrap">
              <Image
                src={globalIcons["search-white"]}
                alt="search"
                widthProp="w-6 md:w-5"
                heightProp="h-6 md:h-5"
              />
              {btnText}
            </div>
          </Button>
        </form>
      </div>
    </section>
  );
}
