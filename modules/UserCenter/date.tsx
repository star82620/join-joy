import { ReactNode } from "react";
import {
  MyGroupsItemType,
  GroupStatusType,
  TabType,
  UserProfileType,
} from "@/constants/globalTypes";

// page
export type ProfileDataType = UserProfileType;

export type GroupDataSetType = {
  member: MyGroupsItemType[];
  leader: MyGroupsItemType[];
};

export type UserCenterPageProps = {
  profileData: ProfileDataType[];
  groupsData: GroupDataSetType;
  groupRatingsSet: GroupRatingsType[];
};

export type DataContextType = UserCenterPageProps;

export type RatingContentType = {
  memberId: number;
  memberName: string;
  memberPhoto: string | null;
  isRated: boolean;
  score: number;
  comment: string | null;
};

export type GroupRatingItemType = {
  isAllRated: boolean;
  ratingStatus: RatingContentType[];
};

export type GroupRatingsType = {
  id: number;
  groupStatus: GroupStatusType;
  data: GroupRatingItemType;
};

// UserNavBar
export type SubItemIdType = "my-groups-leader" | "my-groups-member";

export type SubItemType = {
  id: SubItemIdType;
  text: string;
  component: ReactNode;
};

export type NavSetType = {
  id: "profile-setting" | "my-groups" | "my-following" | "my-notification";
  text: string;
  component?: ReactNode;
  subItem?: SubItemType[];
};

export type NavIdType = NavSetType["id"] | SubItemIdType;

export type ActiveNavIdType =
  | "profile-setting-active"
  | "my-groups-active"
  | "my-following-active"
  | "my-notification-active";

export type SetIconAttrType = "src" | "alt";

export type UserNavBarProps = {
  navSet: NavSetType[];
  activeNav: NavIdType;
  openSubList: boolean;
  setIconImg: (nav: NavSetType, attr: SetIconAttrType) => string;
  toggleActiveNav: (nav: NavSetType) => void;
  toggleActiveSubNav: (subNav: SubItemType) => void;
};

// TabSection
export type TabSectionProps = {
  tabs: TabType[];
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};

// ----data----

export const defaultProfileData: ProfileDataType = {
  userId: 0,
  nickName: "",
  email: "",
  description: "",
  games: [],
  cities: [],
};

export const defaultGroupsData: GroupDataSetType = {
  leader: [
    {
      groupId: 0,
      groupName: "",
      startTime: "",
      endTime: "",
      totalMemberNum: 0,
      currentPeople: 0,
      place: null,
      store: {
        storeId: 0,
        storeName: "",
        address: "",
      },
      memberStatus: "leader",
      groupStatus: "已結束",
    },
  ],
  member: [
    {
      groupId: 0,
      groupName: "",
      startTime: "",
      endTime: "",
      totalMemberNum: 0,
      currentPeople: 0,
      place: null,
      store: {
        storeId: 0,
        storeName: "",
        address: "",
      },
      memberStatus: "member",
      groupStatus: "已結束",
    },
  ],
};

export const defaultGroupRatingsSet: GroupRatingsType[] = [
  {
    id: 0,
    groupStatus: "已結束",
    data: {
      isAllRated: false,
      ratingStatus: [
        {
          memberId: 0,
          memberName: "",
          memberPhoto: null,
          isRated: false,
          score: 0,
          comment: null,
        },
      ],
    },
  },
];
