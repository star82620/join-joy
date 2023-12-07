import React from "react";
import ProfileImg from "@/common/components/ProfileImg";
import Link from "@/common/components/GeneralLink";
import { CommentCardProps } from "../data";

export default function CommentCard({ comment }: CommentCardProps) {
  const { userName, commentContent, commentDate, userPhoto, userId } = comment;

  return (
    <div className="flex items-start gap-10">
      <Link href={`/user/${userId}`}>
        <ProfileImg
          src={userPhoto}
          alt={userName}
          sizeStyle="w-16 md:w-9 h-16 md:h-9"
        />
      </Link>
      <div className="grow">
        <div>
          <p className="font-semibold leading-[1.2] md:text-sm md:leading-6 ">
            {userName}
          </p>
          <p className="text-gray-400 text-xs mt-1 after:content-[''] after:ml-0.5">
            {commentDate}
          </p>
        </div>
        <p className="whitespace-pre-wrap mt-2">{commentContent}</p>
      </div>
    </div>
  );
}
