export type CommentItemDataType = {
  userId: number;
  userName: string;
  userPhoto: string;
  commentContent: string;
  commentDate: string;
};

export type CommentSetDataType = CommentItemDataType[];

// 取得店家的評價
// [TBD] 之後改 nickName 就可以用 Auth 裡的
export type AuthResType = {
  userId: number;
  userName: string;
  profileImg: string | null;
};

export type GroupOfCommentType = {
  groupName: string;
  groupDate: string;
  memberNum: number;
  storeId: number;
  storeName: string;
};

export type CommentItemOfStoreDataType = {
  commentBy: AuthResType;
  group: GroupOfCommentType;
  commentId: number;
  msg: string;
  commentDate: string;
  score: number;
};

export type CommentSetOfStoreDataType = CommentItemOfStoreDataType[];

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
