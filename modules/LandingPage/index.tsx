import React from "react";
import { groupSet, storeSet } from "./data";
import Image from "@/common/components/FillImage";
import CardsSection from "./CardsSection";

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
