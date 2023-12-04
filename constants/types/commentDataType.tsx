export type AuthResType = {
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
  commentBy: AuthResType; //auth 的 AuthResType
  group: GroupType;
  commentId: number;
  msg: string;
  commentDate: string;
  score: number;
};
