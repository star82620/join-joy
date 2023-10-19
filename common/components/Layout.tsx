import React, { Children, ReactNode } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="min-h-screen flex flex-col">
      <Header pageCategory={router.pathname} />
      <main className="grow bg-yellow-tint">{children}</main>
      <Footer pageCategory={router.pathname} />
    </div>
  );
}
