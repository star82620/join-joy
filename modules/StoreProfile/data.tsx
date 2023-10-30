import { TabType } from "@/common/components/WrapperFile/data";
import { CommentsDataType } from "@/common/components/CommentsSection/data";

export type StoreTabNameType = "schedule" | "games" | "comments";

export type activeTabType = StoreTabNameType;

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
