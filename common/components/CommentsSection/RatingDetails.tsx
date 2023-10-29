import React from "react";
import { CommentsDataType, AverageScoreRecordType } from "./data";

type RatingDetailsProps = {
  averageScore: CommentsDataType["averageScore"];
  direction?: "row" | "col";
};

export default function RatingDetails({
  averageScore,
  direction,
}: RatingDetailsProps) {
  if (typeof averageScore === "number") return null;
  const { environment, service, game, costValue }: AverageScoreRecordType =
    averageScore;
  return (
    <div>
      <p>各項目評分：</p>
      <p>
        <span>環境整潔</span>
        <span>{environment}</span>
        <span>星星星星星</span>
      </p>
      <p>
        <span>服務態度</span>
        <span>{service}</span>
        <span>星星星星星</span>
      </p>
      <p>
        <span>遊戲多樣性</span>
        <span>{game}</span>
        <span>星星星星星</span>
      </p>
      <p>
        <span>性價比</span>
        <span>{costValue}</span>
        <span>星星星星星</span>
      </p>
    </div>
  );
}
