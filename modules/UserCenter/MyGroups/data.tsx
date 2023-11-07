export type StatusType = "pending" | "member" | "leader";

export type storeType = { storeId: number; storeName: string; address: string };

export type groupsDataType = {
  groupId: number;
  groupName: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  currentNum: number;
  description: string;
  place: string | "NULL";
  store: storeType | "NULL";
  status: StatusType;
  commented: boolean;
  createDate: string;
};

// ----data----

// 列表篩選
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
