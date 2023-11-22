import { GroupTagIdType, ImgType } from "@/constants/globalTypes";
import { GroupStatusKeyType } from "@/constants/groupStatusSet";
import { groupProfileTitles } from "@/constants/iconsPackage/groupCardIcons";
import { MouseEventHandler, ReactNode } from "react";

// page
export type GroupStatusType = GroupStatusKeyType;

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
  profileImg: string;
  status: "leader" | "member" | "pending";
  initNum: number;
};

export type MembersDataType = MemberType[];

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
  tags: string[] | [];
};

export type GamesDataItemType = {
  gameId: number;
  gameType: string;
  gameName: string;
  version: string;
  peopleNum: string;
  qtu: number;
};

export type GamesDataType = GamesDataItemType[];

export type GroupDataContextType = {
  groupId: number;
  groupData: GroupDataType;
  membersData: MembersDataType;
  gamesData: GamesDataType;
};

export type GroupManagePageProps = GroupDataContextType;

// TitleBlock
export type TitleBlockProps = {
  title: string;
  children: ReactNode;
};

// MemberCard
export type MemberCardProps = {
  category: "pending" | "member";
  member: MemberType;
  groupId: number;
};

export type MemberCardBtnsType = {
  pending: MemberCardBtnsItemType[];
  member: MemberCardBtnsItemType[];
};

export type MemberCardBtnsItemType = {
  text: "拒絕" | "接受" | "缺席" | "出席";
  appearance: "white" | "black";
  handler: MouseEventHandler;
};

// ReserveInfo
export type StoreLocationProps = {
  storeData: GroupDataType["store"];
};

// ---data---

// ReserveInfo

export const groupTitleSet: Record<string, string> = {
  location: "地點",
  date: "日期",
  time: "時間",
  cost: "收費",
  totalMembers: "預計揪團人數",
  games: "預計要玩的遊戲",
  description: "備註",
};

// page
export const defaultGroupsData: GroupDataType = {
  groupStatus: "已結束",
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

export const defaultMembersData: MembersDataType = [
  {
    userId: 0,
    userName: "",
    status: "pending",
    initNum: 0,
    profileImg: "",
  },
];

export const defaultGamesData: GamesDataType = [
  {
    gameId: 0,
    gameType: "",
    gameName: "",
    version: "",
    peopleNum: "",
    qtu: 0,
  },
];
