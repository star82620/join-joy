import React from "react";
import Link from "../GeneralLink";
import { simplePages, copyright, footerInfo, footerMenu } from "./data";

// 簡易款
function SimpleFooter() {
  return <p className="text-center w-full">{copyright}</p>;
}

// 基本款
function DefaultFooter() {
  return (
    <div className="flex justify-between md:flex-col md:justify-center ">
      <div className="flex flex-col md:border-b-[1px] md:border-gray-400 md:justify-center md:items-center md:pb-4 md:mb-4">
        <div>{footerInfo.logo}</div>
        <p>{footerInfo.slogan}</p>
      </div>
      <div className="flex justify-center gap-12">
        {footerMenu.map((lists, index) => {
          return (
            <section key={index}>
              <h6 className="font-semibold text-gray-400 md:text-sm">
                {lists.title}
              </h6>
              <ul className="flex flex-col gap-3 pl-2 mt-2 border-l border-gray-300 md:text-xs">
                {lists.content.map((item) => {
                  return (
                    <li key={item.href}>
                      <Link href={`/${item.href}`} className="no-underline">
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
  );
}

type footerSelectorType = "simple" | "default";
type FooterProps = { pageCategory: string };

export default function Footer({ pageCategory }: FooterProps) {
  let isDefaultFooter: boolean = simplePages.includes(pageCategory)
    ? false
    : true;

  return (
    <footer className="container flex flex-col gap-6 py-9 md:pt-6 md:pb-8 bg-gray-700 text-gray-50 text-sm md:text-xs">
      {isDefaultFooter && <DefaultFooter />}
      <SimpleFooter />
    </footer>
  );
}
