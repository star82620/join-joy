import React from "react";
import Image from "next/image";
import { RatingDetailsProps, titles } from "./data";

export default function RatingDetails({
  averageScore,
  direction,
}: RatingDetailsProps) {
  if (typeof averageScore === "number") return null;

  const generateStars = (num: number) => {
    const numStars = Math.floor(num);
    return (
      <div className="flex flex-nowrap justify-start items-center gap-[2px] w-32 md:w-[108px]">
        {[...Array(numStars)].map((_, index) => (
          <span key={index} className="relative w-6 h-6 md:w-5 md:h-5">
            <Image
              src="/images/icon-rating-star-dark.svg"
              alt="icon-rating-star-dark"
              fill
              sizes="100%"
              className="object-contain align-middle"
            />
          </span>
        ))}
      </div>
    );
  };

  const averageScoreAry = Object.entries(averageScore);
  const titleKeys = Object.keys(titles);
  const isRow = direction === "row";

  return (
    <section>
      <p className="font-semibold leading-[1.2]">各項目評分：</p>
      <div
        className={`flex gap-6 md:gap-2 mt-4 md:flex-col ${
          isRow ? "flex-row" : "flex-col"
        }`}
      >
        {averageScoreAry.map((item) => {
          const title = item[0];
          const score = item[1];
          const isValidTitle = titleKeys.includes(title);
          if (!isValidTitle) return null;
          return (
            <div
              key={title}
              className={`flex ${
                isRow ? "justify-start" : "justify-between"
              } text-md md:text-sm`}
            >
              <span className={`font-semibold whitespace-nowrap`}>
                {titles[title]}
              </span>
              <div className="flex flex-nowrap gap-1 ml-2 ">
                <span className={`font-bold ${!isRow ? "w-6 text-right" : ""}`}>
                  {[score]}
                </span>
                {generateStars(score)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
