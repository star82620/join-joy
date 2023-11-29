import React, { Children, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

// 執行此元件 function：給予對應的 props（url、target），輸出結果為 內部連結<Link> 或 外部連結<a>

interface Props {
  href: string;
  children: ReactNode;
  target?: string;
  className?: string;
  noUnderLine?: boolean;
}

export default function GeneralLink({
  href,
  children,
  target,
  className,
  noUnderLine,
}: Props) {
  const underline = noUnderLine ? "" : "underline";

  // 如果有 href 但沒有 target => 內部連結
  if (href && !target)
    return (
      <Link className={`cursor-pointer ${underline} ${className}`} href={href}>
        {children}
      </Link>
    );

  // 如果有 href 和 target => 外部連結
  if (href && target)
    return (
      <a
        className={`cursor-pointer ${underline} ${className}`}
        href={href}
        target={target}
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );

  // 如果不符合上述條件，什麼都不給 return null
  return null;
}
