import React, { MouseEventHandler, useContext, useEffect } from "react";
import { SearchContext } from "@/common/contexts/SearchProvider";
import GroupCard from "@/common/components/searchResultCard/GroupCard";
import StoreCard from "@/common/components/searchResultCard/StoreCard";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";

import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import { useRouter } from "next/router";
import { useGetSearchResult } from "@/common/hooks/useGetSearchResult";

export default function ResultsSection({}) {
  const router = useRouter();
  const getSearchResult = useGetSearchResult();
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

  const queryKeys = router.query;

  const isGroup = queryKeys.tab === "group";
  const isStore = queryKeys.tab === "store";
  const isEmptyResult = searchResultsData.length === 0;

  // 分頁設定
  const pageBtnStyle = "text-gray-950 font-semibold";
  const perPage = isGroup ? 16 : 9;
  const pageNum = Math.ceil(totalCount / perPage);

  const setTurnPage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const pageNum = Number(e.currentTarget.value);
    setSearchKeys({ ...searchKeys, page: pageNum });
  };

  // // 搜尋
  useEffect(() => {
    getSearchResult();
  }, [
    queryKeys,
    searchKeys.groupFilter,
    searchKeys.groupTag,
    searchKeys.groupppl,
    searchKeys.joinppl,
    searchKeys.storeFilter,
    searchKeys.storeTag,
  ]);

  return (
    <div className="mt-9 md:mt-4">
      <div className="flex flex-wrap gap-x-4 gap-y-8 md:gap-3">
        {searchResultsData.map((item) => {
          const isGroupData = "groupId" in item;
          const isStoreData = "storeId" in item;
          const cardWidth = isGroup
            ? "max-w-[280px] min-w-[280px]"
            : "min-w-[376px] max-w-[376px]";

          return (
            <div
              key={isGroupData ? item.groupId : item.storeId}
              className={`w-full ${cardWidth} md:max-w-full`}
            >
              {isGroupData && <GroupCard data={item} />}
              {isStoreData && <StoreCard data={item} />}
            </div>
          );
        })}
      </div>

      {/* 分頁 */}
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
        {[...Array(pageNum)].map((_, index) => {
          const num = (index + 1).toString();
          const isActivePage = searchKeys.page === index + 1;
          const btnAppearance = isActivePage ? "orange" : "white-gray";

          return (
            <Button
              key={num}
              type="button"
              appearance={btnAppearance}
              rounded
              className="!px-3 !py-1"
              value={num}
              onClick={setTurnPage}
            >
              <span className={pageBtnStyle}>{num}</span>
            </Button>
          );
        })}
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
  );
}
