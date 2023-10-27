import { ReactNode } from "react";

export const categoryStyles = {
  single: {
    haveShadow: true,
    haveHeadDeco: true,
  },
  major: {
    haveShadow: false,
    haveHeadDeco: true,
  },
  minor: {
    haveShadow: false,
    haveHeadDeco: false,
  },
};
// 滿版的 single：整個畫面只有自己一個 modal，有陰影、title 字大
// 不是滿版 主要的 major：畫面上不只一個 modal，沒有陰影、title 字 20px、有 header 點點
// 不是滿版 次要的 minor：畫面上不只一個 modal，有陰影、title 字 20px、沒有 header 點點

export type ModalWrapperProps = {
  title: string;
  children: ReactNode;
  category: "single" | "major" | "minor";
};
