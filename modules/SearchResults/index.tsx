import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import FilterBlock from "./FilterBlock";
import GroupCard from "@/common/components/searchResultCard/GroupCard";
import StoreCard from "@/common/components/searchResultCard/StoreCard";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { groupFilterSet, storeFilterSet } from "./data";
import { groupSet, storeSet } from "@/constants/testData";

export default function SearchResults() {
  const searchContext = useContext(SearchContext);
  const {
    searchValues,
    setSearchValues,
    activeTab,
    setActiveTab,
    // searchResultsData,
    // setSearchResultsData,
  } = searchContext;

  const isGroup = activeTab === "group";

  console.log(searchValues);

  // 分頁設定
  const [activePage, setActivePage] = useState(1);

  const btnAppearance = true ? "white" : "white-gray";
  const pageBtnStyle = "text-gray-950 font-semibold";

  // 搜尋結果
  const [searchResultsData, setSearchResultsData] = useState([]);

  // 搜尋對象切換
  const filterSet = isGroup ? groupFilterSet : storeFilterSet;
  const titleText = isGroup
    ? "請選擇你有興趣的揪團加入！"
    : "請選擇你有興趣的店家查看！";

  const resultCountNum = searchResultsData.length;

  const resultCountDate = !!searchValues.startDate
    ? ` ${searchValues.startDate}`
    : null;

  const resultCountLocation = !!searchValues.cityId
    ? `在 ${searchValues.cityId}`
    : null;

  const resultCountTab = isGroup ? "揪團" : "店家";

  const resultCountGroupKeyword = !!searchValues.gameName
    ? searchValues.gameName
    : "無";
  const resultCountStoreKeyword = !!searchValues.storeName
    ? searchValues.storeName
    : "無";
  const resultCountKeyword = isGroup
    ? resultCountGroupKeyword
    : resultCountStoreKeyword;

  // 如果是 isGroup => 關鍵字看 gameName
  // 如果是 isStore => 關鍵字看 storeName
  // 如果關鍵字沒東西就寫 無

  return (
    <div className="container">
      <div>
        <h2>{titleText}</h2>
        <p className="mt-3 md:mt-1">
          找到 {resultCountNum} 個符合 {resultCountDate}
          {resultCountLocation} 的 {resultCountTab}
          （關鍵字：{resultCountKeyword}）
        </p>
        <div className="flex flex-wrap gap-3 md:gap-1 mt-6 md:mt-2">
          {filterSet.map((item) => {
            const { title, options } = item;
            return <FilterBlock key={title} title={title} options={options} />;
          })}
        </div>
      </div>
      <div className="mt-9 md:mt-4">
        {/* <div className="flex flex-wrap gap-x-4 gap-y-8 md:gap-3">
          {groupSet.map((group) => {
            return (
              <div
                key={group.groupId}
                className="w-full max-w-[280px] md:max-w-full"
              >
                <GroupCard data={group} />
              </div>
            );
          })}
        </div> */}

        <div className="flex gap-1 items-center w-fit m-auto mt-16 md:mt-8">
          {/* prev arrow */}
          <Button
            type="button"
            appearance="page-selector-arrow"
            rounded
            isDisabled
            className="!p-1"
          >
            <span className={pageBtnStyle}>
              <Image
                src={globalIcons["arrow-left"].src}
                alt={globalIcons["arrow-left"].alt}
                widthProp="w-6"
                heightProp="h-6"
              />
            </span>
          </Button>
          <Button
            type="button"
            appearance={btnAppearance}
            rounded
            className="!px-3 !py-1"
          >
            <span className={pageBtnStyle}>1</span>
          </Button>
          {/* back arrow */}
          <Button
            type="button"
            appearance="page-selector-arrow"
            rounded
            className="!p-1"
          >
            <span className={pageBtnStyle}>
              <Image
                src={globalIcons["arrow-right"].src}
                alt={globalIcons["arrow-right"].alt}
                widthProp="w-6"
                heightProp="h-6"
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
