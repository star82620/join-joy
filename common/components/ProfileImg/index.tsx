import React from "react";
import Image from "next/image";
import { ProfileImgProps } from "./data";
import convertImgSrc from "@/common/helpers/convertImgSrc";

export default function ProfileImg({ src, alt, sizeStyle }: ProfileImgProps) {
  const imgSrc = convertImgSrc(src);

  return (
    <div
      className={`relative rounded-full border-2 border-white outline outline-2
  outline-gray-950 flex-shrink-0 ${sizeStyle}`}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="100%"
        className="object-contain rounded-full"
      />
    </div>
  );
}
