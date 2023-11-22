import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "./data";

export default function Layout({
  pageCategory,
  children,
  mainClassName,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageCategory={pageCategory} />
      <main className={`grow bg-yellow-tint ${mainClassName}`}>{children}</main>
      <Footer pageCategory={pageCategory} />
    </div>
  );
}
