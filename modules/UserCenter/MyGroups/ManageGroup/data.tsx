import { ReactNode } from "react";

// page
export type GroupStatusType = string;
// "開團中"|"已結束";

export type StoreType = {
  storeId: number;
  storeName: string;
  address: string;
};

export type GameItemType = {
  gameId: number;
  gameName: string;
  gameType: string;
};

export type MemberType = {
  userId: number;
  userName: string;
  status: "leader" | "member";
  initNum: number;
};

// 請洛陽換成 userId 跟上面共用
export type MemberDataItemType = {
  memberId: number;
  userName: string;
  status: "leader" | "member" | "pending";
  initNum: number;
};

export type MemberDataType = MemberDataItemType[];

export type GroupDataType = {
  groupName: string;
  groupStatus: GroupStatusType;
  place: string | null;
  store: StoreType | null;
  date: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  cost: string;
  description: string;
  isPrivate: boolean;
  games: GameItemType[] | [];
  members: MemberType[] | [];
  tags: Array<string> | [];
};

export type GroupDataContextType = {
  groupId: number;
  groupData: GroupDataType;
  memberData: MemberDataType;
};

export type GroupManagePageProps = GroupDataContextType;

// TitleBlock
export type TitleBlockProps = {
  title: string;
  children: ReactNode;
};

// ---data---

// page
export const defaultGroupsData: GroupDataType = {
  groupStatus: "pending",
  groupName: "",
  date: "",
  startTime: "",
  endTime: "",
  totalMemberNum: 0,
  description: "",
  place: null,
  store: {
    storeId: 0,
    storeName: "",
    address: "",
  },
  cost: "",
  isPrivate: false,
  games: [],
  members: [],
  tags: [],
};

export const defaultMemberData: MemberDataType = [
  {
    memberId: 0,
    userName: "",
    status: "pending",
    initNum: 0,
  },
];
