import GroupCard from "@/common/components/GroupCard";
import React from "react";
import { groupSet, storeSet } from "./data";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import Image from "@/common/components/FillImage";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import StoreCard from "@/common/components/StoreCard";

export type CardsSectionProps = {
  layout: "swipe" | "block";
  cardCategory: "group" | "store";
  title: string;
  moreHref: string;
  cardsData: [];
};

const CardsSection = ({
  layout,
  cardCategory,
  title,
  moreHref,
  cardsData,
}: CardsSectionProps) => {
  const isStore = cardCategory === "store";
  const isSwipe = layout === "swipe";

  const listStyle = !isSwipe
    ? "md:flex-col "
    : "gap-4 md:gap-3 overflow-auto snap-x scrollbar-none";

  const groupCardStyle = !isSwipe
    ? "md:max-w-full"
    : "snap-start snap-normal scroll-ml-12 md:scroll-ml-6 sm:scroll-ml-3";

  const storeCardStyle = "";

  const cardStyle = isStore ? storeCardStyle : groupCardStyle;

  const titleStyleWithBorder =
    "border-l-[6px] border-brown-light -ml-1.5 pl-1.5";

  const titleStyle = !isStore ? titleStyleWithBorder : "";

  const color = isStore ? "" : "text-white";

  const arrowBtnStyle =
    "border-2 p-2 md:p-1 shadow-btn active:shadow-none active:translate-x-0.5 active:translate-y-0.5 disabled:shadow-none disabled:translate-x-0.5 disabled:translate-y-0.5 bg-gray-100 hover:bg-gray-100 active:bg-gray-100 disabled:bg-gray-300 text-gray-950";

  return (
    <div>
      <div
        className={`container flex justify-between items-center font-semibold mb-10 md:mb-6 ${color}`}
      >
        <h2 className={`text-3xl md:text-xl ${titleStyle}`}>{title}</h2>
        {isSwipe && (
          <div className="flex items-center gap-8">
            <Link href={moreHref}>查看全部</Link>
            <div className="flex gap-4">
              <button type="button" className={arrowBtnStyle}>
                <Image
                  src={globalIcons["arrow-left"]}
                  alt="arrow-left"
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
              </button>
              <button type="button" className={arrowBtnStyle}>
                <Image
                  src={globalIcons["arrow-right"]}
                  alt="arrow-right"
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* 卡片列表 */}
      <div className={`container flex h-[360px] ${listStyle}`}>
        {cardsData.map((item) => {
          if (isStore) {
            return (
              <div
                key={item.storeId}
                className={`w-full h-full min-w-[376px] max-w-[376px] ${cardStyle}`}
              >
                <StoreCard data={item} />
              </div>
            );
          }

          return (
            // 卡片本人
            <div
              key={item.groupId}
              className={`w-full min-w-[284px] max-w-[284px] ${cardStyle}`}
            >
              <GroupCard data={item} />
            </div>
          );
        })}
      </div>
      {!isSwipe && (
        <div className="mt-8 md:mt-4 text-center">
          <Button
            type="button"
            appearance="brown"
            className="!px-[72px]"
            rounded
          >
            查看全部
          </Button>
        </div>
      )}
    </div>
  );
};

export default function LandingPage() {
  return (
    <section className="">
      <div className="container pb-[164px] md:pb-[120px]">search bar</div>
      <div className="bg-brown-dark pt-[72px] pb-[120px] md:pt-6 md:mb-8">
        <div className="flex flex-col gap-[96px] md:gap-6 bg-brown-dark">
          <CardsSection
            title="就差你一個成團"
            cardCategory="group"
            cardsData={groupSet}
            moreHref="/search"
            layout="swipe"
          />
          <CardsSection
            title="你 附近 的揪團"
            cardCategory="group"
            cardsData={groupSet}
            moreHref="/search"
            layout="swipe"
          />
          <CardsSection
            title="你可能會有興趣的揪團"
            cardCategory="group"
            cardsData={groupSet}
            moreHref="/search"
            layout="block"
          />
        </div>
      </div>
      <div className="pt-[124px] pb-[64px] md:py-6">
        <div className="">
          <CardsSection
            title="你 附近 的店家"
            cardCategory="store"
            cardsData={storeSet}
            moreHref="/search"
            layout="swipe"
          />
        </div>
        <div className="container mt-10">
          <Image
            src="/images/landing-page/img-home-comments.svg"
            alt="img-home-comments"
            widthProp="w-[410px]"
            heightProp="h-[150px]"
          />
          大家都說什麼
        </div>
      </div>
    </section>
  );
}
