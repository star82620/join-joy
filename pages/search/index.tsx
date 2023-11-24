import React, { useContext } from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import SearchResults from "@/modules/SearchResults";
import TopSearchBar from "@/common/components/Layout/TopSearchBar";
import SearchProvider, {
  SearchContext,
} from "@/common/contexts/SearchProvider";
import {
  defaultGroupsSearchKey,
  getSearchGroups,
} from "@/common/helpers/getApi/getSearchGroups";
import {
  defaultStoresSearchKey,
  getSearchStores,
} from "@/common/helpers/getApi/getSearchStores";

export function getServerSideProps(context: GetServerSidePropsContext) {
  // 根據在 landing page 得到的資料去搜尋
  // 做為進入畫面的第一個搜尋結果
  // 之後的搜尋都是在瀏覽器端進行的 api

  const searchValues = context.query;

  console.log("page", searchValues);

  // const searchStoreKey = {
  //   ...defaultGroupsSearchKey,
  //   joinppl: 1,
  //   page: 1,
  //   pageSize: 8,
  // };

  // nearbyGroupsData = await getSearchGroups(searchNearbyGroups);

  return { props: {} };
}

export default function SearchPage() {
  const searchContext = useContext(SearchContext);
  const { searchValues, setSearchValues, activeTab, setActiveTab } =
    searchContext;

  const isGroup = activeTab === "group";
  const isStore = activeTab === "store";

  console.log(searchValues);

  return (
    <SearchProvider>
      <Layout pageCategory="search">
        <TopSearchBar />
        <div className="pt-12 pb-[108px]">
          <SearchResults />
        </div>
      </Layout>
    </SearchProvider>
  );
}
