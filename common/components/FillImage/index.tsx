import React from "react";
import NextImage from "next/image";
import { FillImageProps } from "./date";

export default function FillImage({
  src,
  alt,
  widthProp,
  heightProp,
}: FillImageProps) {
  return (
    <div className={`relative ${widthProp} ${heightProp}`}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className="object-contain align-middle"
      />
    </div>
  );
}
