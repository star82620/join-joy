import React, { ReactNode } from "react";
import { StoreInfoType } from "./types/apiTypes/store";

export type ImgType = {
  src: string;
  alt: string;
};

export type ImgSetType = Record<string, ImgType>;

export type TabType = {
  tabId: string;
  text: string;
};

export type TitleItemType = {
  title: string;
  img: ImgType;
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
  // group
  startDate: string;
  gameName: string;
  // store
  storeName: string;
};

export type FilterKeysType = {
  page: number;
  pageSize: number;

  // group
  groupFilter: number;
  groupTag: number;
  groupppl: number;
  joinppl: number;

  // store
  storeFilter: number;
  storeTag: number;
};

export type IndexContentType = {
  text: string;
  style: string;
};
