import { TabType } from "@/common/components/WrapperFile/data";
import { CommentsDataType } from "@/common/components/CommentsSection/data";

export type StoreTabNameType = "schedule" | "games" | "comments";

export type activeTabType = StoreTabNameType;

type StoreDataType = {
  storeName: string;
  profileImg: string;
  address: string;
  // map: ???;
  openingHours: string;
  phoneNum: string;
  cost: string; //這個欄位有點問題，每個店家的收費方式不同，可能有的是小時計價、上限多少...也有可能不同，如果之後要能夠在填表單時自動計算就會有比較複雜的狀況
  highlights: Array<string>; //["免費自助吧","",...] 可給我英文代號我自己轉換，或者每個欄位 ture,false，包在陣列裡
  description: string;
  photos: Array<string>; //["照片A路徑","照片A路徑",...]
};

// ---data---

export const tabSet: TabType[] = [
  {
    tabName: "schedule",
    tabText: "可預約時間",
    img: { src: "/images/icon-calendar-light.svg", alt: "icon-calendar-light" },
  },
  {
    tabName: "games",
    tabText: "遊戲清單",
    img: { src: "/images/icon-games-light.svg", alt: "icon-games-light" },
  },
  {
    tabName: "comments",
    tabText: "綜合評價",
    img: { src: "/images/icon-comments-light.svg", alt: "icon-comments-light" },
  },
];

// 店家資料，來自 API
export const storeData: StoreDataType = {
  storeName: "六角學院桌遊店",
  profileImg: "/images/store-profile/photo-store-s0001-0.png",
  address: "高雄市新興區民生一路56號",
  openingHours: "12:00 - 20:00",
  phoneNum: "07-12345678",
  cost: "每小時 35 元/人",
  highlights: [""],
  description:
    "我們擁有超過1000款各式各樣的桌遊，適合所有年齡層和遊戲水平的人們。不管你是初學者還是老手，我們的工作人員都會樂意幫助你找到合適的遊戲，並解釋規則。店內提供舒適的座位和美味的小吃，讓你可以長時間享受遊戲。歡迎來到我們的桌遊店，一起創造美好的遊戲回憶！",
  photos: [
    "/images/store-profile/photo-store-s0001-1.png",
    "/images/store-profile/photo-store-s0001-2.png",
    "/images/store-profile/photo-store-s0001-3.png",
  ],
};

// 評價資料，來自 API
export const commentsData: CommentsDataType = {
  averageScore: {
    environment: 1,
    service: 2.3,
    game: 5,
    costValue: 4.4,
    overall: 2.9,
  },
  comments: [
    {
      commentBy: {
        userName: "多多",
        userImg: "/images/logo.jpg",
        userId: "1234567",
      },
      group: {
        groupName: "輕鬆派對揪友團",
        memberNum: 8,
        groupDate: "2023-01-10",
        storeName: "軟體高雄六角學院桌遊店",
        storeId: "/", //用id連結去店家詳細頁
      },
      msg: "藍天下的Nebula，每次Sunset都會有不同的Reflection。在此之間，橋梁Link著兩岸，如同Connectivity連結著過去與未來。花朵Bloom，傳遞Nature的語言。",
      score: 4.5,
      commentDate: "2023-10-27",
    },
    {
      commentBy: {
        userName: "少少",
        userImg: "/images/logo.jpg",
        userId: "3234567",
      },
      group: {
        groupName: "輕鬆派對揪友團",
        groupDate: "2023-01-10",
        memberNum: 8,
        storeName: "軟體高雄六角學院桌遊店",
        storeId: "/", //用id連結去店家詳細頁
      },
      msg: "今天的Sky真blue～(✿◠‿◠) 風輕輕Blow，心情就好(⁄ ⁄•⁄ω⁄•⁄ ⁄)。Mountain高，河水Flow，生活就這Mojo！٩(◕‿◕｡)۶",
      score: 4,
      commentDate: "2023-10-27",
    },
  ],
};
