// 來自搜尋揪團 API

import { GroupStatusKeyType } from "../groupStatusSet";

export type StoreType = {
  storeId: number;
  storeName: string;
  address: string;
};

export type GameType = {
  gameName: string;
  gameType: number;
};

export type MemberStatusType = "leader" | "member" | "pending";

export type UserType = {
  userId: number;
  userName: string;
  status: MemberStatusType;
  initNum: number;
  profileImg: null;
};

export type GroupTagType =
  | "新手團"
  | "老手團"
  | "經驗切磋"
  | "不限定"
  | "教學團"
  | "輕鬆"
  | "競技";

export type GroupDataType = {
  groupId: number;
  groupName: string;
  place: string | null;
  groupStatus: GroupStatusKeyType; // 之後要改成定義好的
  isPrivate: boolean;
  isHomeGroup: boolean;
  store: StoreType | null;
  date: string;
  startTime: string;
  endTime: string;
  games: GameType[];
  leader: UserType;
  members: UserType[];
  tags: GroupTagType[];
  currentpeople: number;
  totalMemberNum: number;
};
