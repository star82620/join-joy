import React from "react";
import Link from "@/common/components/GeneralLink";
import {
  simpleFooterPages,
  copyright,
  slogan,
  footerMenu,
  FooterProps,
} from "./data";
import Image from "../FillImage";
import { logoSet } from "@/constants/logoSet";

const defaultFooterStyle = "bg-gray-700 text-gray-50 text-sm md:text-xs";

// 簡易款
function SimpleFooter() {
  return (
    <footer className={`${defaultFooterStyle} py-3 md:py-2`}>
      <p className="container text-center">{copyright}</p>
    </footer>
  );
}

// 基本款
function DefaultFooter() {
  return (
    <footer className={`${defaultFooterStyle} pt-9 pb-10 md:pt-3 md:pb-6`}>
      <div className="container flex justify-between mb-8 md:mb-2 md:flex-col md:justify-center ">
        <div className="flex flex-col gap-2 md:gap-1 md:justify-center md:items-center md:pb-2 md:mb-2 md:border-b-[1px] md:border-gray-400">
          <Image
            src={logoSet["footer"].src}
            alt={logoSet["footer"].alt}
            widthProp="w-16"
            heightProp="h-6"
          />
          <p className="font-bold text-xl md:text-sm">{slogan}</p>
        </div>
        <div className="flex justify-center gap-12">
          {footerMenu.map((list, index) => {
            const { title, contents } = list;
            return (
              <section key={index}>
                <h6 className="font-semibold text-gray-400 text-md md:text-sm md:leading-[1.6]">
                  {title}
                </h6>
                <ul className="flex flex-col md:items-center gap-3 md:gap-0.5 border-l border-gray-300 md:border-0 pl-2 md:p-0 mt-2 md:mt-1 md:text-xs">
                  {contents.map((item) => {
                    return (
                      <li key={item.href}>
                        <Link href={item.href} className="no-underline">
                          {item.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
      <p className="container text-center">{copyright}</p>
    </footer>
  );
}

export default function Footer({ pageCategory }: FooterProps) {
  let isDefaultFooter = !simpleFooterPages.includes(pageCategory);

  return <>{isDefaultFooter ? <DefaultFooter /> : <SimpleFooter />}</>;
}
