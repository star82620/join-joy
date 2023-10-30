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
  target: ReactNode;
};

export type TabSetType = Array<TabType>;

type SetActiveTabType = (activeTab: TabNameType) => void;

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
