import React, { useContext, useState } from "react";
import FilterBlock from "./FilterBlock";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { useRouter } from "next/router";
import { useGetAllCitiesData } from "@/common/hooks/useGetAllCitiesData";
import { FilterSetType, groupFilterSet, storeFilterSet } from "./data";

export default function ResultsHeader() {
  const searchContext = useContext(SearchContext);
  const {
    searchKeys,
    setSearchKeys,
    activeTab,
    setActiveTab,
    searchResultsData,
    setSearchResultsData,
    totalCount,
    setTotalCount,
  } = searchContext;

  const allCitiesData = useGetAllCitiesData();

  const router = useRouter();
  const queryKey = router.query;
  const { tab, city, keyword } = queryKey;

  const isGroup = tab === "group";

  // 搜尋對象切換
  const filterSet = isGroup ? groupFilterSet : storeFilterSet;
  const titleText = isGroup
    ? "請選擇你有興趣的揪團加入！"
    : "請選擇你有興趣的店家查看！";

  const resultCountDate = !!searchKeys.startDate
    ? ` ${searchKeys.startDate}`
    : null;

  // 抓 query 的 city 如果 city 不是 undefined 就 回傳 不然就 null

  const resultCountLocation = city
    ? `在 ${allCitiesData?.[Number(city) - 1]?.CityName}`
    : null;

  const resultCountTab = isGroup ? "揪團" : "店家";

  const resultCountGroupKeyword = !!searchKeys.gameName
    ? searchKeys.gameName
    : "無";

  const resultCountStoreKeyword = !!searchKeys.storeName
    ? searchKeys.storeName
    : "無";

  const resultCountKeyword = isGroup
    ? resultCountGroupKeyword
    : resultCountStoreKeyword;
  return (
    <div>
      <h2>{titleText}</h2>
      <p className="mt-3 md:mt-1">
        找到 {totalCount} 個符合 {resultCountDate}
        {city && resultCountLocation} 的 {resultCountTab}
        （關鍵字：{resultCountKeyword}）
      </p>
      <div className="flex flex-wrap gap-3 md:gap-1 mt-6 md:mt-2 flex-s">
        {filterSet.map((item) => {
          const { title, options, inputName } = item;
          return (
            <FilterBlock
              key={title}
              title={title}
              inputName={inputName}
              options={options}
            />
          );
        })}
      </div>
    </div>
  );
}
