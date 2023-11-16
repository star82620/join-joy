import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

// game
export type GameType = {
  gameId: number;
  gameType: string;
  gameName: string;
  version: string;
  peopleNum: string;
  qtu: number;
};

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
