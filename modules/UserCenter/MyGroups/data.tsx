import { MyGroupsItemType, TabType } from "@/constants/globalTypes";

// GroupsList
export type BtnItemType = {
  text: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

export type GroupStatusKeyType =
  | "pending"
  | "member"
  | "opening"
  | "reserved"
  | "closed"
  | "cancel";

export type BtnTextType =
  | "pending"
  | "member"
  | "leader"
  | "closed"
  | "commented"
  | "cancel";

export type BtnSetType = Record<BtnTextType, BtnItemType>;

export type GroupListProps = {
  pageCategory: "leader" | "member";
};

// GroupItem
export type GroupItemProps = {
  group: MyGroupsItemType;
  isExpired: boolean;
  btnSet: BtnSetType;
};

// ----data----

// 列表篩選
export const tabs: TabType[] = [
  {
    tabId: "upcoming",
    text: "未開始",
  },
  {
    tabId: "expired",
    text: "已結束",
  },
];
