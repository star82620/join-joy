import { SearchProviderProps, SearchKeysType } from "@/constants/globalTypes";
import { GroupDataType } from "@/constants/types/groupDataType";
import { StoreDataType } from "@/constants/types/storeDataType";
import { useState, createContext, Children } from "react";

export const defaultSearchKeys: SearchKeysType = {
  cityId: 0,
  page: 1,
  pageSize: 0,

  // group
  startDate: "",
  gameName: "",
  groupFilter: 0,
  groupTag: 0,
  groupppl: 0,
  joinppl: 0,

  //store
  storeName: "",
  storeFilter: 0,
  storeTag: 0,
};

export const defaultSearchContext = {
  activeTab: "group",
  setActiveTab: (activeTab: string) => {},
  searchKeys: defaultSearchKeys,
  setSearchKeys: (searchKeys: SearchKeysType) => {},
  searchResultsData: [] as StoreDataType[] | GroupDataType[],
  setSearchResultsData: (
    searchResultsData: StoreDataType[] | GroupDataType[]
  ) => {},
  totalCount: 0,
  setTotalCount: (totalCount: number) => {},
};

export const SearchContext = createContext(defaultSearchContext);

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchKeys, setSearchKeys] =
    useState<SearchKeysType>(defaultSearchKeys);
  const [activeTab, setActiveTab] = useState<string>("group");
  const [searchResultsData, setSearchResultsData] = useState<
    StoreDataType[] | GroupDataType[]
  >([]);
  const [totalCount, setTotalCount] = useState(0);

  const dataSet = {
    activeTab,
    setActiveTab,
    searchKeys,
    setSearchKeys,
    searchResultsData,
    setSearchResultsData,
    totalCount,
    setTotalCount,
  };

  console.log("searchResultsData", searchResultsData);

  return (
    <SearchContext.Provider value={dataSet}>{children}</SearchContext.Provider>
  );
}
