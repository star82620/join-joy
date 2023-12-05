import React, { ReactNode } from "react";
import { StoreInfoType } from "./types/apiTypes/store";

export type ImgAttrType = {
  src: string;
  alt: string;
};

export type ImgType = Record<string, ImgAttrType>;

export type TabType = {
  tabId: string;
  text: string;
};

// user profile
export type UserInfoType = {
  userId: number;
  nickName: string;
};

export type UserProfileType = UserInfoType & {
  email: string;
  description: string;
  games: Array<number>;
  cities: Array<number>;
};

// useAuth
export type AuthDataType = UserInfoType & {
  photo: string;
};

// SearchProvider
export type SearchProviderProps = { children: ReactNode };

export type SearchKeysType = {
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
