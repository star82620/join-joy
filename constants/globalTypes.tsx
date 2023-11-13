import React, { ChangeEventHandler, ReactNode } from "react";

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

// 事件
export type ChangeInputHandler = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;

export type ChangeSelectHandler = (
  e: React.ChangeEvent<HTMLSelectElement>
) => void;

export type ChangeTextAreaHandler = (
  e: React.ChangeEvent<HTMLTextAreaElement>
) => void;
