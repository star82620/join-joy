import { TitleItemType } from "@/constants/globalTypes";
import { GameInGroupNameType } from "@/constants/types/apiTypes/game";
import { GroupDataType } from "@/constants/types/apiTypes/group";
import { StoreInfoType } from "@/constants/types/apiTypes/store";
import { MemberType } from "../UserCenter/GroupManagement/data";
import { ChangeEventHandler, MouseEventHandler } from "react";
import {
  CommentItemDataType,
  CommentSetDataType,
} from "@/constants/types/apiTypes/comment";

// page
export type getStaticPropsProps = { params: Record<string, string> };

export type GroupIdType = number;

export type GroupDataContextType = {
  groupId: GroupIdType;
  groupData: GroupDataType;
  currentMemberNum: number;
  commentsData: CommentSetDataType;
};

export type GroupProfilePageProps = {
  groupId: GroupIdType;
  groupData: GroupDataType;
  commentsData: CommentSetDataType;
};

export type GroupProfileProps = {
  data: GroupProfilePageProps;
};

export type CommentCardProps = {
  comment: CommentItemDataType;
};

// Title

type IconKeyType =
  | "location"
  | "date"
  | "time"
  | "cost"
  | "totalMembers"
  | "games"
  | "description";

export type TitlesType = Record<IconKeyType, TitleItemType>;

export type TitleProps = { content: IconKeyType };

export type TagItemProps = {
  tag: string;
};

export type GameItemProps = {
  game: GameInGroupNameType;
};

export type StoreLocationProps = {
  store: StoreInfoType | null;
};

// MemberList
export type MemberCardProps = { member: MemberType; subNum: number };

// GroupInfo
export type GroupInfoProps = {
  setApplyNum: (applyNum: number) => void;
  handleJoinSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

// CommentsBoard
export type CommentTextAreaProps = {
  textLength: number;
  commentValue: string;
  handleInputValue: ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmitComment: MouseEventHandler<HTMLFormElement>;
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

// page
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

export const defaultCommentData: CommentItemDataType = {
  userId: 0,
  userName: "",
  userPhoto: "",
  commentContent: "",
  commentDate: "",
};
