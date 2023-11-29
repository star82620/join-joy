import React from "react";
import Image from "@/common/components/FillImage";
import { TagItemProps } from "../data";

export default function TagItem({ tag }: TagItemProps) {
  return (
    <div className="flex items-center gap-0.5 p-1 text-sm whitespace-nowrap">
      <Image
        src="/images/group-profile/icon-tag.svg"
        alt="icon-tag"
        widthProp="w-4"
        heightProp="h-4"
      />
      {tag}
    </div>
  );
}
