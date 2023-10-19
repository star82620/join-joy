import React from "react";
import Link from "../GeneralLink";
import { simpleFooterPages, copyright, footerInfo, footerMenu } from "./data";

// 簡易款
function SimpleFooter() {
  return (
    <footer className="container flex flex-col gap-6 py-3 md:py-2 bg-gray-700 text-gray-50 text-sm md:text-xs text-center">
      {copyright}
    </footer>
  );
}

// 基本款
function DefaultFooter() {
  return (
    <footer className="py-9 md:pt-6 md:pb-8 bg-gray-700 text-gray-50 text-sm md:text-xs">
      <div className="container flex justify-between mb-8 md:mb-6 md:flex-col md:justify-center ">
        <div className="flex flex-col md:border-b-[1px] md:border-gray-400 md:justify-center md:items-center md:pb-4 md:mb-4">
          <div>{footerInfo.logo}</div>
          <p>{footerInfo.slogan}</p>
        </div>
        <div className="flex justify-center gap-12">
          {footerMenu.map((lists, index) => {
            return (
              <section key={index}>
                <h6 className="font-semibold text-gray-400 text-center md:text-sm md:leading-[1.6]">
                  {lists.title}
                </h6>
                <ul className="flex flex-col gap-3 pl-2 mt-2 border-l border-gray-300 md:items-center md:border-0 md:p-0 md:mt-1 md:text-xs">
                  {lists.contents.map((item) => {
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

type FooterProps = { pageCategory: string };

export default function Footer({ pageCategory }: FooterProps) {
  let isDefaultFooter = true;

  simpleFooterPages.forEach((page) => {
    if (pageCategory.includes(page)) {
      isDefaultFooter = false;
    }
  });

  return <>{isDefaultFooter ? <DefaultFooter /> : <SimpleFooter />}</>;
}
