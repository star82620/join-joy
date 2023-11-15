import { MouseEventHandler, ReactNode } from "react";

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
  tags: Array<string> | [];
};

export type GamesDataItemType = {
  gameId: number;
  gametype: string;
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
    gametype: "",
    gameName: "",
    version: "",
    peopleNum: "",
    qtu: 0,
  },
];
