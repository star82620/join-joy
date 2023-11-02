import React, { useContext } from "react";
import Image from "next/image";
import Link from "@/common/components/GeneralLink";
import { memberStatusFormat } from "@/constants/memberStatusFormat";
import { GroupDataContext } from "./index";
import { MemberCardProps } from "./data";

function MemberCard({ member, index }: MemberCardProps) {
  const { userId, userName, status, initNum } = member;
  const orderNo = index;
  const isSubmember = orderNo > 0;
  const isSingle = initNum === 1;
  const statusText = memberStatusFormat[status];
  return (
    <Link href={`/user/${userId}`} target="_blank" className="no-underline">
      <section className="flex justify-between items-center gap-4 md:gap-2 p-2 border-2 rounded shadow-btn bg-yellow-tint">
        <p className="relative w-16 h-16 rounded-full border-2 border-white outline outline-2 outline-gray-950">
          <Image
            src="/images/photo-user-000.png"
            alt="user"
            fill
            sizes="100%"
            className="object-contain rounded-full"
          />
        </p>
        <div className="grow">
          <p className="text-gray-600 md:text-xs">{statusText}</p>
          <p className="md:text-sm mt-1 md:mt-0">
            {userName}
            {!isSingle && isSubmember && (
              <span className="text-xs text-gray-600 ml-2 before:content-['的朋友'] before:mr-1">
                {orderNo}
              </span>
            )}
          </p>
        </div>
      </section>
    </Link>
  );
}

export default function MembersList() {
  const { groupData, currentMemberNum } = useContext(GroupDataContext);
  const { totalMemberNum, members } = groupData;
  return (
    <section className="p-4 md:px-3 md:py-4">
      <h3 className="text-md leading-6 text-center">
        目前人數：{currentMemberNum} / {totalMemberNum}
      </h3>
      <div className="mt-4 flex flex-col gap-4 md:gap-3">
        {members.map((member) => {
          return [...Array(member.initNum)].map((_, index) => (
            <MemberCard key={index} member={member} index={index} />
          ));
        })}
      </div>
    </section>
  );
}
