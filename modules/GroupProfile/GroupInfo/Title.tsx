import React from "react";
import Image from "@/common/components/FillImage";
import { TitleProps, titles } from "../data";

export default function Title({ content }: TitleProps) {
  const titleItem = titles[content];
  const { title, img } = titleItem;

  return (
    <div className="flex items-center gap-2 text-lg md:text-md mb-2 ">
      <Image {...img} widthProp="w-5" heightProp="h-5" />
      <h3>{title}</h3>
    </div>
  );
}
