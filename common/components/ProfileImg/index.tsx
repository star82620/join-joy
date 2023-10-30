import React from "react";
import Image from "next/image";
import { ProfileImgProps } from "./data";

export default function ProfileImg({ imgSet, width, height }: ProfileImgProps) {
  const { userImg, userName } = imgSet;
  return (
    <div
      className={`relative rounded-full border-2 border-white outline outline-2
  outline-gray-950 ${width} ${height}`}
    >
      <Image
        src={userImg}
        alt={userName}
        fill
        className="object-contain rounded-full"
      />
    </div>
  );
}
