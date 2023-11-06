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

export type UserNavBarrProps = {
  navSet: NavSetType[];
  activeNav: NavIdType;
  openSubList: boolean;
  setIconImg: (nav: NavSetType, attr: SetIconAttrType) => string;
  toggleActiveNav: (nav: NavSetType) => void;
  toggleActiveSubNav: (subNav: SubItemType) => void;
};

// 獲取會員詳細資料
export const userDataKey: apiParamsType = {
  apiPath: "/member/memberDetails",
  method: "GET",
};
