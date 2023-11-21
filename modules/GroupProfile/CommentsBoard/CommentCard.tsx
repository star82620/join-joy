import React from "react";
import ProfileImg from "@/common/components/ProfileImg";
import { CommentCardProps } from "../data";

export default function CommentCard({ comment }: CommentCardProps) {
  const { userName, commentContent, commentDate } = comment;

  return (
    <div className="flex items-start gap-8">
      <ProfileImg
        src="/images/photo-user-000.png"
        alt="user"
        sizeStyle="w-16 md:w-9 h-16 md:h-9"
      />
      <div className="grow">
        <div>
          <p className="font-semibold leading-[1.2] md:text-sm md:leading-6 ">
            {userName}
          </p>
          <p className="text-gray-400 text-xs after:content-['前'] after:ml-0.5">
            {commentDate}
          </p>
        </div>
        <p className="whitespace-pre-wrap mt-2">{commentContent}</p>
      </div>
    </div>
  );
}
