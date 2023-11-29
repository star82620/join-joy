import { StoreDataType } from "@/constants/types/storeDataType";
import { CommentDataType } from "@/constants/types/commentDataType";
import { GroupDataType } from "@/constants/types/groupDataType";
import {
  AuthDataType,
  CitiesDataItemType,
  CitiesDataType,
} from "@/constants/globalTypes";
import { TabType } from "@/common/components/FileWrapper/data";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { MouseEventHandler, ReactNode } from "react";

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
  cardsData: GroupDataType[] | StoreDataType[];
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
