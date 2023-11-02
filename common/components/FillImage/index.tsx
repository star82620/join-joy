import React from "react";
import NextImage from "next/image";
import { FillImageProps } from "./date";

export default function FillImage({ src, alt, className }: FillImageProps) {
  return (
    <div className={`relative ${className}`}>
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
