import React from "react";
import NextImage from "next/image";
import { FillImageProps } from "./date";

export default function FillImage({
  src,
  alt,
  widthProp,
  heightProp,
  rounded,
}: FillImageProps) {
  const roundedStyle = !!rounded ? "rounded-full" : "";
  return (
    <div className={`relative ${widthProp} ${heightProp} ${roundedStyle}`}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className={`object-contain align-middle ${roundedStyle}`}
      />
    </div>
  );
}
