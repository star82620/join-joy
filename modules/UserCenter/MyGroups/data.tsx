import { TabType } from "@/constants/globalTypes";
import { GroupsDataType } from "../date";

export type ActionBtnType = {
  text: string;
  func?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled: boolean;
};

export type ActionBtnsType = Record<string, ActionBtnType>;

export type GroupListProps = {
  pageStatus: "leader" | "member";
};

export type GroupItemProps = {
  group: GroupsDataType;
  isExpired: boolean;
  actionBtns: ActionBtnsType;
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
