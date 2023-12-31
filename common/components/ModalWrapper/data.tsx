import { ReactNode } from "react";

export const layoutStyles = {
  default: {
    haveShadow: true,
    haveHeadDots: true,
  },
  primary: {
    haveShadow: false,
    haveHeadDots: true,
  },
  secondary: {
    haveShadow: false,
    haveHeadDots: false,
  },
};
// 滿版的 default：整個畫面只有自己一個 modal，有陰影、title 字大
// 不是滿版 主要的 primary：畫面上不只一個 modal，沒有陰影、title 字 20px、有 header 點點
// 不是滿版 次要的 secondary：畫面上不只一個 modal，有陰影、title 字 20px、沒有 header 點點

export type ModalWrapperProps = {
  title: string;
  children: ReactNode;
  layout?: "default" | "primary" | "secondary";
  fill?: boolean;
};
