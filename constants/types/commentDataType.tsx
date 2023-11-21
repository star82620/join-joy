export type UserType = {
  userId: number;
  userName: string;
  profileImg: string | null;
};

export type GroupType = {
  groupName: string;
  groupDate: string;
  memberNum: number;
  storeId: number;
  storeName: string;
};

export type CommentDataType = {
  commentBy: UserType;
  group: GroupType;
  commentId: number;
  msg: string;
  commentDate: string;
  score: number;
};
