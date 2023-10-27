import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import Link from "../GeneralLink";

export default function CommentCard() {
  const UserInfo = () => {
    return (
      <div className="flex justify-start items-center gap-4">
        <div className="relative w-10 h-10 rounded-full">
          <Image
            src="/images/logo.jpg"
            alt="user-photo"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <span className="font-semibold">多多</span>
      </div>
    );
  };

  return (
    <section className="flex justify-between gap-x-3 gap-y-4 border-2 rounded bg-yellow-tint p-4 md:p-3 md:flex-col">
      <div className="flex flex-col md:order-3 md:flex-row md:flex-wrap md:justify-between md:items-end min-w-[126px] overflow-scroll">
        <div className="md:hidden">
          <UserInfo />
        </div>
        <div className="grow text-sm mt-4 md:mt-6 md:px-3 md:py-2 md:border md:border-gray-300 md:w-full">
          <p>
            <span className="font-semibold">人數：</span>12人
          </p>
          <p className="mt-2">
            <span className="font-semibold">時間：</span>2023/10/2
          </p>
        </div>
        <div className="whitespace-nowrap mt-12 md:mt-6">
          <div className="relative w-5 h-5 inline-block align-middle">
            <Image
              src="/images/icon-header-user.svg"
              alt="icon-location-dark"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <span className="align-middle ml-2 md:ml-1 text-sm font-medium leading-[1.4]">
            <Link href="/">六角學院桌遊店（想要另開視窗）</Link>
          </span>
        </div>
        <p className="hidden md:block text-sm text-gray-400 whitespace-nowrap">
          評價時間：2023/7/21
        </p>
      </div>
      <article className="border-l-2 border-gray-700 pl-4 md:border-0 md:pl-0 md:order-2">
        <h4 className="text-lg md:text-md leading-[1.2] font-semibold">
          輕鬆派對揪友團
        </h4>
        <p className="mt-4 md:mt-2">
          藍天下的Nebula，每次Sunset都會有不同的Reflection。在此之間，橋梁Link著兩岸，如同Connectivity連結著過去與未來。花朵Bloom，傳遞Nature的語言。
        </p>
      </article>
      <div className="flex flex-col justify-between items-end md:order-1 md:flex-row">
        <div className="hidden md:block">
          <UserInfo />
        </div>
        <Rating score={4} />
        <p className="text-sm text-gray-400 whitespace-nowrap md:hidden">
          評價時間：2023/7/21
        </p>
      </div>
    </section>
  );
}
