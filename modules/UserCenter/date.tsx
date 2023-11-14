import { ReactNode } from "react";
import { apiParamsType } from "@/common/helpers/fetchApi";
import { StoreType, TabType } from "@/constants/globalTypes";

// page
export type ProfileDataType = {
  userId: number;
  nickName: string;
  email: string;
  description: string;
  games: Array<number>;
  cities: Array<number>;
};

export type StatusType =
  | "pending"
  | "member"
  | "leader"
  | "已失效"
  | "已結束"
  | "開團中"
  | "已預約";

export type GroupDataItemType = {
  groupId: number;
  groupName: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  currentPeople: number;
  place: string | null;
  store: StoreType | null;
  status: StatusType;
};

export type GroupDataType = {
  member: GroupDataItemType[];
  leader: GroupDataItemType[];
};

export type UserCenterPageProps = DataContextType;

export type DataContextType = {
  profileData: ProfileDataType[];
  groupsData: GroupDataType;
  groupRatingsSet: GroupRatingsType[];
};

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

export const defaultGroupsData: GroupDataType = {
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
      status: "member",
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
      status: "member",
    },
  ],
};

export const defaultGroupRatingsSet: GroupRatingsType = {
  id: 0,
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
};
