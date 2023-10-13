import React from "react";
import Image from "next/image";

interface Props {
  width: string;
  height: string;
}

export default function WebsiteLogo({ width, height }: Props) {
  const imageSize = `w-[${width}px] h-[${height}px]`;

  const image = {
    src: "/images/logo.jpg",
    alt: "JoinJoy-logo",
    layout: "fill",
    objectFit: "cover",
  };

  return (
    <div className={`relative ${imageSize}`}>
      <Image {...image} />
    </div>
  );
}
