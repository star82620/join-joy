import React from "react";
import Image from "next/image";
import Logo from "../WebsiteLogo";
import Button from "../GeneralButton";
import Link from "../GeneralLink";
import HeaderUserNavbar from "../HeaderUserNavbar";
import { hideGroupPages, hideStorePages } from "./data";

const test = () => console.log("I see");
type HeaderProps = {
  pageCategory: string;
};

export default function Header({ pageCategory }: HeaderProps) {
  let hideGroupBtn = true;
  let hideStoreBtn = true;

  hideGroupPages.forEach((page) => {
    if (pageCategory.includes(page)) {
      hideGroupBtn = false;
    }
  });
  hideStorePages.forEach((page) => {
    if (pageCategory.includes(page)) {
      hideStoreBtn = false;
    }
  });

  return (
    <header className="bg-yellow-dark border-b-2 border-stone-950">
      <div className="flex justify-between items-center container py-5 md:py-3">
        <Link href="/">
          <Logo width="38" height="38" />
        </Link>
        <section className="flex items-center gap-6">
          {/* 如果 showStoreBtn === true 出現按鈕 */}
          {hideStoreBtn && (
            <Link href="/create-group" className="md:hidden">
              在 揪遊 上成立店家
            </Link>
          )}
          {hideGroupBtn && (
            <Button
              type="button"
              appearance="yellow"
              onClick={() => console.log("開團！")}
              className="md:hidden"
            >
              我要開團
            </Button>
          )}
          <section className="flex flex-col">
            <Button type="button" appearance="light" onClick={test}>
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
