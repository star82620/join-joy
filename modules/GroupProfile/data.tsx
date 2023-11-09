type IconKeyType =
  | "location"
  | "date"
  | "time"
  | "cost"
  | "totalMembers"
  | "games"
  | "description";

export type TitleItemType = {
  title: string;
  img: {
    src: string;
    alt: string;
  };
};

export type TitlesType = Record<IconKeyType, TitleItemType>;

export type TitleProps = { content: IconKeyType };

export type StoreType = { storeName: string; storeId: string; address: string };

export type GameItemType = {
  gameName: string;
  gameId: string;
  gameType: string;
};

export type MemberType = {
  userId: string;
  userName: string;
  status: "leader" | "member";
  initNum: number;
};

export type GroupDataType = {
  groupName: string;
  groupStatus: "opening" | "closed";
  place: string;
  store: StoreType;
  date: string;
  startTime: string;
  endTime: string;
  cost: string;
  totalMemberNum: number;
  games: GameItemType[];
  description: string;
  members: MemberType[];
  tags: Array<string>;
};

export type TagItemProps = {
  tag: string;
};

export type GameItemProps = {
  game: GameItemType;
};

export type StoreLocationProps = {
  store: StoreType;
};

export type MemberCardProps = { member: MemberType; subNum: number };

export type GroupInformationProps = {
  setApplyNum: (applyNum: number) => void;
  handleJoinSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

// ---data---

export const groupData: GroupDataType = {
  groupName: "輕鬆派對揪遊團",
  groupStatus: "opening",
  place: "NULL",
  store: {
    storeId: "s123",
    storeName: "六角學院桌遊店",
    address: "高雄市....56號",
  },
  date: "2023/10/02",
  startTime: "14:00",
  endTime: "20:00",
  cost: "NT$210 元 / 每人每小時",
  totalMemberNum: 12,
  games: [
    { gameId: "g114", gameName: "寶石獵人", gameType: "派對遊戲" },
    { gameId: "g129", gameName: "矮人礦坑", gameType: "陣營遊戲" },
    { gameId: "g512", gameName: "大富翁", gameType: "派對遊戲" },
  ],
  description:
    "不要遲到唷！！準時開桌，遊戲都會教學\n歡迎新手不要遲到唷！！準時開桌，遊戲都會教學\n歡迎新手不要遲到唷！！準時開桌，遊戲都會教學歡迎新手",
  members: [
    { userId: "a00012", userName: "多多", status: "leader", initNum: 2 },
    { userId: "a00019", userName: "皮卡秋", status: "member", initNum: 3 },
    { userId: "a00041", userName: "少少", status: "member", initNum: 4 },
    { userId: "a00033", userName: "巧虎", status: "member", initNum: 1 },
  ],
  tags: ["新手團", "經驗切磋"],
};

export const titles: TitlesType = {
  location: {
    title: "地點",
    img: {
      src: "/images/group-profile/icon-location.svg",
      alt: "icon-location",
    },
  },
  date: {
    title: "日期",
    img: {
      src: "/images/group-profile/icon-date.svg",
      alt: "icon-date",
    },
  },
  time: {
    title: "時間",
    img: {
      src: "/images/group-profile/icon-time.svg",
      alt: "icon-time",
    },
  },
  cost: {
    title: "收費",
    img: {
      src: "/images/group-profile/icon-cost.svg",
      alt: "icon-cost",
    },
  },
  totalMembers: {
    title: "預計揪團人數",
    img: {
      src: "/images/group-profile/icon-members.svg",
      alt: "icon-members",
    },
  },
  games: {
    title: "預計要玩的遊戲",
    img: {
      src: "/images/group-profile/icon-games.svg",
      alt: "icon-games",
    },
  },
  description: {
    title: "備註",
    img: {
      src: "/images/group-profile/icon-description.svg",
      alt: "icon-description",
    },
  },
};