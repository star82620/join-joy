import React, { Children, ReactNode } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Header from "./Header";
import Footer from "./Footer";

// pageCategory 可能會傳進什麼頁面都要寫出來
interface Props {
  pageCategory:
    | "signup"
    | "login"
    | "forget-password"
    | "create-group"
    | "user-center"
    | "group"
    | "user"
    | "store"
    | "landingpage"
    | "error"
    | "searchresult";
  children: ReactNode;
  mainClassName?: string;
}

export default function Layout({
  pageCategory,
  children,
  mainClassName,
}: Props) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageCategory={pageCategory} />
      <main className={clsx("grow bg-yellow-tint", mainClassName)}>
        {children}
      </main>
      <Footer pageCategory={pageCategory} />
    </div>
  );
}
