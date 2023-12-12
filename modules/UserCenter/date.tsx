import { ReactNode } from "react";
import { TabType, UserProfileType } from "@/constants/globalTypes";
import { GroupRatingStatusSetType } from "@/constants/types/apiTypes/comment";
import {
  MyGroupSetType,
  MyGroupItemType,
} from "@/constants/types/apiTypes/group";

// page
export type ProfileSettingPageProps = {
  profileData: UserProfileType;
};

export type MyGroupsLeaderPageProps = {
  groupSetData: MyGroupSetType;
  ratingStatusSet: GroupRatingStatusSetType[];
};

// Wrapper
export type WrapperProps = {
  children: ReactNode;
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

// ProfileSetting
export type ProfileSettingProps = {
  data: UserProfileType;
};

// GroupList
export type GroupListProps = {
  pageCategory: "leader" | "member";
  groupSetData: MyGroupSetType;
  ratingStatusSet: GroupRatingStatusSetType[];
};

// GroupItem
export type GroupItemProps = {
  group: MyGroupItemType;
  btnSet: BtnSetType;
  ratingStatusSet: GroupRatingStatusSetType[];
};

// GroupsList
export type BtnItemType = {
  text: string;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

export type GroupStatusKeyType =
  | "pending"
  | "member"
  | "opening"
  | "reserved"
  | "closed"
  | "cancel";

export type BtnTextType =
  | "pending"
  | "member"
  | "leader"
  | "closed"
  | "commented"
  | "cancel";

export type BtnSetType = Record<BtnTextType, BtnItemType>;

// ----data----

// GroupList 列表篩選
export const tabs: TabType[] = [
  {
    tabId: "upcoming",
    text: "未開始",
  },
  {
    tabId: "expired",
    text: "已結束",
  },
];

// export const defaultProfileData: ProfileDataType = {
//   userId: 0,
//   nickName: "",
//   email: "",
//   description: "",
//   games: [],
//   cities: [],
// };

export const defaultGroupsData: MyGroupSetType = [
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
];

// export const defaultGroupRatingsSet: GroupRatingsType[] = [
//   {
//     id: 0,
//     groupStatus: "已結束",
//     data: {
//       isAllRated: false,
//       ratingStatus: [
//         {
//           memberId: 0,
//           memberName: "",
//           memberPhoto: null,
//           isRated: false,
//           score: 0,
//           comment: null,
//         },
//       ],
//     },
//   },
// ];
