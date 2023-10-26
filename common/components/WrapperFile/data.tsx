export type ImgType = {
  src: string;
  alt: string;
};

export type TabType = {
  tabName: string;
  tabText: string;
  img: ImgType;
};

export type TabBlockProps = {
  tab: TabType;
  zIndex: number;
  isActive: boolean;
};

export type WrapperFileProps = {
  tabSet: TabType[];
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};
