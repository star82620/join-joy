import React from "react";
import { RatingSelectorProps } from "./data";

export default function RatingSelector({
  ratingName,
  scoreValue,
  handleScoreValue,
}: RatingSelectorProps) {
  const scoreNum = scoreValue || 0;

  return (
    <div
      className="flex whitespace-nowrap"
      data-ratingname={ratingName}
      onClick={handleScoreValue}
    >
      <span className="mr-2">{scoreNum}</span>
      <div
        className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
        data-score="1"
      ></div>
      <div
        className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
        data-score="2"
      ></div>
      <div
        className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
        data-score="3"
      ></div>
      <div
        className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
        data-score="4"
      ></div>
      <div
        className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
        data-score="5"
      ></div>
    </div>
  );
}
