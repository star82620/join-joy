import React, { Children, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow bg-yellow-tint">{children}</main>
      <Footer />
    </div>
  );
}
