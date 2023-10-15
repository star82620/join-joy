import React from "react";
import Logo from "./WebsiteLogo";
import Button from "./GeneralButton";

const test = () => console.log("I see");

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-orange-100 py-3 border-b-2 border-stone-950">
      <div className="container flex justify-between">
        <Logo width="80" height="80" />
        <section className="flex gap-6">
          <a>在 揪遊 上成立店家</a>
          <Button type="button" onClick={test} appearance="light" size="lg">
            會員按鈕
          </Button>
        </section>
      </div>
    </header>
  );
}
