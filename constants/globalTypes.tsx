import React, { ReactNode } from "react";

export type ImgType = {
  src: string;
  alt: string;
};

// iconsPackage
type IconIdType =
  | "my-following"
  | "my-following-active"
  | "my-groups"
  | "my-groups-active"
  | "profile-setting"
  | "profile-setting-active"
  | "my-notification"
  | "my-notification-active"
  | "logout"
  | "sub-closing"
  | "sub-opening";

export type UserNavIconsType = Record<IconIdType, ImgType>;

// defaultImages
export type DefaultImagesType = Record<string, ImgType>;

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
