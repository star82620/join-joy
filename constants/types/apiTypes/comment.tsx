export type CommentItemDataType = {
  userId: number;
  userName: string;
  userPhoto: string;
  commentContent: string;
  commentDate: string;
};

export type CommentSetDataType = CommentItemDataType[];

// rating
export type StoreRatingDetailIdType =
  | "groupId"
  | "clean"
  | "service"
  | "variety"
  | "value";

export type StoreRatingDetailItemType = {
  id: StoreRatingDetailIdType;
  text: string;
};

export type StoreRatingDetailSetType = StoreRatingDetailItemType[];

// 送出店家評價資料
export type StoreRatingValuesType = {
  groupId: number;
  clean: number;
  service: number;
  variety: number;
  value: number;
  // overall: number;
  comment: string;
};

// get rating member
export type MemberRatingStatusItemType = {
  memberId: number;
  memberName: string;
  memberPhoto: string;
  isRated: boolean;
  score: number;
  comment: string | null;
  status: "member" | "leader";
};

export type MemberRatingStatusSetType = MemberRatingStatusItemType[];

// res
export type MemberRatingDataType = {
  isAllRated: boolean;
  ratingStatus: MemberRatingStatusSetType;
};

// request
export type MemberRatingValuesItemType = {
  groupId: number;
  memberId: number;
  score: number;
  comment: string;
};

export type MemberRatingValuesType = Record<number, MemberRatingValuesItemType>;

// 取得評價的團資料
export type GroupOfRatingDataType = {
  storeId: number;
  storeName: string;
  address: string;
  date: string;
  startTime: string;
  endTime: string;
  photo: string;
};
