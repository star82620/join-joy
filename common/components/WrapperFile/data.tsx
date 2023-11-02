import { ReactNode } from "react";
import { UserTabNameType } from "@/modules/UserProfile/data";
import { StoreTabNameType } from "@/modules/StoreProfile/data";

// export type TabNameType = UserTabNameType | StoreTabNameType;

export type TabNameType = string;

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

export type ReturnComponentType = Record<string, ReactNode>;
