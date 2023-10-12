import React, { Children, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  Children: ReactNode;
}

export default function Layout({ Children }: Props) {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
}
