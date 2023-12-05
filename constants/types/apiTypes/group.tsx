import { GroupStatusKeyType, GroupTagType } from "../groupDataType";
import { GamesInGroupType } from "./game";
import { StoreInfoType } from "./store";

// group
export type GroupStatusType = "已失效" | "已結束" | "開團中" | "已預約";

export type MemberStatusType = "pending" | "member" | "leader";

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
  groupStatus: GroupStatusKeyType;
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
  tags: GroupTagType[];
};
