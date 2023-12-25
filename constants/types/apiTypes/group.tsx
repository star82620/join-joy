import { IndexContentType } from "@/constants/globalTypes";
import { GameItemType, GamesInGroupType } from "./game";
import { StoreInfoType } from "./store";

// group
export type GroupStatusType = "已失效" | "已結束" | "開團中" | "已預約";

export type MemberStatusType = "pending" | "member" | "leader";

// 我的揪團列表
export type MyGroupStatusKeyType =
  | "pending"
  | "member"
  | "closed"
  | "opening"
  | "reserved"
  | "cancel";

export type MyGroupStatusSetType = Record<
  MyGroupStatusKeyType,
  IndexContentType
>;

export type GroupStatusSetType = Record<GroupStatusType, IndexContentType>;

// 取得我的所有揪團紀錄API的資料，沒有 isPrivate
export type MyGroupItemType = {
  groupId: number;
  groupName: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  currentPeople: number;
  place: string | null;
  store: StoreInfoType | null;
  memberStatus: MemberStatusType;
  groupStatus: GroupStatusType;
};

export type MyGroupSetType = MyGroupItemType[];

// GroupTagSelector
export type GroupTagIdType =
  | "beginnerTag"
  | "expertTag"
  | "practiceTag"
  | "openTag"
  | "tutorialTag"
  | "casualTag"
  | "competitiveTag";

export type GroupTagItemType = {
  id: GroupTagIdType;
  text: string;
};

export type GroupTagSetType = GroupTagItemType[];

export type GroupTagTextType =
  | "新手團"
  | "老手團"
  | "經驗切磋"
  | "不限定"
  | "教學團"
  | "輕鬆"
  | "競技";

// group details
export type MemberType = {
  userId: number;
  userName: string;
  status: MemberStatusType;
  initNum: number;
  profileImg: string;
};

export type GroupDataType = {
  groupName: string;
  groupStatus: GroupStatusType;
  place: string | null;
  store: StoreInfoType | null;
  date: string;
  startTime: string;
  endTime: string;
  cost: string;
  totalMemberNum: number;
  games: GamesInGroupType;
  description: string;
  members: MemberType[];
  tags: GroupTagTextType[];
};

// search groups
export type SearchedGroupItemDataType = {
  groupId: number;
  groupName: string;
  place: string | null;
  groupStatus: GroupStatusType;
  isPrivate: boolean;
  isHomeGroup: boolean;
  store: StoreInfoType | null;
  date: string;
  startTime: string;
  endTime: string;
  games: GameItemType[];
  leader: MemberType;
  members: MemberType[];
  tags: GroupTagTextType[];
  currentpeople: number;
  totalMemberNum: number;
};

export type GroupsSearchKeyType = {
  cityId: number;
  startDate: string;
  gameName: string;
  groupFilter: number;
  groupTag: number;
  groupppl: number;
  joinppl: number;
  page: number;
  pageSize: number;
};
