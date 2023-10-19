import React from "react";
import Logo from "./WebsiteLogo";
import Image from "next/image";
import Button from "./GeneralButton";
import Link from "./GeneralLink";
import HeaderUserNavbar from "./HeaderUserNavbar";

const test = () => console.log("I see");
type HeaderProps = {
  pageCategory: string;
};

// 有這兩個東西要隱藏：
// 在揪遊上成立店家 hideCreateStore -
// 開團按鈕 hideCreateGroup -

// 還是要把這個直接改成 Head 然後傳 props 進去？
// const hideCreateGroup = ["", "", ""];
// const hideCreateStore = [];

export default function Header({ pageCategory }: HeaderProps) {
  // const isDefaultHeader: boolean = simplePages.includes(pageCategory)
  // ? false
  // : true;

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
          <Button
            type="button"
            appearance="yellow"
            onClick={() => console.log("開團！")}
          >
            我要開團
          </Button>
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
