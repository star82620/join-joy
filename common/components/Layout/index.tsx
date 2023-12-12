import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "./data";
import CustomHead from "../CustomHead";

export default function Layout({
  pageCategory,
  children,
  mainClassName,
}: LayoutProps) {
  const isSearchPage = pageCategory === "search-result";
  const bgColor = isSearchPage ? "bg-yellow-dark" : "bg-yellow-tint";
  return (
    <div className="min-h-screen flex flex-col">
      <CustomHead pageCategory={pageCategory} />
      <Header pageCategory={pageCategory} />
      <main className={`grow flex flex-col ${bgColor} ${mainClassName}`}>
        {children}
      </main>
      <Footer pageCategory={pageCategory} />
    </div>
  );
}
