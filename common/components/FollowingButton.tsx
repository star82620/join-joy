import React from "react";
import Button from "./GeneralButton";
import Image from "./FillImage";

type Props = {
  isFollowed: boolean;
};

export default function FollowingButton({ isFollowed }: Props) {
  const btnAppearance = isFollowed ? "gray" : "orange";
  const btnText = isFollowed ? "已追蹤" : "追蹤";
  const iconSrc = isFollowed
    ? "/images/icon-check.svg"
    : "/images/icon-plus.svg";
  const iconAlt = isFollowed ? "icon-check" : "icon-plus";
  return (
    <Button type="button" appearance={btnAppearance}>
      <span className="flex items-center leading-6 font-semibold text-lg md:text-md md:leading-5">
        <span className="text-sm mr-1">{btnText}</span>
        <Image
          src={iconSrc}
          alt={iconAlt}
          widthProp="w-6 md:w-5"
          heightProp="h-6 md:h-5"
        />
      </span>
    </Button>
  );
}
