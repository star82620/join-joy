import React, { MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import Image from "../FillImage";
import Navbar from "./Navbar";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { logoSet } from "@/constants/logoSet";
import { HeaderProps, hiddenGroupBtnPages, hiddenStoreBtnPages } from "./data";
import { useAuth } from "@/common/hooks/useAuth";

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
  const headerStyle = isLandingPage ? "bg-orange-landing" : defaultHeaderStyle;

  const logoSrc = logoSet.header.src;
  const logoAlt = logoSet.header.alt;

  const { authData, isLogin } = useAuth();

  return (
    <header className={headerStyle}>
      <div className="container flex justify-between items-center py-2">
        <Link href="/">
          <Image
            src={logoSrc}
            alt={logoAlt}
            widthProp="w-[72px] md:w-[64px]"
            heightProp="h-[44px]"
          />
        </Link>
        <section className="flex items-center gap-6 relative">
          {!isStoreButtonHidden && (
            <div className="md:hidden font-semibold">
              <Link href="/" className="no-underline">
                在 揪遊 上成立店家
              </Link>
            </div>
          )}
          {!isGroupButtonHidden && (
            <Button
              type="button"
              appearance="yellow"
              onClick={pushToCreateGroup}
              className="md:hidden"
            >
              <span className="text-lg md:text-xs leading-6">我要開團</span>
            </Button>
          )}
          <div className="flex flex-col">
            <Button
              type="button"
              appearance="white"
              onClick={() => setToggleNavBar(!toggleNavBar)}
              className="w-fit"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={globalIcons["header-user"].src}
                  alt={globalIcons["header-user"].alt}
                  widthProp="w-6"
                  heightProp="h-6"
                />
                <div className="w-0.5 h-6 bg-gray-950"></div>
                <Image
                  src={globalIcons["header-menu"].src}
                  alt={globalIcons["header-menu"].alt}
                  widthProp="w-6"
                  heightProp="h-6"
                />
              </div>
            </Button>
            {toggleNavBar && <Navbar authData={authData} isLogin={isLogin} />}
          </div>
        </section>
      </div>
    </header>
  );
}
