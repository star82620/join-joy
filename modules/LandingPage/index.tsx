import React from "react";
import { commentSet, groupSet, storeSet } from "./data";
import Image from "@/common/components/FillImage";
import CardsSection from "./CardsSection";
import CommentCard from "./CommentCard";
import SearchBar from "./SearchBar";

export default function LandingPage() {
  return (
    <section className="bg-contain bg-no-repeat bg-landing-banner-bg md:bg-landing-banner-bg-md md:bg-[center_top_-54px]">
      <div className="container flex flex-col items-center pt-11 md:pt-12 pb-[164px] md:pb-[120px]">
        <div className="mb-10">
          <Image
            src="/images/landing-page/banner-slogan.svg"
            alt="banner-slogan"
            widthProp="w-[372px] md:w-[200px]"
            heightProp="h-[190px] md:h-[110px]"
          />
        </div>
        <div className="w-full">
          <SearchBar />
          <div className="mt-[108px] md:mt-11 font-semibold text-center">
            <a id="scroll-btn" href="#groups-list"></a>
            <p className="mt-4 md:mt-3">立即瀏覽</p>
            <p className="mt-2 md:mt-1">現在正在進行的揪團</p>
          </div>
        </div>
      </div>
      {/* 卡片列表 */}
      <div
        className="bg-brown-dark pt-[72px] pb-[120px] md:pt-6 md:mb-8"
        id="groups-list"
      >
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
      <div className="pt-[124px] md:pt-6">
        <div className="">
          <CardsSection
            title="你 附近 的店家"
            cardCategory="store"
            cardsData={storeSet}
            moreHref="/search"
            layout="swipe"
          />
        </div>
        <div className="container mt-24 md:mt-10">
          <Image
            src="/images/landing-page/img-home-comments.svg"
            alt="img-home-comments"
            widthProp="w-[410px]"
            heightProp="h-[150px]"
          />
        </div>
        {/* comment */}
        <div className="flex items-center gap-6 md:gap-4 px-6 mt-20 md:mt-18 pb-[100px] md:pb-12 overflow-auto snap-x scrollbar-none landingBottomBg">
          {commentSet.map((comment) => {
            return <CommentCard key={comment.commentId} data={comment} />;
          })}
        </div>
      </div>
    </section>
  );
}
