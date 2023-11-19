import { useState, useEffect, createContext, Children, ReactNode } from "react";
import fetchApi from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

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

export const defaulteSearchValues: SearchValuesType = {
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

export const defaultSearchContext = {
  searchValues: defaulteSearchValues,
  setSearchValues: (value: SearchValuesType) => {},
};

export const SearchContext = createContext(defaultSearchContext);

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchValues, setSearchValues] =
    useState<SearchValuesType>(defaulteSearchValues);

  return (
    <SearchContext.Provider value={{ searchValues, setSearchValues }}>
      {children}
    </SearchContext.Provider>
  );
}

// {
//   "cityId": 0,
//   "startDate": "2023-11-19T13:55:07.403Z",
//   "gameName": "string",
//   "groupFilter": 0,
//   "groupTag": 0,
//   "groupppl": 0,
//   "joinppl": 0,
//   "page": 0,
//   "pageSize": 0
// },
// {
//   "cityId": 0,
//   "storeName": "string",
//   "storeFilter": 0,
//   "storeTag": 0,
//   "page": 0,
//   "pageSize": 0
// }
