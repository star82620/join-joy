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

// page
export const defaultCitiesData: CitiesDataType = [{ CityName: "", Id: 0 }];

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

export const defaultGroupsData: GroupDataType[] = [
  {
    groupId: 0,
    groupName: "",
    groupStatus: "開團中",
    place: "",
    isPrivate: false,
    store: null,
    date: "",
    startTime: "",
    endTime: "",
    totalMemberNum: 0,
    currentpeople: 0,
    isHomeGroup: false,
    games: [
      {
        gameName: "",
        gameType: 0,
      },
    ],

    leader: {
      userId: 0,
      userName: "",
      status: "member",
      initNum: 1,
      profileImg: "",
    },
    members: [],
    tags: [],
  },
];

export const defaultStoresData: StoreDataType[] = [
  {
    storeId: 0,
    storeName: "",
    address: "",
    profileImg: "",
    cover: "",
    openHours: "",
    score: 0,
    description: "",
    tags: [],
    hqTag: true,
    popTag: true,
  },
];

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
