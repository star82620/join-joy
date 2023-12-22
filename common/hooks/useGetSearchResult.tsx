import { useContext } from "react";
import { useRouter } from "next/router";
import {
  defaultGroupsSearchKey,
  getSearchGroups,
} from "../helpers/getApi/search/getSearchGroups";
import {
  defaultStoresSearchKey,
  getSearchStores,
} from "../helpers/getApi/search/getSearchStores";
import { GroupsSearchKeyType } from "@/constants/types/apiTypes/group";
import { StoresSearchKeyType } from "@/pages/api/search/searchStores";
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
    filterKeys,
  } = searchContext;

  const queryKeys = router.query;

  const { tab, city, date, keyword } = queryKeys;

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
        groupFilter: filterKeys.groupFilter, //最相關...
        groupTag: filterKeys.groupTag, //遊戲面向
        groupppl: filterKeys.groupppl, //揪團總人數
        joinppl: filterKeys.joinppl,
        page: filterKeys.page || 1,
        pageSize: filterKeys.pageSize || 16,
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
        page: filterKeys.page || 1,
        pageSize: filterKeys.pageSize || 9,
      };

      const StoreData = await getSearchStores(searchStoresKey, "haveCount");

      const isEmptyResult = typeof StoreData === "string";

      if (isEmptyResult) return;

      setSearchResultsData(StoreData.matchedStores);
      setTotalCount(StoreData?.storeCount);
    }
  };

  return getSearchResult;
}
