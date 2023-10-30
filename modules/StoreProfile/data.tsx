import { TabType } from "@/common/components/WrapperFile/data";

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
