import React from "react";
import Logo from "./Logo";

interface Props {}

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
}
