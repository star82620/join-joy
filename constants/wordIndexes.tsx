import { StoreRatingDetailSetType } from "./types/apiTypes/comment";
import { GroupTagSetType } from "./types/apiTypes/group";

export type IndexStringType = Record<string, string>;

export type IndexNumberType = Record<number, string>;

// 遊戲類型
export const gameTypeIndex: IndexNumberType = {
  1: "不限定",
  2: "派對遊戲",
  3: "陣營遊戲",
  4: "心機遊戲",
  5: "卡牌遊戲",
  6: "兒童遊戲",
  7: "家庭遊戲",
  8: "抽象遊戲",
  9: "劇本殺",
  10: "策略遊戲",
};

// 團員身份
export const memberStatusIndex: IndexStringType = {
  leader: "團主",
  member: "團員",
};

// 揪團狀態
export const groupStatusIndex: IndexStringType = {
  opening: "開團中",
  closed: "已結束",
};

export const citiesIndex: IndexNumberType = {
  1: "基隆市",
  2: "台北市",
  3: "新北市",
  4: "桃園市",
  5: "新竹市",
  6: "新竹縣",
  7: "苗栗縣",
  8: "台中市",
  9: "彰化縣",
  10: "南投縣",
  11: "雲林縣",
  12: "嘉義市",
  13: "嘉義縣",
  14: "台南市",
  15: "高雄市",
  16: "屏東縣",
  17: "宜蘭縣",
  18: "花蓮縣",
  19: "台東縣",
  20: "澎湖縣",
  21: "金門縣",
  22: "連江縣",
};

// 揪團 tags
export const groupTags: GroupTagSetType = [
  { id: "beginnerTag", text: "新手團" },
  { id: "expertTag", text: "老手團" },
  { id: "practiceTag", text: "經驗切磋" },
  { id: "openTag", text: "不限定" },
  { id: "tutorialTag", text: "教學團" },
  { id: "casualTag", text: "輕鬆" },
  { id: "competitiveTag", text: "競技" },
];

// 店家評價細項
export const StoreRatingDetailSet: StoreRatingDetailSetType = [
  { id: "clean", text: "環境舒適" },
  { id: "service", text: "服務態度" },
  { id: "variety", text: "遊戲多樣性" },
  { id: "value", text: "性價比" },
  //[TBD] { id: "overall", text: "整體" },
];
