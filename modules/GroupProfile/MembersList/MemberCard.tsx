import React from "react";
import Link from "@/common/components/GeneralLink";
import ProfileImg from "@/common/components/ProfileImg";
import { memberStatusIndex } from "@/constants/wordIndexes";
import { MemberCardProps } from "../data";

export default function MemberCard({ member, subNum }: MemberCardProps) {
  const { userId, userName, status, initNum } = member;
  const isSubmember = subNum > 0;
  const isSingle = initNum === 1;
  const statusText = memberStatusIndex[status];
  const cardShadow = !isSubmember ? "shadow-btn" : "";
  const profileImgSrc = !isSubmember
    ? "/images/photo-user-000.png"
    : "/images/logo.jpg";
  const CardContent = () => (
    <section
      className={`flex justify-between items-center gap-4 md:gap-2 p-2 border-2 rounded  bg-yellow-tint ${cardShadow}`}
    >
      <ProfileImg
        src={profileImgSrc}
        alt="user"
        widthProp="w-16"
        heightProp="h-16"
      />
      <div className="grow">
        <p className="text-gray-600 md:text-xs">{statusText}</p>
        <p className="md:text-sm mt-1 md:mt-0">
          {userName}
          {!isSingle && isSubmember && (
            <span className="text-xs text-gray-600 ml-2 before:content-['的朋友'] before:mr-1">
              {subNum}
            </span>
          )}
        </p>
      </div>
    </section>
  );

  if (isSubmember) {
    return <CardContent />;
  }

  return (
    <Link href={`/user/${userId}`} target="_blank" className="no-underline">
      <CardContent />
    </Link>
  );
}
