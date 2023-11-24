import React, { useContext, useEffect, useState } from "react";

import { SearchContext } from "@/common/contexts/SearchProvider";
import { SearchResultsProps, groupFilterSet, storeFilterSet } from "./data";
import { groupSet, storeSet } from "@/constants/testData";
import ResultsSection from "./ResultsSection";
import ResultsHeader from "./ResultsHeader";
import EmptyResults from "./EmptyResults";

export default function SearchResults({
  defaultData,
  defaultCount,
  citiesData,
}: SearchResultsProps) {
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

  console.log("KKK", searchKeys);

  // 將預設資料填入
  useEffect(() => {
    setTotalCount(defaultCount);
    setSearchResultsData(defaultData);
  }, []);

  const isGroup = activeTab === "group";
  const isEmptyResult = searchResultsData.length === 0;

  return (
    <div className="container">
      <ResultsHeader />
      {!isEmptyResult ? <ResultsSection /> : <EmptyResults />}
    </div>
  );
}
