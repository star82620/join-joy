import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

export type StoreType = {
  storeId: number;
  storeName: string;
  address: string;
};

export type TabType = {
  tabId: string;
  text: string;
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
