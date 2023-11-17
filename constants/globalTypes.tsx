import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

export type IconsType = Record<string, ImgType>;

// AuthProvider
export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthDataType = {
  userId: number;
  nickName: string;
  photo: string;
};

export type AuthContextType = {
  authData: AuthDataType | null;
  setAuthData: React.Dispatch<React.SetStateAction<AuthDataType | null>>;
};

// store
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

// game
// 這裡的 gameType 是小寫 t（from API）
export type GameType = {
  gameId: number;
  gametype: string;
  gameName: string;
  version: string;
  peopleNum: string;
  qtu: number;
};

// GroupTagSelector
export type GroupTagIdType =
  | "beginnerTag"
  | "expertTag"
  | "practiceTag"
  | "openTag"
  | "tutorialTag"
  | "casualTag"
  | "competitiveTag";

export type GroupTagItemType = { id: GroupTagIdType; text: string };
