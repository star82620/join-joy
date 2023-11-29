export type StoreTagType =
  | "wifiTag"
  | "teachTag"
  | "meal"
  | "mealout"
  | "buffet";

export type StoreDataType = {
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
