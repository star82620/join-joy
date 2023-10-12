import React, { Children, ReactNode } from "react";
import Link from "next/link";

// 執行此元件 function：給予對應的 props（url、target），輸出結果為 內部連結<Link> 或 外部連結<a>

interface Props {
  href: string;
  children: ReactNode;
  target?: string;
}

export default function GeneralLink({ href, children, target }: Props) {
  // 如果沒有 href => 什麼都不給 return null
  if (!href) return null;

  // 如果有 href 但沒有 target => 內部連結
  if (href && !target)
    return (
      <Link className="bg-red-200" href={href}>
        {children}
      </Link>
    );

  // 如果有 href 和 target => 外部連結
  if (href && target)
    return (
      <a
        className="bg-yellow-400"
        href={href}
        target={target}
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
}
