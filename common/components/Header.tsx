import React from "react";
import Logo from "./WebsiteLogo";
import Image from "next/image";
import Button from "./GeneralButton";
import Link from "./GeneralLink";
import HeaderUserNavbar from "./HeaderUserNavbar";

const test = () => console.log("I see");

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-yellow-dark border-b-2 border-stone-950">
      <div className="flex justify-between items-center container px-12 py-5 md:px-2 md:py-3">
        <Link href="/">
          <Logo width="38" height="38" />
        </Link>
        <section className="flex items-center gap-6">
          <Link href="/create-group" className="md:hidden">
            在 揪遊 上成立店家
          </Link>
          <section className="flex flex-col">
            <Button type="button" onClick={test} appearance="light">
              <Image
                src="/images/icon-header-user.svg"
                alt="user"
                width="36"
                height="24"
                className="inline md:hidden border-r-2 border-gray-950 pr-3 mr-3"
              ></Image>
              <Image
                src="/images/icon-header-menu.svg"
                alt="menu"
                width="24"
                height="24"
                className="inline"
              ></Image>
            </Button>
            {/* 點擊按鈕下拉選單，登入狀態會影響內容 */}
            {/* <HeaderUserNavbar /> */}
          </section>
        </section>
      </div>
    </header>
  );
}
