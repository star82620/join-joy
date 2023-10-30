import React from "react";
import Image from "next/image";
import { ProfileImgProps } from "./data";

export default function ProfileImg({
  img,
  profileName,
  widthStyle,
  heightStyle,
}: ProfileImgProps) {
  return (
    <div
      className={`relative rounded-full border-2 border-white outline outline-2
  outline-gray-950 ${widthStyle} ${heightStyle}`}
    >
      <Image
        src={img}
        alt={profileName}
        fill
        className="object-contain rounded-full"
      />
    </div>
  );
}
