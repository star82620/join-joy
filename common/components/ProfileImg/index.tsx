import React from "react";
import Image from "next/image";
import { ProfileImgProps } from "./data";

export default function ProfileImg({
  src,
  alt,
  widthProp,
  heightProp,
}: ProfileImgProps) {
  return (
    <div
      className={`relative rounded-full border-2 border-white outline outline-2
  outline-gray-950 ${widthProp} ${heightProp}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className="object-contain rounded-full"
      />
    </div>
  );
}
