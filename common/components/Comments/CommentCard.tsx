import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import Link from "../GeneralLink";
import { comment, CommentType, UserInfoProps } from "./data";

export default function CommentCard() {
  const {
    userName,
    userImg,
    userId,
    groupName,
    groupMemberQtu,
    groupDate,
    storeName,
    storeId,
    msg,
    score,
    commentDate,
  } = comment;

  const UserInfo = () => {
    return (
      <Link href={`/user/${userId}`} className="no-underline">
        <div className="flex justify-start items-center gap-4">
          <div className="relative w-10 h-10 rounded-full">
            <Image
              src={userImg}
              alt="user-photo"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <span className="font-semibold">{userName}</span>
        </div>
      </Link>
    );
  };
  const CommentDate = () => {
    return (
      <p className="text-sm md:text-xs text-gray-400 whitespace-nowrap">
        評價時間：{commentDate}
      </p>
    );
  };
  const GroupLocation = () => {
    return (
      <div className="whitespace-nowrap mt-12 md:mt-6">
        <div className="relative w-5 h-5 inline-block align-middle">
          {/* 想把這個寫成 before bg */}
          <Image
            src="/images/icon-header-user.svg"
            alt="icon-location-dark"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <span className="align-middle ml-2 md:ml-1 text-sm font-medium leading-[1.4]">
          <Link href={`/store/${storeId}`} target="_blank">
            {storeName}
          </Link>
        </span>
      </div>
    );
  };
  const GroupInfo = () => {
    return (
      <div className="grow text-sm mt-4 md:mt-6 md:px-3 md:py-2 md:border md:border-gray-300 md:w-full">
        <p>
          <span className="font-semibold">人數：</span>
          {groupMemberQtu}人
        </p>
        <p className="mt-2">
          <span className="font-semibold">時間：</span>
          {groupDate}
        </p>
      </div>
    );
  };

  return (
    <section className="flex justify-between gap-x-3 border-2 rounded bg-yellow-tint p-4 md:p-3 md:flex-col shadow-btn">
      <div className="flex flex-col md:order-3 md:flex-row md:flex-wrap md:justify-between md:items-end min-w-[126px] overflow-scroll">
        <div className="md:hidden">
          <UserInfo />
        </div>
        <GroupInfo />
        <GroupLocation />
        <div className="hidden md:block md:mt-2">
          <CommentDate />
        </div>
      </div>
      <article className="border-l-2 border-gray-700 pl-4 md:border-0 md:pl-0 md:order-2">
        <h4 className="text-lg md:text-md leading-[40px] md:leading-[1.2] md:mt-2 font-semibold">
          {groupName}
        </h4>
        <p className="mt-4 md:mt-2">{msg}</p>
      </article>
      <div className="flex flex-col justify-between items-end md:order-1 md:flex-row">
        <div className="hidden md:block">
          <UserInfo />
        </div>
        <Rating score={score} />
        <div className="md:hidden">
          <CommentDate />
        </div>
      </div>
    </section>
  );
}
