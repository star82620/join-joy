import React, { Children } from "react";
import Image from "@/common/components/FillImage";
import titles from "@/constants/groupProfileTitles";
import { TitleBlockProps } from "./data";

export default function TitleBlock({ title, children }: TitleBlockProps) {
  const text = titles[title].title;
  const iconSrc = titles[title].img.src;
  const iconAlt = titles[title].img.alt;
  return (
    <li>
      <h3 className="flex gap-1 text-lg md:text-md">
        <Image src={iconSrc} alt={iconAlt} widthProp="w-5" heightProp="h-5" />
        <span>{text}</span>
      </h3>
      <div className="mt-2">{children}</div>
    </li>
  );
}
