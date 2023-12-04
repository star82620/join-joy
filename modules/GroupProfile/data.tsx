import { MemberStatusType, StoreType } from "@/constants/globalTypes";

import {
  GroupStatusKeyType,
  GroupTagType,
} from "@/constants/types/groupDataType";

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

export type GameItemType = {
  gameName: string;
  gameId: string;
  gameType: number;
};

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
  store: StoreType | null;
  date: string;
  startTime: string;
  endTime: string;
  cost: string;
  totalMemberNum: number;
  games: GameItemType[];
  description: string;
  members: MemberType[];
  tags: GroupTagType[];
};

export type TagItemProps = {
  tag: string;
};

export type GameItemProps = {
  game: GameItemType;
};

export type StoreLocationProps = {
  store: StoreType | null;
};

// MemberList
export type MemberCardProps = { member: MemberType; subNum: number };

// GroupInfo
export type GroupInfoProps = {
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

export const defaultGroupData: GroupDataType = {
  groupName: "",
  groupStatus: "開團中",
  place: null,
  store: {
    storeId: 0,
    storeName: "",
    address: "",
  },
  date: "",
  startTime: "",
  endTime: "",
  cost: "",
  totalMemberNum: 0,
  games: [],
  description: "",
  members: [
    {
      userId: 0,
      userName: "",
      status: "leader",
      initNum: 0,
      profileImg: "",
    },
  ],
  tags: [],
};

export const defaultCommentData: CommentsDataItemType = {
  userId: 0,
  userName: "",
  userPhoto: "",
  commentContent: "",
  commentDate: "",
};
