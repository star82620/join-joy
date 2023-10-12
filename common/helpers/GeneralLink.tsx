import React from "react";
import Link from "next/link";

// 執行此元件 function：給予對應的 props（url、alt、target），輸出結果為 內部連結<Link> 或 外部連結<a>

interface ILinkProps {
  url: string;
  alt: string;
  content: string;
  target?: string;
}

export default function GeneralLink({ url, alt, content, target }: ILinkProps) {
  return <a>{content}</a>;
}

//
