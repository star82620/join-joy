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

export const footerInfo: Record<string, string> = {
  logo: "Join Joy",
  slogan: "Joining Together, Joy Forever!",
};

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
