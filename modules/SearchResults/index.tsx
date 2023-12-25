import React, { useContext, useEffect } from "react";
import { SearchContext } from "@/common/contexts/SearchProvider";
import ResultsSection from "./ResultsSection";
import ResultsHeader from "./ResultsHeader";
import { SearchResultsProps } from "./data";

export default function SearchResults({
  defaultData,
  defaultCount,
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

  // 將預設資料填入
  useEffect(() => {
    setTotalCount(defaultCount);
    setSearchResultsData(defaultData);
  }, []);

  return (
    <div className="container pt-12 pb-[108px]">
      <ResultsHeader />
      <ResultsSection />
    </div>
  );
}
