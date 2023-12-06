import { MouseEventHandler, ReactNode } from "react";

import { GroupDataType } from "@/constants/types/groupDataType";
import {
  CitiesDataItemType,
  CitiesDataType,
} from "@/constants/types/apiTypes/city";
import {
  CommentItemOfStoreDataType,
  CommentSetOfStoreDataType,
} from "@/constants/types/apiTypes/comment";
import { StoreSetDataType } from "@/constants/types/apiTypes/store";

// page
export type DefaultDataContextType = {
  citiesData: CitiesDataType;
  commentsData: CommentSetOfStoreDataType;
  nearbyGroupsData: GroupDataType[];
  remainingGroupsData: GroupDataType[];
  preferenceData: GroupDataType[];
  newestData: GroupDataType[];
  nearbyStoresData: StoreSetDataType;
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
  cardsData: GroupDataType[] | StoreSetDataType | string;
};

// CommentCard
export type CommentCardProps = {
  data: CommentItemOfStoreDataType;
};

// ----data----

// page default data
export const defaultCityData: CitiesDataItemType = { Id: 0, CityName: "" };

export const defaultCitiesData: CitiesDataType = [defaultCityData];

export const defaultCommentsData: CommentSetOfStoreDataType = [
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
