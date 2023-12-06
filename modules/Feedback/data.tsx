import {
  MemberRatingDataType,
  MemberRatingStatusSetType,
  MemberRatingValuesType,
  GroupOfRatingDataType,
  StoreRatingValuesType,
  StoreRatingDetailIdType,
} from "@/constants/types/apiTypes/comment";

import { MouseEventHandler, SetStateAction } from "react";

// Page

export type FeedbackPageProps = {
  id: string;
  groupData: GroupOfRatingDataType;
  memberRatingData: MemberRatingDataType;
};

// Feedback
export type FeedbackProps = {
  groupId: FeedbackPageProps["id"];
  groupData: GroupOfRatingDataType;
  memberRatingData: MemberRatingDataType;
};

export type feedbackStepType = "member" | "store";

// RatingStore

export type RatingStoreProps = {
  groupId: number;
  groupData: GroupOfRatingDataType;
  step: feedbackStepType;
  setStep: React.Dispatch<SetStateAction<feedbackStepType>>;
  storeValues: StoreRatingValuesType;
  setStoreValues: React.Dispatch<SetStateAction<StoreRatingValuesType>>;
};

// RatingMember
export type RatingMemberProps = {
  groupId: number;
  membersData: MemberRatingStatusSetType;
  step: feedbackStepType;
  setStep: React.Dispatch<SetStateAction<feedbackStepType>>;
  memberValues: MemberRatingValuesType;
  setMemberValues: React.Dispatch<SetStateAction<MemberRatingValuesType>>;
};

export type RatingSelectorProps = {
  ratingName: StoreRatingDetailIdType | string | number;
  scoreValue: number;
  handleScoreValue: MouseEventHandler<HTMLElement>;
};

export type StepType = "store" | "member";

// RatingMember
export type MemberBlockProps = {
  status: "member" | "leader";
  userName: string;
  userId: number;
  profileImg: string;
};

// ---data---

export const defaultStoreValues: StoreRatingValuesType = {
  groupId: 0,
  clean: 0,
  service: 0,
  variety: 0,
  value: 0,
  // overall: 0,
  comment: "",
};

export const defaultMemberValues: MemberRatingValuesType = {
  0: {
    groupId: 0,
    memberId: 0,
    score: 0,
    comment: "",
  },
};
