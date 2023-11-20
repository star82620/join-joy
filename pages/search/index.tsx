import React, { useContext } from "react";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { defaultGroupsSearchKey } from "@/common/helpers/getSearchApi/getSearchGroups";
import Image from "next/image";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

export default function SearchPage() {
  const searchContext = useContext(SearchContext);
  const { searchValues, setSearchValues, activeTab, setActiveTab } =
    searchContext;

  const isGroup = activeTab === "group";
  const isStore = activeTab === "store";

  console.log(searchValues);

  return (
    <div>
      <Image
        src="http://4.224.16.99/upload/profile/Member_6_20231111213427.jpg"
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
}
