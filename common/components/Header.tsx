import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-orange-100 py-3 border-b-2 border-stone-950">
      <div className="container flex justify-between">
        <Logo />
        <section className="flex gap-6">
          <a>在 揪遊 上成立店家</a>
          <button>會員按鈕</button>
        </section>
      </div>
    </header>
  );
}
