// 來自搜尋揪團 API

export type GroupStatusKeyType = "已結束" | "已失效" | "已預約" | "開團中";

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

export type MemberItemType = {
  userId: number;
  userName: string;
  profileImg: string | null;
  status: MemberStatusType;
  initNum: number;
};
// export type GroupMemberType = { AuthResType & {status: MemberStatusType; initNum: number; }

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
  groupStatus: GroupStatusKeyType;
  isPrivate: boolean;
  isHomeGroup: boolean;
  store: StoreType | null;
  date: string;
  startTime: string;
  endTime: string;
  games: GameType[];
  leader: MemberItemType;
  members: MemberItemType[];
  tags: GroupTagType[];
  currentpeople: number;
  totalMemberNum: number;
};
