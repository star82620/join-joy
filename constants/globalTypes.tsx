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

// group
export type GroupStatusType = "已失效" | "已結束" | "開團中" | "已預約";

export type MemberStatusType = "pending" | "member" | "leader";

// 取得我的所有揪團紀錄API的資料，沒有 isPrivate
export type MyGroupsItemType = {
  groupId: number;
  groupName: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  currentPeople: number;
  place: string | null;
  store: StoreInfoType | null;
  memberStatus: MemberStatusType;
  groupStatus: GroupStatusType;
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

// GroupTagSelector
export type GroupTagIdType =
  | "beginnerTag"
  | "expertTag"
  | "practiceTag"
  | "openTag"
  | "tutorialTag"
  | "casualTag"
  | "competitiveTag";

export type GroupTagItemType = { id: GroupTagIdType; text: string };

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
