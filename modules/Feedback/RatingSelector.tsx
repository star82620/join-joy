import React from "react";
import { RatingSelectorProps } from "./data";

export default function RatingSelector({
  ratingName,
  scoreValue,
  handleScoreValue,
}: RatingSelectorProps) {
  const scoreNum = scoreValue || 0;

  const startStyle = "w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark";

  const activeStyle = (num: number) => {
    const result = scoreNum >= num ? "!bg-rating-star-dark" : "";
    return `${startStyle} ${result}`;
  };

  return (
    <div
      className="flex whitespace-nowrap"
      data-ratingname={ratingName}
      onClick={handleScoreValue}
    >
      <span className="mr-2">{scoreNum}</span>
      <div className={activeStyle(1)} data-score="1"></div>
      <div className={activeStyle(2)} data-score="2"></div>
      <div className={activeStyle(3)} data-score="3"></div>
      <div className={activeStyle(4)} data-score="4"></div>
      <div className={activeStyle(5)} data-score="5"></div>
    </div>
  );
}
