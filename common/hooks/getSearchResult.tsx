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
  const { searchResultsData, setSearchResultsData, totalCount, setTotalCount } =
    searchContext;

  const querySearchKeys = router.query;

  console.log("querySearchKeys", querySearchKeys);

  const { tab, city, date, keyword } = querySearchKeys;

  const isGroup = tab === "group";
  const isStore = tab === "store";

  const getSearchResult = async () => {
    if (isGroup) {
      console.log("揪團");
      const cityIdKey = city ? Number(city) : 0;
      const startDateKey = date ? date.toString() : "";
      const gameNameKey = keyword ? keyword.toString() : "";

      console.log("defaultGroupsSearchKey", defaultGroupsSearchKey);

      const searchGroupKey: GroupsSearchKeyType = {
        ...defaultGroupsSearchKey,
        cityId: cityIdKey,
        startDate: startDateKey,
        gameName: gameNameKey,
        joinppl: 0,
        page: 1,
        pageSize: 16,
      };

      console.log("searchGroupKey", searchGroupKey);

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

  useEffect(() => {
    console.log("有動");
    getSearchResult();
    console.log("有動杷");
  }, [querySearchKeys]);
}
