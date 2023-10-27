import React from "react";
import Image from "next/image";

type Props = {
  score: number;
};

export default function Rating({ score }: Props) {
  return (
    <div className="w-fit bg-yellow-second flex justify-center items-center gap-1 px-2 py-1 md:px-1 md:py-0.5">
      <span className="font-bold text-lg leading-6 md:text-sm md:leading-[1.6]">
        {score}
      </span>
      <div className="relative inline-block w-6 h-6 md:w-5 md:h-5">
        <Image
          src="/images/icon-rating-star.svg"
          alt="icon-rating-star"
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>
    </div>
  );
}
