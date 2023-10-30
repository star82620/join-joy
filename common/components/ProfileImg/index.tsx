import React from "react";
import Image from "next/image";
import { ProfileImgProps } from "./data";

export default function ProfileImg({
  img,
  userName,
  width,
  height,
}: ProfileImgProps) {
  return (
    <div
      className={`relative rounded-full border-2 border-white outline outline-2
  outline-gray-950 ${width} ${height}`}
    >
      <Image
        src={img}
        alt={userName}
        fill
        className="object-contain rounded-full"
      />
    </div>
  );
}
