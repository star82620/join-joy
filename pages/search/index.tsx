import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import SearchResults from "@/modules/SearchResults";
import SearchProvider from "@/common/contexts/SearchProvider";
import {
  defaultGroupsSearchKey,
  getSearchGroups,
} from "@/common/helpers/getApi/search/getSearchGroups";
import {
  defaultStoresSearchKey,
  getSearchStores,
} from "@/common/helpers/getApi/search/getSearchStores";
import { GroupsSearchKeyType } from "@/constants/types/apiTypes/group";
import { StoresSearchKeyType } from "@/constants/types/apiTypes/store";
import { SearchResultsPageProps } from "@/modules/SearchResults/data";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let defaultData = [];
  let defaultCount = 0;

  const searchKeys = context.query;

  const { tab, city, date, keyword } = searchKeys;

  const isGroup = tab === "group";
  const isStore = tab === "store";

  if (isGroup) {
    const cityIdKey = city ? Number(city) : 0;
    const startDateKey = date ? date.toString() : "";
    const gameNameKey = keyword ? keyword.toString() : "";

    const searchGroupKey: GroupsSearchKeyType = {
      ...defaultGroupsSearchKey,
      cityId: cityIdKey,
      startDate: startDateKey,
      gameName: gameNameKey,
      joinppl: 0,
      page: 1,
      pageSize: 16,
    };

    const GroupsData = await getSearchGroups(searchGroupKey, "haveCount");

    const isEmptyResult = GroupsData.length === 0;

    if (!isEmptyResult) {
      defaultData = GroupsData.finalGroups;
      defaultCount = GroupsData.groupCount;
    }
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

    const isEmptyResult = StoreData.length === 0;

    if (!isEmptyResult) {
      defaultData = StoreData.matchedStores;
      defaultCount = StoreData?.storeCount;
    }
  }

  return { props: { defaultData, defaultCount } };
}

export default function SearchResultsPage({
  defaultData,
  defaultCount,
}: SearchResultsPageProps) {
  return (
    <SearchProvider>
      <Layout pageCategory="search-result">
        <SearchResults defaultData={defaultData} defaultCount={defaultCount} />
      </Layout>
    </SearchProvider>
  );
}
