import React from "react";
import Image from "../../FillImage";
import ProfileImg from "../../ProfileImg";
import convertImgSrc from "@/common/helpers/convertImgSrc";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { storeTagsIndex } from "@/constants/storeTagsIndex";
import { storeIcons } from "@/constants/iconsPackage/storeIcons";
import { defaultImages } from "@/constants/defaultImages";
import { StoreCardProps } from "./data";

export default function StoreCard({ data }: StoreCardProps) {
  const {
    storeId,
    storeName,
    address,
    openTime,
    closeTime,
    profileImg,
    cover,
    score,
    tags,
    hqTag,
    popTag,
  } = data;

  const profileImgSrc = convertImgSrc(profileImg);
  const coverPhotoSrc = cover || defaultImages.storeCoverPhoto;
  const scoreNum = Math.floor(score * 10) / 10;

  const openHours = `${openTime}-${closeTime}`;

  return (
    <div className="h-full rounded-md border-2 flex-shrink-0 bg-yellow-tint">
      {/* <Link href={`/store/${storeId}`} className="no-underline"> */}
      <div
        className="rounded-t-md w-full h-[200px] 
          bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${coverPhotoSrc})` }}
      />
      <div className="px-5 pt-3 pb-4 md:px-4 md:pb-3">
        <div>
          <div className="w-full flex justify-start gap-4">
            <ProfileImg
              src={profileImgSrc}
              alt={storeName}
              sizeStyle="w-12 h-12 md:w-11 md:h-11"
            />
            <div className="w-full grow">
              <div className="flex justify-between items-center gap-3">
                <h3 className="text-lg md:text-md max-w-[200px] md:max-w-full">
                  <p className="truncate">{storeName}</p>
                </h3>
                <span className="flex gap-1 font-bold md:text-sm">
                  {scoreNum}
                  <Image
                    src={globalIcons["rating-star-dark"].src}
                    alt={globalIcons["rating-star-dark"].alt}
                    widthProp="w-6 md:w-5"
                    heightProp="h-6 md:h-5"
                  />
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1.5 md:mt-1 max-w-[268px] md:max-w-full">
                <p className="whitespace-nowrap overflow-hidden truncate">
                  {address}
                </p>
                <p>{openHours}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 gap-y-1 border-t border-gray-500 mt-2 pt-2 md:mt-1 md:pt-1">
          {tags.map((tag, index, tags) => {
            const iconSrc = storeIcons[tag].src;
            const iconAlt = storeIcons[tag].alt;

            const isLastTag = index === tags.length - 1;
            const lineStyle = !isLastTag ? "border-r border-gray-200 pr-2" : "";
            return (
              <div key={tag} className={`flex items-center gap-1 ${lineStyle}`}>
                <span>
                  <Image
                    src={iconSrc}
                    alt={iconAlt}
                    widthProp="w-4 md:w-3.5"
                    heightProp="h-4 md:h-3.5"
                  />
                </span>
                <span className="text-sm md:text-xs text-gray-700 font-semibold">
                  {storeTagsIndex[tag]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}
