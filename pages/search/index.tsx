import React, { useContext } from "react";
import SearchProvider, {
  SearchContext,
} from "@/common/contexts/SearchProvider";
import { defaultGroupsSearchKey } from "@/common/helpers/getApi/getSearchGroups";
import Image from "next/image";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import SearchResults from "@/modules/SearchResults";
import Layout from "@/common/components/Layout";
import TopSearchBar from "@/common/components/Layout/TopSearchBar";

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
