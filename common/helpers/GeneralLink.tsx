import React, { Children, ReactNode } from "react";
import Link from "next/link";

// 執行此元件 function：給予對應的 props（url、alt、target），輸出結果為 內部連結<Link> 或 外部連結<a>
// 如果有 alt 就是外部連結，不然就是 Link

interface Props {
  href: string;
  children: ReactNode;
  target?: string;
}

export default function GeneralLink({ href, children, target }: Props) {
  if (target) {
    return (
      <a
        className=" bg-yellow-400"
        href={href}
        target={target}
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link className=" bg-red-200" href={href}>
        {children}
      </Link>
    );
  }
}
