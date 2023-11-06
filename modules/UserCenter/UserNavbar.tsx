import React from "react";
import ProfileImg from "@/common/components/ProfileImg";
import FillImage from "@/common/components/FillImage";
import icons from "@/constants/iconsPackage/userNavIcons";
import { UserNavBarProps, NavSetType } from "./date";

export default function UserNavBar({
  navSet,
  activeNav,
  openSubList,
  setIconImg,
  toggleActiveNav,
  toggleActiveSubNav,
}: UserNavBarProps) {
  const subNavList = (nav: NavSetType) => {
    if (!nav.subItem) return null;
    return (
      <ul className="block font-normal">
        {nav.subItem.map((subNav) => {
          const isActiveSub = activeNav.includes(subNav.id);
          const activeSubNavStyle = isActiveSub ? "text-purple-dark" : "";
          return (
            <li
              key={subNav.id}
              className={`p-3 ml-9 text-sm cursor-pointer ${activeSubNavStyle}`}
              onClick={() => toggleActiveSubNav(subNav)}
            >
              {subNav.text}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center py-4">
        <ProfileImg
          src="/images/photo-user-000.png"
          alt="userName"
          widthStyle="w-16 md:w-10"
          heightStyle="h-16 md:h-16"
        />
        <p className="mt-3 text-center text-lg font-semibold">多多</p>
      </div>
      <nav className="px-1 flex flex-col">
        <ul className="flex flex-col gap-1">
          {navSet.map((nav: NavSetType) => {
            const isActive = nav.subItem
              ? activeNav.includes(nav.id)
              : activeNav === nav.id;
            const defaultStyle = "";
            const activeStyle = "font-semibold rounded-md bg-yellow-tint";
            const navStyle = isActive ? activeStyle : defaultStyle;
            const haveSubItem = !!nav.subItem;
            const showSubNav = isActive && haveSubItem && openSubList;

            return (
              <li key={nav.id}>
                <div
                  className={`flex gap-3 p-3 cursor-pointer ${navStyle} `}
                  onClick={() => toggleActiveNav(nav)}
                >
                  <FillImage
                    src={setIconImg(nav, "src")}
                    alt={setIconImg(nav, "alt")}
                    widthStyle="w-6"
                    heightStyle="h-6"
                  />
                  <span className="grow">{nav.text}</span>
                  {haveSubItem && !openSubList && (
                    <FillImage
                      src={icons["sub-opening"].src}
                      alt={icons["sub-opening"]["alt"]}
                      widthStyle="w-6"
                      heightStyle="h-6"
                    />
                  )}
                  {showSubNav && (
                    <FillImage
                      src={icons["sub-closing"].src}
                      alt={icons["sub-closing"]["alt"]}
                      widthStyle="w-6"
                      heightStyle="h-6"
                    />
                  )}
                </div>
                {showSubNav && subNavList(nav)}
              </li>
            );
          })}
        </ul>
        <div className="p-3 flex gap-3 grow">
          <FillImage
            src={icons.logout.src}
            alt={icons.logout.alt}
            widthStyle="w-6"
            heightStyle="h-6"
          />
          登出
        </div>
      </nav>
    </section>
  );
}
