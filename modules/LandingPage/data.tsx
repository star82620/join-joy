import { MouseEventHandler, ReactNode } from "react";
import { StoreDataType } from "@/constants/types/storeDataType";
import { CommentDataType } from "@/constants/types/commentDataType";
import { GroupDataType } from "@/constants/types/groupDataType";
import {
  CitiesDataItemType,
  CitiesDataType,
} from "@/constants/types/apiTypes/city";

// page
export type DefaultDataContextType = {
  citiesData: CitiesDataType;
  commentsData: CommentDataType[];
  nearbyGroupsData: GroupDataType[];
  remainingGroupsData: GroupDataType[];
  preferenceData: GroupDataType[];
  newestData: GroupDataType[];
  nearbyStoresData: StoreDataType[];
  nearbyCity: CitiesDataItemType;
};

export type HomeProps = DefaultDataContextType;

// CardsSectionProps
export type CardsSectionProps = {
  layout: "swipe" | "block";
  cardCategory: "group" | "store";
  title: string;
  subTitle?: string;
  handleSeeMore?: MouseEventHandler<HTMLButtonElement>;
  cardsData: GroupDataType[] | StoreDataType[] | string;
};

// CommentCard
export type CommentCardProps = {
  data: CommentDataType;
};

// ----data----

// page default data
export const defaultCityData: CitiesDataItemType = { Id: 0, CityName: "" };

export const defaultCitiesData: CitiesDataType = [defaultCityData];

export const defaultCommentsData: CommentDataType[] = [
  {
    commentBy: {
      userId: 0,
      userName: "",
      profileImg: "",
    },
    group: {
      groupName: "",
      groupDate: "",
      memberNum: 0,
      storeId: 0,
      storeName: "",
    },
    commentId: 0,
    msg: "",
    commentDate: "",
    score: 0,
  },
];
