import { PageCategoryType } from "../Layout/data";

type dataType = {
  title: string;
  desc: string;
  url: string;
  image: string;
};

export const defaultMeta: Record<string, string> = {
  defaultTitle: "JoinJoy 揪遊 | 桌遊揪團平台",
  defaultDescription:
    "歡迎來到「Join Joy 揪遊」！揪遊是一個專為桌遊愛好者打造的線上揪團平台，致力於提供便利、順暢的桌遊組隊體驗。來尋找志同道合的夥伴，一同分享桌遊的喜悅，豐富休閒時光。",
  defaultImage: "",
};

export const dataSet: Record<string, dataType> = {
  "landing-page": {
    title: "",
    desc: "",
    url: "", //canonial
    image: "",
  },
  login: {
    title: "會員登入",
    desc: "加入揪遊，享受美好交流",
    url: "",
    image: "",
  },
  signup: {
    title: "會員註冊",
    desc: "加入揪遊，享受美好交流",
    url: "",
    image: "",
  },
  "user-center": {
    title: "會員中心",
    desc: "管理會員資料",
    url: "",
    image: "",
  },
  "create-group": {
    title: "創建新揪團",
    desc: "創建新的揪團，開啟專屬於你的開團體驗",
    url: "",
    image: "",
  },
  "forget-password": {
    title: "忘記密碼",
    desc: "重新設定密碼",
    url: "",
    image: "",
  },
  "search-result": {
    title: "搜尋結果",
    desc: "",
    url: "",
    image: "",
  },
  setting: {
    title: "",
    desc: "",
    url: "",
    image: "",
  },
  user: {
    title: "",
    desc: "",
    url: "",
    image: "",
  },
  group: {
    title: "",
    desc: "",
    url: "",
    image: "",
  },
  store: {
    title: "",
    desc: "",
    url: "",
    image: "",
  },
  error: {
    title: "",
    desc: "",
    url: "",
    image: "",
  },
};

export type CustomHeadProps = {
  pageCategory: PageCategoryType;
};
