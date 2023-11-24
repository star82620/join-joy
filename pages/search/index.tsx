import React, { useContext } from "react";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { defaultGroupsSearchKey } from "@/common/helpers/getApi/getSearchGroups";
import Image from "next/image";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import SearchResults from "@/modules/SearchResults";

export default function SearchPage() {
  const searchContext = useContext(SearchContext);
  const { searchValues, setSearchValues, activeTab, setActiveTab } =
    searchContext;

  const isGroup = activeTab === "group";
  const isStore = activeTab === "store";

  console.log(searchValues);

  return (
    <div>
      <SearchResults />
    </div>
  );
}
