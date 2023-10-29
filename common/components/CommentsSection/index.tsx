import React from "react";
import Rating from "./Rating";
import CommentCard from "./CommentCard";
import RatingDetails from "./RatingDetails";
import { CommentType, CommentsSectionProps } from "./data";

export default function CommentsSection({ data }: CommentsSectionProps) {
  if (!data) return null;
  const { averageScore, comments } = data;
  const averageScoreSelector =
    typeof averageScore === "number" ? averageScore : averageScore.overall;

  return (
    <section className="border">
      <div className="flex justify-start items-center gap-4 md:gap-3">
        <Rating score={averageScoreSelector} />
        <span className="md:text-sm">{comments.length} 評語</span>
      </div>
      {/* 細項評分 */}
      <RatingDetails averageScore={averageScore} />
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="whitespace-nowrap">看看大家都說了什麼：</span>
          <div>
            <span className="md:hidden">排序依據：</span>
            <select>
              <option>最新</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3 md:mt-4">
          {comments.map((comment) => (
            <CommentCard key={comment.commentBy.userId} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
}
