import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

// iconsPackage
export type IconsPackageType = Record<string, ImgType>;

type IconIdType =
  | "my-following"
  | "my-following-active"
  | "my-groups"
  | "my-groups-active"
  | "profile-setting"
  | "profile-setting-active"
  | "my-notification"
  | "my-notification-active"
  | "logout"
  | "sub-closing"
  | "sub-opening";

export type UserNavIconsType = Record<IconIdType, ImgType>;

// defaultImages
export type DefaultImagesType = Record<string, ImgType>;

export type IconsType = Record<string, ImgType>;

// game
export type GameType = {
  gameId: number;
  gameType: string;
  gameName: string;
  version: string;
  peopleNum: string;
  qtu: number;
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
  store: StoreType | null;
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

// 所有的城市列表
export type CitiesDataItemType = {
  Id: number;
  CityName: string;
};

export type CitiesDataType = CitiesDataItemType[];

// store
export type StoreDataType = {
  storeId: number;
  storeName: string;
  address: string;
  profileImg: string;
  cover: string | null;
  score: number;
  tag: {
    wifiTag: boolean;
    teachTag: boolean;
    meal: boolean;
    mealout: boolean;
    buffet: boolean;
    hqTag: boolean;
    popTag: boolean;
  };
};

// game
export type GameDataType = {
  gameId: number;
  gameType: string;
  gameName: string;
  version: string;
  peopleNum: string;
  qtu: number;
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
