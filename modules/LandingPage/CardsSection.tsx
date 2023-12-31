import React from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import Image from "@/common/components/FillImage";
import GroupCard from "@/common/components/search/GroupCard";
import StoreCard from "@/common/components/search/StoreCard";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { CardsSectionProps } from "./data";

const arrowBtnStyle =
  "border-2 p-2 md:p-1 shadow-btn active:shadow-none active:translate-x-0.5 active:translate-y-0.5 disabled:shadow-none disabled:translate-x-0.5 disabled:translate-y-0.5 bg-gray-100 hover:bg-gray-100 active:bg-gray-100 disabled:bg-gray-300 text-gray-950";

export default function CardsSection({
  layout,
  cardCategory,
  title,
  subTitle,
  handleSeeMore,
  cardsData,
}: CardsSectionProps) {
  const isEmpty = typeof cardsData === "string";

  const isStore = cardCategory === "store";

  const isSwipe = layout === "swipe";

  // 卡片列表
  const listStyle = !isSwipe
    ? "md:flex-col flex-wrap"
    : "overflow-auto snap-x scrollbar-none";

  const widthClass = isStore
    ? "max-w-[376px] min-w-[376px]"
    : "max-w-[280px] min-w-[280px]";

  const storeCardStyle = "min-h-[320px]";

  const groupCardStyle = !isSwipe
    ? "md:max-w-full "
    : "snap-start snap-normal scroll-ml-12 md:scroll-ml-6 sm:scroll-ml-3 ";

  const cardStyle = isStore ? storeCardStyle : groupCardStyle;

  const titleStyleWithBorder =
    "border-l-[6px] border-brown-light -ml-1.5 pl-1.5";

  const titleStyle = !isStore ? titleStyleWithBorder : "";

  const textColor = isStore ? "" : "text-white";

  const Cards = () => {
    if (isEmpty) return <p className={textColor}>目前還沒有揪團 (〒︿〒)</p>;
    return (
      <>
        {cardsData.map((item) => {
          const isStore = "storeId" in item;
          return (
            <div
              key={isStore ? item.storeId : item.groupId}
              className={`w-full md-min-w-80 ${widthClass} ${cardStyle}`}
            >
              {isStore ? <StoreCard data={item} /> : <GroupCard data={item} />}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div
        className={`container flex justify-between items-center font-semibold mb-10 md:mb-6 ${textColor}`}
      >
        <div className="flex items-end gap-3">
          <h2 className={`text-3xl md:text-xl ${titleStyle}`}>{title}</h2>
          <div className="border-l-2 pl-2">{subTitle}</div>
        </div>
        {isSwipe && (
          <div className="flex items-center gap-8">
            <button type="button" onClick={handleSeeMore}>
              查看全部
            </button>
            <div className="flex gap-4">
              <button type="button" className={arrowBtnStyle}>
                <Image
                  src={globalIcons["arrow-left"].src}
                  alt={globalIcons["arrow-left"].alt}
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
              </button>
              <button type="button" className={arrowBtnStyle}>
                <Image
                  src={globalIcons["arrow-right"].src}
                  alt={globalIcons["arrow-right"].alt}
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 卡片列表 */}
      <div className={`container flex gap-4 md:gap-3 ${listStyle}`}>
        {Cards()}
      </div>

      {!isSwipe && (
        <div className="mt-8 md:mt-4 text-center">
          <Button
            type="button"
            appearance="brown"
            className="!px-[72px]"
            onClick={handleSeeMore}
            rounded
          >
            查看全部
          </Button>
        </div>
      )}
    </div>
  );
}
