import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "./data";

export default function Layout({
  pageCategory,
  children,
  mainClassName,
}: LayoutProps) {
  const isSearchPage = pageCategory === "search-result";
  const bgColor = isSearchPage ? "bg-yellow-dark" : "bg-yellow-tint";
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageCategory={pageCategory} />
      <main className={`grow ${bgColor} ${mainClassName}`}>{children}</main>
      <Footer pageCategory={pageCategory} />
    </div>
  );
}
