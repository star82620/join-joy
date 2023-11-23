import React from "react";
import { RatingSelectorProps } from "./data";

export default function RatingSelector({
  title,
  ratingName,
  values,
  handleScoreValue,
}: RatingSelectorProps) {
  return (
    <li className="w-full flex justify-between">
      <h4>{title}</h4>
      <div
        className="flex whitespace-nowrap"
        data-ratingname={ratingName}
        onClick={handleScoreValue}
      >
        <span className="mr-2">{values[ratingName]}</span>
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
    </li>
  );
}
