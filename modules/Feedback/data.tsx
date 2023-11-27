import { MouseEventHandler, SetStateAction } from "react";

// Page
export type FeedbackPageProps = {
  id: string;
};

// Feedback
export type FeedbackProps = {
  groupId: FeedbackPageProps["id"];
};

//

export type RatingNameType =
  | "groupId"
  | "clean"
  | "service"
  | "variety"
  | "value";

export type StoreValuesType = {
  groupId: number;
  clean: number;
  service: number;
  variety: number;
  value: number;
  comment: string;
};

export type RatingItemSetType = {
  title: string;
  ratingName: RatingNameType;
};

export type RatingSelectorProps = {
  ratingName: RatingNameType | string | number;
  scoreValue: number;
  handleScoreValue: MouseEventHandler<HTMLElement>;
};

export type MemberValuesItemType = {
  groupId: number;
  memberId: number;
  score: number;
  comment: string;
};

export type MemberValuesType = Record<string, MemberValuesItemType>;

export type StepType = "store" | "member";

// RatingMember
export type MemberBlockProps = {
  status: "member" | "leader";
  userName: string;
  userId: number;
  profileImg: string;
};

export type MemberDataItemType = {
  memberId: number;
  memberName: string;
  memberPhoto: string;
  isRated: boolean;
  score: number;
  comment: string | null;
  status: "member" | "leader";
};

// ---data---

export const defaultStoreValues: StoreValuesType = {
  groupId: 0,
  clean: 0,
  service: 0,
  variety: 0,
  value: 0,
  comment: "",
};

export const RatingItemSet: RatingItemSetType[] = [
  { ratingName: "clean", title: "環境舒適" },
  { ratingName: "service", title: "服務態度" },
  { ratingName: "variety", title: "遊戲多樣性" },
  { ratingName: "value", title: "性價比" },
  // { ratingName: "all", title: "整體" },
];

export const defaultMemberValues: MemberValuesType = {
  0: {
    groupId: 0,
    memberId: 0,
    score: 0,
    comment: "",
  },
};

// RatingMember
