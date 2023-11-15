import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

// groupProfileTitles
export type TitleItemType = {
  title: string;
  img: ImgType;
};

export type TitlesType = Record<string, TitleItemType>;

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

export type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;
