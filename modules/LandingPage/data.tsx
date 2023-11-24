import { StoreDataType } from "@/constants/types/storeDataType";
import { CommentDataType } from "@/constants/types/commentDataType";
import { GroupDataType } from "@/constants/types/groupDataType";
import { CitiesDataType } from "@/constants/globalTypes";
import { TabType } from "@/common/components/FileWrapper/data";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";

// page
export type HomeProps = {
  citiesData: CitiesDataType;
  commentsData: CommentDataType[];
  nearbyGroupsData: GroupDataType[];
  remainingGroupsData: GroupDataType[];
  preferenceData: GroupDataType[];
  nearbyStoresData: StoreDataType[];
};

// CardsSectionProps
export type CardsSectionProps = {
  layout: "swipe" | "block";
  cardCategory: "group" | "store";
  title: string;
  moreHref: string;
  cardsData: GroupDataType[] | StoreDataType[];
};

// CommentCard
export type CommentCardProps = {
  data: CommentDataType;
};

// ----data----

// SearchBar
export const tabs: TabType[] = [
  {
    tabName: "group",
    tabText: "找揪團",
    img: {
      src: globalIcons["search-group-light"].src,
      alt: globalIcons["search-group-light"].alt,
    },
  },
  {
    tabName: "store",
    tabText: "找店家",
    img: {
      src: globalIcons["search-store-light"].src,
      alt: globalIcons["search-store-light"].alt,
    },
  },
];

// page default data
export const defaultCitiesData: CitiesDataType = [{ Id: 0, CityName: "" }];

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
