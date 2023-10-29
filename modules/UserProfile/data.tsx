export const tabSet = [
  {
    tabName: "groups-list",
    tabText: "揪團清單",
    img: {
      src: "/images/icon-lists-light.svg",
      alt: "icon-lists",
    },
  },
  {
    tabName: "comments",
    tabText: "綜合評價",
    img: {
      src: "/images/icon-comments-light.svg",
      alt: "icon-comments",
    },
  },
];

export type userDataType = {
  userName: string; //會員名稱
  userImg: string; //頭像路徑
  description: string; //會員簡介
  districts: Array<string>;
  gameTypes: Array<string>;
};

export const userData: userDataType = {
  userName: "多多",
  userImg: "/images/photo-user-000.png",
  description:
    "嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（汪汪）嗨！大家好，我叫多多，歡迎找我揪團喔喔喔...",
  districts: ["台北市", "新北市", "基隆市"],
  gameTypes: ["派對遊戲", "陣營遊戲", "策略遊戲"],
};
