import React, { MouseEventHandler, useContext, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../GeneralButton";
import Link from "../GeneralLink";
import Logo from "../WebsiteLogo";
import { HeaderProps, hiddenGroupBtnPages, hiddenStoreBtnPages } from "./data";
import Navbar from "./Navbar";

export default function Header({ pageCategory }: HeaderProps) {
  const router = useRouter();
  const [toggleNavBar, setToggleNavBar] = useState(false);

  let isGroupButtonHidden = hiddenGroupBtnPages.includes(pageCategory);
  let isStoreButtonHidden = hiddenStoreBtnPages.includes(pageCategory);
  let isLandingPage = pageCategory === "landingpage";

  const pushToCreateGroup: MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/create-group");
  };

  const defaultHeaderStyle = "bg-yellow-dark border-b-2 border-stone-950";
  const headerStyle = isLandingPage ? "" : defaultHeaderStyle;

  return (
    <header className="bg-yellow-neutral">
      <div className="flex justify-between items-center container py-5 md:py-3">
        <Link href="/">
          <Logo width="38" height="38" />
        </Link>
        <section className="flex items-center gap-6 relative">
          {!isStoreButtonHidden && (
            <div className="md:hidden">
              <Link href="/">在 揪遊 上成立店家</Link>
            </div>
          )}
          {!isGroupButtonHidden && (
            <Button
              type="button"
              appearance="yellow"
              onClick={pushToCreateGroup}
              className="md:hidden"
            >
              <span className="text-xl md:text-xs">我要開團</span>
            </Button>
          )}
          <section className="flex flex-col">
            <Button
              type="button"
              appearance="white"
              onClick={() => setToggleNavBar(!toggleNavBar)}
              className="w-fit"
            >
              <Image
                src="/images/icon-header-user.svg"
                alt="user"
                width="36"
                height="24"
                className="inline md:hidden border-r-2 border-gray-950 pr-3 mr-3"
              />
              <Image
                src="/images/icon-header-menu.svg"
                alt="menu"
                width="24"
                height="24"
                className="inline"
              />
            </Button>
            {/* 點擊按鈕下拉選單，登入狀態會影響內容 */}
            {toggleNavBar && <Navbar />}
          </section>
        </section>
      </div>
    </header>
  );
}
