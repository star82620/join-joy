import { AuthDataType } from "@/constants/globalTypes";
import { ReactNode } from "react";

// Layout
export type PageCategoryType =
  | "signup"
  | "login"
  | "forget-password"
  | "create-group"
  | "user-center"
  | "group"
  | "user"
  | "store"
  | "landing-page"
  | "error"
  | "search-result"
  | "setting";

export type LayoutProps = {
  pageCategory: PageCategoryType;
  children: ReactNode;
  mainClassName?: string;
};

// Header

// 隱藏「我要開團」的頁面
export const hiddenGroupBtnPages: Array<string> = [
  "login",
  "signup",
  "forget-password",
  "create-group",
];

// 隱藏「在揪遊上成立店家」的頁面
export const hiddenStoreBtnPages: Array<string> = ["login"];

export type HeaderProps = {
  pageCategory: PageCategoryType;
};

// NavBar

export type NavBarProps = {
  authData: AuthDataType | null;
  isLogin: boolean;
};

// Footer
export type FooterProps = { pageCategory: string };

type ContentType = {
  text: string;
  href: string;
};

type MenuItemType = {
  title: string;
  contents: ContentType[];
};

type DataType = MenuItemType[];

//使用簡易版 Footer 的頁面
export const simpleFooterPages: Array<string> = [
  "signup",
  "login",
  "forget-password",
  "create-group",
];

export const copyright = "Copyright © 2023 遊人揪揪工作室 All rights reserved.";

export const slogan = "Joining Together, Joy Forever!";

export const footerMenu: DataType = [
  {
    title: "關於我們",
    contents: [
      { text: "服務條款", href: "rule" },
      { text: "隱私權政策", href: "private" },
      { text: "客服中心", href: "service" },
    ],
  },
  {
    title: "揪團須知",
    contents: [
      { text: "常見問題", href: "fqa" },
      { text: "停權機制", href: "ban" },
    ],
  },
];
