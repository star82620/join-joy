import { ReactNode } from "react";

export type UserTabNameType = "groups-list" | "comments";

export type userDataType = {
  userName: string;
  profileImg: string;
  description: string;
  cities: Array<string>;
  gameTypes: Array<string>;
};

// export type ActiveTabType = string;

type TabType = {
  tabName: UserTabNameType;
  tabText: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TabSetType = Array<TabType>;

export type ReturnComponentType = Record<UserTabNameType, ReactNode>;

// ---data----

export const userData: userDataType = {
  userName: "多多",
  profileImg: "/images/photo-user-000.png",
  description:
    "嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（汪汪）嗨！大家好，我叫多多，歡迎找我揪團喔喔喔...",
  cities: ["台北市", "新北市", "基隆市"],
  gameTypes: ["派對遊戲", "陣營遊戲", "策略遊戲"],
};

export const tabSet: TabSetType = [
  {
    tabName: "groups-list",
    tabText: "揪團清單",
    img: {
      src: "/images/icon-lists-light.svg",
      alt: "icon-lists-light",
    },
  },
  {
    tabName: "comments",
    tabText: "綜合評價",
    img: {
      src: "/images/icon-comments-light.svg",
      alt: "icon-comments-light",
    },
  },
];
