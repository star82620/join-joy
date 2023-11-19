// CardsSectionProps
export type CardsSectionProps = {
  layout: "swipe" | "block";
  cardCategory: "group" | "store";
  title: string;
  moreHref: string;
  cardsData: [];
};

// ----data----

export const groupSet = [
  {
    groupId: 18,
    groupName: "咕咕咕咕",
    groupStatus: "已預約",
    place: null,
    isPrivate: false,
    store: {
      storeId: 7,
      storeName: "天邊一隻鳩桌遊店",
      address: "彎粗粗樹左邊樹洞",
    },
    date: "2023/12/01",
    startTime: "14:00",
    endTime: "17:00",
    cost: "NT$35 元 / 每人每小時",
    totalMemberNum: 5,
    games: [
      {
        gameId: 3,
        gameName: "獨家暗語",
        gameType: 2,
      },
      {
        gameId: 10,
        gameName: "璀璨寶石",
        gameType: 10,
      },
    ],
    description: "咕咕咕咕",
    leader: {
      userId: 6,
      userName: "乃胖胖胖",
      status: "leader",
      initNum: 2,
      profileImg:
        "http://4.224.16.99/upload/profile/Member_6_20231111213427.jpg",
    },
    members: [
      {
        userId: 8,
        userName: "黑柴老大",
        status: "member",
        initNum: 2,
        profileImg: null,
      },
      {
        userId: 81,
        userName: "阿鳩鳩",
        status: "member",
        initNum: 3,
        profileImg: "/images/photo-user-demo.png",
      },
    ],
    tags: ["新手團", "教學團"],
  },
  {
    groupId: 28,
    groupName: "鳩鳩軍團：邊吃邊動腦咕咕咕",
    groupStatus: "開團中",
    place: "蒼鷺家西邊那棵樹上的果實店",
    isPrivate: false,
    store: null,
    date: "2023/12/01",
    startTime: "12:00",
    endTime: "14:00",
    cost: "",
    totalMemberNum: 2,
    games: [
      {
        gameId: 5,
        gameName: "阿瓦隆",
        gameType: 3,
      },
      {
        gameId: 7,
        gameName: "BANG!西部槍戰",
        gameType: 3,
      },
    ],
    description: "ffff",
    leader: {
      userId: 81,
      userName: "阿鳩鳩",
      status: "member",
      initNum: 1,
      profileImg: "/images/photo-user-demo.png",
    },
    members: [],
    tags: [],
  },
  {
    groupId: 58,
    groupName: "鳩鳩軍團：重策動腦咕咕咕",
    groupStatus: "開團中",
    place: null,
    isPrivate: false,
    store: {
      storeId: 7,
      storeName: "天邊一隻鳩桌遊店",
      address: "彎粗粗樹左邊樹洞",
    },
    date: "2023/12/01",
    startTime: "12:00",
    endTime: "14:00",
    cost: "NT$35 元 / 每人每小時",
    totalMemberNum: 6,
    games: [
      {
        gameId: 5,
        gameName: "阿瓦隆",
        gameType: 3,
      },
      {
        gameId: 7,
        gameName: "BANG!西部槍戰",
        gameType: 3,
      },
    ],
    description: "ffff",
    leader: {
      userId: 6,
      userName: "乃胖胖胖",
      status: "leader",
      initNum: 2,
      profileImg:
        "http://4.224.16.99/upload/profile/Member_6_20231111213427.jpg",
    },
    members: [
      {
        userId: 81,
        userName: "阿鳩鳩",
        status: "member",
        initNum: 3,
        profileImg: "/images/photo-user-demo.png",
      },
    ],
    tags: ["不限定"],
  },
  {
    groupId: 22,
    groupName: "咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕咕",
    groupStatus: "開團中",
    place: null,
    isPrivate: false,
    store: {
      storeId: 7,
      storeName: "六角學院桌遊店",
      address: "高雄市民生一路56號2雄市民生一路56號2雄市民生一路56號2樓",
    },
    date: "2023/12/01",
    startTime: "12:00",
    endTime: "14:00",
    cost: "NT$35 元 / 每人每小時",
    totalMemberNum: 6,
    games: [
      {
        gameId: 5,
        gameName: "阿瓦隆",
        gameType: 3,
      },
      {
        gameId: 7,
        gameName: "BANG!西部槍戰",
        gameType: 3,
      },
    ],
    description: "ffff",
    leader: {
      userId: 6,
      userName: "乃胖胖胖",
      status: "leader",
      initNum: 2,
      profileImg:
        "http://4.224.16.99/upload/profile/Member_6_20231111213427.jpg",
    },
    members: [
      {
        userId: 81,
        userName: "阿鳩鳩",
        status: "member",
        initNum: 3,
        profileImg: "/images/photo-user-demo.png",
      },
    ],
    tags: ["老手團", "教學團", "不限定", "競技", "經驗切磋"],
  },
];

export const storeSet = [
  {
    storeId: 3,
    storeName: "進來就要咕咕咕的店",
    address: "彎粗粗樹右邊樹洞",
    profileImg: "/images/photo-user-demo.png",
    cover: "/images/photo-store-demo.png",
    openHours: "12:00 - 20:00",
    score: 10,
    description: "看到店名了嗎？現在你可以開始了。",
    tags: ["wifiTag", "teachTag", "meal", "mealout", "buffet"],
    hqTag: true,
    popTag: true,
  },
  {
    storeId: 7,
    storeName: "六角學院桌遊店店店店店店店",
    address:
      "高雄市民生一路56號2樓雄市民生一路56號2雄市民生一路56號2雄市民生一路56號2",
    profileImg: "http://4.224.16.99/upload/store/Store_7_20231111205949.png",
    cover: null,
    openHours: "12:00 - 20:00",
    score: 4.9375,
    tags: ["wifiTag"],
  },
  {
    storeId: 37,
    storeName: "六角學院桌遊店店店店店店店",
    address:
      "高雄市民生一路56號2樓雄市民生一路56號2雄市民生一路56號2雄市民生一路56號2",
    profileImg: "/images/logo.jpg",
    cover: "/images/logo-joinjoy.png",
    openHours: "12:00 - 20:00",
    score: 4.9375,
    tags: ["wifiTag"],
  },
];
