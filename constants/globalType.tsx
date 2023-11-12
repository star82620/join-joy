export type ImgType = {
  src: string;
  alt: string;
};

export type StoreType = {
  storeId: number;
  storeName: string;
  address: string;
  profileImg: string;
  cover: string | null;
  score: number;
  tag: {
    wifiTag: boolean;
    teachTag: boolean;
    meal: boolean;
    mealout: boolean;
    buffet: boolean;
    hqTag: boolean;
    popTag: boolean;
  };
};

// 這裡的 gameType 是小寫 t（from API）
export type GameType = {
  gameId: number;
  gametype: string;
  gameName: string;
  version: string;
  peopleNum: string;
  qtu: number;
};

// 事件
export type ChangeInputHandler = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;

export type ChangeSelectHandler = (
  e: React.ChangeEvent<HTMLSelectElement>
) => void;
