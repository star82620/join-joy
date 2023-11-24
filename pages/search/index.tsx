import React, { useContext } from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import SearchResults from "@/modules/SearchResults";
import TopSearchBar from "@/common/components/Layout/TopSearchBar";
import SearchProvider, {
  SearchContext,
} from "@/common/contexts/SearchProvider";
import {
  GroupsSearchKeyType,
  defaultGroupsSearchKey,
  getSearchGroups,
} from "@/common/helpers/getApi/getSearchGroups";
import {
  StoresSearchKeyType,
  defaultStoresSearchKey,
  getSearchStores,
} from "@/common/helpers/getApi/getSearchStores";
import { SearchResultsPageProps } from "@/modules/SearchResults/data";
import { getCitiesApi } from "@/common/helpers/getApi/getCitiesApi";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let defaultData = [];
  let defaultCount = 0;
  let citiesData = [];

  const searchKeys = context.query;

  console.log("page", searchKeys);

  const { tab, city, date, keyword } = searchKeys;

  const isGroup = tab === "group";
  const isStore = tab === "store";

  citiesData = await getCitiesApi();

  console.log(citiesData);

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

    const isEmptyResult = typeof GroupsData === "string";

    // if (!isEmptyResult) {
    //   defaultData = GroupsData.finalGroups;
    //   defaultCount = GroupsData.groupCount;
    // }
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

    // if (!isEmptyResult) {
    //   defaultData = StoreData.matchedStores;
    //   defaultCount = StoreData?.storeCount;
    // }
  }

  return { props: { defaultData, defaultCount } };
}

export default function SearchResultsPage({
  defaultData,
  defaultCount,
}: // citiesData,
SearchResultsPageProps) {
  console.log("OMD", defaultCount, defaultData);

  return (
    <SearchProvider>
      <Layout pageCategory="search">
        <SearchResults defaultData={defaultData} defaultCount={defaultCount} />
      </Layout>
    </SearchProvider>
  );
}
