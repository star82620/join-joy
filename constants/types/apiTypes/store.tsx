// store of group location
export type StoreInfoType = {
  storeId: number;
  storeName: string;
  address: string;
};

// get-remaining-seats
export type RemainingSeatsType = {
  time: string;
  seats: number;
};

// 取得店家資料
export type StoreTagType =
  | "wifiTag"
  | "teachTag"
  | "meal"
  | "mealout"
  | "buffet";

export type StoreItemDataType = {
  storeId: number;
  storeName: string;
  address: string;
  profileImg: string | null;
  cover: string | null;
  openTime: string;
  closeTime: string;
  score: number;
  description: string;
  tags: StoreTagType[];
  hqTag: boolean;
  popTag: boolean;
};

export type StoreSetDataType = StoreItemDataType[];
