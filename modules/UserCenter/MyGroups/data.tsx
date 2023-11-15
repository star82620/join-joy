import { TabType } from "@/constants/globalTypes";
import { GroupDataItemType } from "../date";

export type BtnItemType = {
  text: string;
  func?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled: boolean;
};

export type BtnSetType = Record<string, BtnItemType>;

export type GroupListProps = {
  category: "leader" | "member";
};

// GroupItem
export type GroupItemProps = {
  group: GroupDataItemType;
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
