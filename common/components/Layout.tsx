import React, { Children, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
