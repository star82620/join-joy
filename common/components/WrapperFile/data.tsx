import { ReactNode } from "react";
import { UserTabNameType } from "@/modules/UserProfile/data";
import { StoreTabNameType } from "@/modules/StoreProfile/data";

//有增加的就 ＆ 擴展進來
type TabNameType = UserTabNameType | StoreTabNameType;

export type SetActiveTabType = (activeTab: TabNameType) => void;

export type ImgType = {
  src: string;
  alt: string;
};

export type TabType = {
  tabName: TabNameType;
  tabText: string;
  img: ImgType;
};

export type TabBlockProps = {
  tab: TabType;
  zIndex: number;
  isActive: boolean;
  setActiveTab: SetActiveTabType;
};

export type TabsSectionProps = {
  tabSet: TabType[];
  activeTab: TabNameType;
  setActiveTab: SetActiveTabType;
};

export type WrapperFileProps = TabsSectionProps & {
  children: ReactNode;
};
