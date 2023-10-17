import React from "react";
import Image from "next/image";
import { isNumericLiteral } from "typescript";

// image data
const image = {
  src: "/images/logo.jpg",
  alt: "JoinJoy-logo",
};

interface Props {
  width: string;
  height: string;
}

export default function WebsiteLogo({ width, height }: Props) {
  // 如果傳入的 width height 是數字 Number 就 `w-[${width}px]`
  // 如果是 auto full screen 就 `w-${width}`

  // const widthStyle = isNaN(parseFloat(width)) ? `w-${width}` : `w-[${width}px]`;
  // const heightStyle =
  //   Number(height) === "NaN" ? `h-${height}` : `h-[${height}px]`;
  const imageSize = `w-[${width}px] h-[${height}px]`;

  // console.log(imageSize);

  return (
    <div className={`relative w-[80px] h-[80px]`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        sizes="100%"
        className="object-cover"
      />
    </div>
  );
}
