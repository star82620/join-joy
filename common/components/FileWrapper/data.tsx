import { ReactNode } from "react";

//有增加的就 ＆ 擴展進來
export type TabNameType = string;

export type ImgType = {
  src: string;
  alt: string;
};

export type TabType = {
  tabName: TabNameType;
  tabText: string;
  img: ImgType;
};

export type TabSetType = Array<TabType>;

export type ReturnComponentType = Record<string, ReactNode>;

type SetActiveTabType = (activeTab: TabNameType) => void;

export type TabBlockProps = {
  tab: TabType;
  zIndex: number;
  isActive: boolean;
  setActiveTab: SetActiveTabType;
  activeColor?: string;
};

export type TabsSectionProps = {
  tabSet: TabType[];
  activeTab: TabNameType;
  setActiveTab: SetActiveTabType;
};

export type FileWrapperProps = TabsSectionProps & {
  children: ReactNode;
};
