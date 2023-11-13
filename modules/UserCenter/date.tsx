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

export type StatusType = "pending" | "member" | "leader";

export type GroupsDataType = {
  groupId: number;
  groupName: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  currentPeople: number;
  place: string | null;
  store: StoreType;
  status: StatusType;
};

export type UserCenterPageProps = {
  profileData: ProfileDataType;
  groupsData: GroupsDataType;
};

export type DataContextType = {
  profileData: ProfileDataType[];
  groupsData: GroupsDataType[];
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
