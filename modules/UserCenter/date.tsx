import { ReactNode } from "react";
import { apiParamsType } from "@/common/helpers/fetchApi";

export type SubItemIdType = "my-groups-leader" | "my-groups-member";

export type SubItemType = {
  id: SubItemIdType;
  text: string;
  component: ReactNode;
};

export type NavSetType = {
  id: "profile-setting" | "my-groups" | "my-following" | "my-notification";
  text: string;
  component?: ReactNode;
  subItem?: SubItemType[];
};

export type NavIdType = NavSetType["id"] | SubItemIdType;
export type ActiveNavIdType =
  | "profile-setting-active"
  | "my-groups-active"
  | "my-following-active"
  | "my-notification-active";

export type SetIconAttrType = "src" | "alt";

export type UserNavBarProps = {
  navSet: NavSetType[];
  activeNav: NavIdType;
  openSubList: boolean;
  setIconImg: (nav: NavSetType, attr: SetIconAttrType) => string;
  toggleActiveNav: (nav: NavSetType) => void;
  toggleActiveSubNav: (subNav: SubItemType) => void;
};

// POST
export type ValueType = {
  nickName: string;
  description: string;
  games: Array<number>;
  cities: Array<number>;
};

// GET
export type UserDataType = ValueType & {
  userId: number;
  email: string;
};

export type GameType = {
  Id: number;
  TypeName: string;
};

// 獲取會員詳細資料
export const userDataKey: apiParamsType = {
  apiPath: "/member/memberDetails",
  method: "GET",
};

// 獲取所有遊戲種類
export const gameTypeKey: apiParamsType = {
  apiPath: "/member/gameType",
  method: "GET",
};
