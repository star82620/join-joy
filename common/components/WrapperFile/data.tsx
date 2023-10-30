import { ReactNode } from "react";
import { UserTabNameType } from "@/modules/UserProfile/data";

//有增加的就 ＆ 擴展進來
type TabNameType = UserTabNameType;

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
