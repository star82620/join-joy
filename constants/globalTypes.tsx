import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

export type StoreType = {
  storeId: number;
  storeName: string;
  address: string;
};

export type TabType = {
  tabId: string;
  text: string;
};

// group
export type StatusType =
  | "pending"
  | "member"
  | "leader"
  | "已失效"
  | "已結束"
  | "開團中"
  | "已預約";

// 取得我的所有揪團紀錄API的資料，沒有 isPrivate
export type MyGroupsItemType = {
  groupId: number;
  groupName: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  currentPeople: number;
  place: string | null;
  store: StoreType | null;
  status: StatusType;
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

// AuthProvider
export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthDataType = UserInfoType & {
  photo: string;
};

export type AuthContextType = {
  authData: AuthDataType | null;
  setAuthData: React.Dispatch<React.SetStateAction<AuthDataType | null>>;
};
