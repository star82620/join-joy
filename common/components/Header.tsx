import React from "react";
import Logo from "./Logo";

interface Props {}

export default function Header() {
  return (
    <header className="bg-orange-100 py-3 border-b-2 border-stone-950">
      <div className="container flex justify-between">
        <Logo />
        <div className="flex gap-6">
          <a>在 揪遊 上成立店家</a>
          <button>會員按鈕</button>
        </div>
      </div>
    </header>
  );
}
