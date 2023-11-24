import React, { useContext } from "react";
import Image from "next/image";
import Logo from "../WebsiteLogo";
import Button from "../GeneralButton";
import Link from "../GeneralLink";
import Navbar from "../Navbar";
import { hiddenGroupBtnPages, hiddenStoreBtnPages } from "./data";
import TopSearchBar from "../Layout/TopSearchBar";
import CitiesProvider, {
  CitiesDataContext,
} from "@/common/contexts/CitiesProvider";

type HeaderProps = {
  pageCategory: string;
};

export default function Header({ pageCategory }: HeaderProps) {
  let isGroupButtonHidden = hiddenGroupBtnPages.includes(pageCategory);
  let isStoreButtonHidden = hiddenStoreBtnPages.includes(pageCategory);

  return (
    <>
      <header className="bg-yellow-dark border-b-2 border-stone-950">
        <div className="flex justify-between items-center container py-5 md:py-3">
          <Link href="/">
            <Logo width="38" height="38" />
          </Link>
          <section className="flex items-center gap-6">
            {isStoreButtonHidden || (
              <Link href="/create-group" className="md:hidden">
                在 揪遊 上成立店家
              </Link>
            )}
            {isGroupButtonHidden || (
              <Button
                type="button"
                appearance="yellow"
                onClick={() => console.log("開團！")}
                className="md:hidden"
              >
                <span className="text-xl md:text-xs">我要開團</span>
              </Button>
            )}
            <section className="flex flex-col">
              <Button
                type="button"
                appearance="white"
                onClick={() => console.log("I see")}
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
              {/* <Navbar /> */}
            </section>
          </section>
        </div>
      </header>
      <CitiesProvider>
        <TopSearchBar />
      </CitiesProvider>
    </>
  );
}
