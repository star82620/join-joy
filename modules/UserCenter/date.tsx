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

export type tabIdType = "upcoming" | "over";

export type tabType = {
  tabId: tabIdType;
  text: string;
};

export type TabSectionProps = {
  tabs: tabType[];
  activeTab: tabIdType;
  setActiveTab: (activeTab: tabIdType) => void;
};

// ----data----

export const tabs: tabType[] = [
  {
    tabId: "upcoming",
    text: "未開始",
  },
  {
    tabId: "over",
    text: "已結束",
  },
];

// 獲取會員詳細資料
export const userDataKey: apiParamsType = {
  apiPath: "/member/memberDetails",
  method: "GET",
};

export const groupsData = [
  {
    groupId: 7,
    groupName: "測試修改團",
    startTime: "2023-11-03T09:25:40.657",
    endTime: "2023-11-03T09:25:40.657",
    totalMemberNum: 8,
    currentNum: 5,
    description: "測試測試",
    place: "NULL",
    store: {
      storeId: "5",
      storeName: "六角桌遊店",
      address: "1111111111",
    },
    status: "member",
    commented: false,
    createDate: "2023-11-04T15:28:16.497",
  },
  {
    groupId: 71,
    groupName: "鳩鳩軍團：重策動腦咕咕咕",
    startTime: "2023-11-03T09:25:40.657",
    endTime: "2023-11-03T09:25:40.657",
    totalMemberNum: 12,
    currentNum: 3,
    description: "測試測試",
    place: "NULL",
    store: {
      storeId: "56",
      storeName: "天邊一隻鳩桌遊店",
      address: "粗粗樹左邊樹洞",
    },
    status: "member",
    commented: true,
    createDate: "2023-11-04T15:28:16.497",
  },
  {
    groupId: 61,
    groupName: "鳩鳩軍團：重策動腦咕咕咕",
    startTime: "2023-11-09T09:25:40.657",
    endTime: "2023-11-09T09:25:40.657",
    totalMemberNum: 12,
    currentNum: 3,
    description: "測試測試",
    place: "NULL",
    store: {
      storeId: "56",
      storeName: "天邊一隻鳩桌遊店",
      address: "粗粗樹左邊樹洞",
    },
    status: "member",
    commented: false,
    createDate: "2023-11-04T15:28:16.497",
  },
  {
    groupId: 1,
    groupName: "鳩鳩軍團：重策動腦咕咕咕",
    startTime: "2023-11-09T09:25:40.657",
    endTime: "2023-11-09T09:25:40.657",
    totalMemberNum: 12,
    currentNum: 3,
    description: "測試測試",
    place: "NULL",
    store: {
      storeId: "56",
      storeName: "天邊一隻鳩桌遊店",
      address: "粗粗樹左邊樹洞",
    },
    status: "pending",
    commented: false,
    createDate: "2023-11-04T15:28:16.497",
  },
];
