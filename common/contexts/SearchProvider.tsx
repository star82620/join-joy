import { useState, createContext, Children, ReactNode } from "react";

export type SearchProviderProps = { children: ReactNode };

export type SearchValuesType = {
  cityId: number;
  page: number;
  pageSize: number;

  // group
  startDate: string;
  gameName: string;
  groupFilter: number;
  groupTag: number;
  groupppl: number;
  joinppl: number;

  // store
  storeName: string;
  storeFilter: number;
  storeTag: number;
};

export const defaultSearchValues: SearchValuesType = {
  cityId: 0,
  page: 0,
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

type SearchTabContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export const defaultSearchContext = {
  searchValues: defaultSearchValues,
  setSearchValues: (value: SearchValuesType) => {},
  activeTab: "group",
  setActiveTab: (activeTab: string) => {},
};

export const SearchContext = createContext(defaultSearchContext);

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchValues, setSearchValues] =
    useState<SearchValuesType>(defaultSearchValues);
  const [activeTab, setActiveTab] = useState<string>("group");

  const dataSet = { searchValues, setSearchValues, activeTab, setActiveTab };

  return (
    <SearchContext.Provider value={dataSet}>{children}</SearchContext.Provider>
  );
}
