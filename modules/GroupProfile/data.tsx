// page
export type getStaticPropsProps = { params: Record<string, string> };

export type GroupType = { groupId: number; groupName: string };

export type GroupIdType = number;

export type CommentsDataItemType = {
  userId: number;
  userName: string;
  userPhoto: string;
  commentContent: string;
  commentDate: string;
};

export type GroupDataContextType = {
  groupId: GroupIdType;
  groupData: GroupDataType;
  currentMemberNum: number;
  commentsData: CommentsDataItemType[];
};

export type GroupProfilePageProps = {
  groupId: GroupIdType;
  groupData: GroupDataType;
  commentsData: CommentsDataItemType[];
};

export type GroupProfileProps = {
  data: GroupProfilePageProps;
};

export type CommentCardProps = {
  comment: CommentsDataItemType;
};

//

type IconKeyType =
  | "location"
  | "date"
  | "time"
  | "cost"
  | "totalMembers"
  | "games"
  | "description";

export type TitleItemType = {
  title: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TitlesType = Record<IconKeyType, TitleItemType>;

export type TitleProps = { content: IconKeyType };

export type StoreType = { storeName: string; storeId: string; address: string };

export type GameItemType = {
  gameName: string;
  gameId: string;
  gameType: number;
};

export type MemberType = {
  userId: string;
  userName: string;
  status: "leader" | "member";
  initNum: number;
};

export type GroupDataType = {
  groupName: string;
  groupStatus: "opening" | "closed";
  place: string;
  store: StoreType;
  date: string;
  startTime: string;
  endTime: string;
  cost: string;
  totalMemberNum: number;
  games: GameItemType[];
  description: string;
  members: MemberType[];
  tags: Array<string>;
};

export type TagItemProps = {
  tag: string;
};

export type GameItemProps = {
  game: GameItemType;
};

export type StoreLocationProps = {
  store: StoreType;
};

// MemberList
export type MemberCardProps = { member: MemberType; subNum: number };

// GroupInformation
export type GroupInformationProps = {
  setApplyNum: (applyNum: number) => void;
  handleJoinSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

// ---data---

export const titles: TitlesType = {
  location: {
    title: "地點",
    img: {
      src: "/images/group-profile/icon-location.svg",
      alt: "icon-location",
    },
  },
  date: {
    title: "日期",
    img: {
      src: "/images/group-profile/icon-date.svg",
      alt: "icon-date",
    },
  },
  time: {
    title: "時間",
    img: {
      src: "/images/group-profile/icon-time.svg",
      alt: "icon-time",
    },
  },
  cost: {
    title: "收費",
    img: {
      src: "/images/group-profile/icon-cost.svg",
      alt: "icon-cost",
    },
  },
  totalMembers: {
    title: "預計揪團人數",
    img: {
      src: "/images/group-profile/icon-members.svg",
      alt: "icon-members",
    },
  },
  games: {
    title: "預計要玩的遊戲",
    img: {
      src: "/images/group-profile/icon-games.svg",
      alt: "icon-games",
    },
  },
  description: {
    title: "備註",
    img: {
      src: "/images/group-profile/icon-description.svg",
      alt: "icon-description",
    },
  },
};
