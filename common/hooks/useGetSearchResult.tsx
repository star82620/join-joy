import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  GroupsSearchKeyType,
  defaultGroupsSearchKey,
  getSearchGroups,
} from "../helpers/getApi/getSearchGroups";
import {
  StoresSearchKeyType,
  defaultStoresSearchKey,
  getSearchStores,
} from "../helpers/getApi/getSearchStores";
import { SearchContext } from "../contexts/SearchProvider";

export function useGetSearchResult() {
  const router = useRouter();
  const searchContext = useContext(SearchContext);

  const {
    searchResultsData,
    setSearchResultsData,
    totalCount,
    setTotalCount,
    searchKeys,
  } = searchContext;

  const querySearchKeys = router.query;

  const { tab, city, date, keyword } = querySearchKeys;

  const isGroup = tab === "group";
  const isStore = tab === "store";

  const getSearchResult = async () => {
    if (isGroup) {
      const cityIdKey = city ? Number(city) : 0;
      const startDateKey = date ? date.toString() : "";
      const gameNameKey = keyword ? keyword.toString() : "";

      const searchGroupKey: GroupsSearchKeyType = {
        ...defaultGroupsSearchKey,
        cityId: cityIdKey,
        startDate: startDateKey,
        gameName: gameNameKey,
        groupFilter: searchKeys.groupFilter, //最相關...
        groupTag: searchKeys.groupTag, //遊戲面向
        groupppl: searchKeys.groupppl, //揪團總人數
        joinppl: searchKeys.joinppl,
        page: searchKeys.page || 1,
        pageSize: searchKeys.pageSize || 16,
      };

      const GroupsData = await getSearchGroups(searchGroupKey, "haveCount");

      const isEmptyResult = typeof GroupsData === "string";

      if (isEmptyResult) return;
      setSearchResultsData(GroupsData.finalGroups);
      setTotalCount(GroupsData.groupCount);
    }

    if (isStore) {
      const cityIdKey = city ? Number(city) : 0;

      const storeNameKey = keyword ? keyword.toString() : "";

      const searchStoresKey: StoresSearchKeyType = {
        ...defaultStoresSearchKey,
        cityId: cityIdKey,
        storeName: storeNameKey,
        page: 1,
        pageSize: 9,
      };

      const StoreData = await getSearchStores(searchStoresKey, "haveCount");

      const isEmptyResult = typeof StoreData === "string";

      if (isEmptyResult) return;

      setSearchResultsData(StoreData.matchedStores);
      setTotalCount(StoreData?.storeCount);
    }
  };

  return getSearchResult;
  // useEffect(() => {
  //   getSearchResult();
  // }, [querySearchKeys]);
}
