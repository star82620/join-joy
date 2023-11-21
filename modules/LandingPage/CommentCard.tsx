import React from "react";
import Image from "@/common/components/FillImage";
import Link from "@/common/components/GeneralLink";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { CommentCardProps } from "./data";
import convertImgSrc from "@/common/helpers/convertImgSrc";

const cardStyle =
  "flex flex-col w-[336px] md:w-[276px] h-[268px] md:h-[220px] p-4 md:p-3 rounded-md shadow-comment-card bg-white relative before:w-4 before:h-4 before:bg-brackets-start before:self-start before:bg-no-repeat after:w-4 after:h-4 after:bg-brackets-end after:self-end after:bg-no-repeat";

export default function CommentCard({ data }: CommentCardProps) {
  const { commentBy, msg, group, score } = data;
  const { userName, profileImg } = commentBy;
  const { storeName, storeId } = group;

  const userProfileImgSrc = convertImgSrc(profileImg);

  const ratingScore = Math.floor(score);

  const storeHref = `/store/${storeId}`;

  return (
    <Link href={storeHref} className="no-underline">
      <div
        className={`snap-start snap-normal scroll-ml-12 md:scroll-ml-6 sm:scroll-ml-3 ${cardStyle}`}
      >
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full border-2 border-yellow-light">
              <Image
                src={userProfileImgSrc}
                alt={userName}
                widthProp="w-14 md:w-10"
                heightProp="h-14 md:h-10"
                rounded
              />
            </div>
            <h4 className="mt-1 md:text-sm">{userName}</h4>
            <div className="flex gap-0.5 mt-1">
              {[...Array(ratingScore)].map((_, index) => (
                <Image
                  key={index}
                  src={globalIcons["rating-star-dark"].src}
                  alt={globalIcons["rating-star-dark"].alt}
                  widthProp="w-5 md:w-4"
                  heightProp="h-5 md:h-4"
                />
              ))}
            </div>
            <p className="mt-3 md:mt-2 text-sm md:text-xs text-center before:content-['「'] after:content-['」']">
              {msg}
            </p>
          </div>
          <div className="font-medium text-sm md:text-xs aheadIcon before:w-5 before:h-5 before:md:w-4 before:md:h-4 before:bg-group-card-location">
            {storeName}
          </div>
        </div>
      </div>
    </Link>
  );
}
