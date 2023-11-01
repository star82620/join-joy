import React from "react";
import Image from "next/image";
import Button from "@/common/components/GeneralButton";
import Share from "@/common/components/Share";
import { groupStatusFormat } from "@/constants/groupStatusFormat";
import { StoreLocation, Title, TagItem, GameItem } from "./index";
import { GroupInformationProps, GameItemType } from "./data";

export default function GroupInformation({
  groupData,
  applyNum,
  setApplyNum,
  handleJoinSubmit,
}: GroupInformationProps) {
  const {
    groupName,
    groupStatus,
    date,
    store,
    startTime,
    endTime,
    cost,
    place,
    totalMemberNum,
    games,
    description,
    tags,
  } = groupData;
  const isPlace = place !== "NULL";
  const groupStatusText = groupStatusFormat[groupStatus];
  return (
    <section className="px-12 py-8 md:px-3 md:py-4">
      <div className="flex items-center gap-2">
        <h1 className="whitespace-nowrap text-xxxl md:text-xxl">{groupName}</h1>
        <span className="grow before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-green-light before:inline-block before:mr-1">
          {groupStatusText}
        </span>
        <span
          className="relative w-6 h-6 md:w-5 md:h-5 cursor-pointer"
          onClick={Share}
        >
          <Image
            src="/images/group-profile/icon-share.svg"
            alt="icon-share"
            fill
            sizes="100%"
            className="object-contain"
          />
        </span>
      </div>
      <ul className="flex flex-col gap-6 mt-6">
        <li>
          <Title content="location" />
          {isPlace ? place : <StoreLocation store={store} />}
        </li>
        <li>
          <Title content="date" />
          {date}
        </li>
        <li>
          <Title content="time" />
          {startTime}-{endTime}
        </li>
        <li>
          <Title content="cost" />
          {cost}
        </li>
        <li>
          <Title content="totalMembers" />
          {totalMemberNum} 人
        </li>
        <li>
          <Title content="games" />
          <ul className="flex flex-col gap-4 md:gap-2">
            {games.map((game: GameItemType) => (
              <GameItem key={game.gameId} game={game} />
            ))}
          </ul>
        </li>
        <li>
          <Title content="description" />
          <span className="whitespace-pre-wrap text-sm">{description}</span>
        </li>
      </ul>
      <div className="flex gap-2 mt-3">
        {tags.map((tag) => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
      <form
        className="flex flex-wrap gap-10 md:flex-col md:items-start md:gap-4 mt-8 md:mt-6"
        onSubmit={handleJoinSubmit}
      >
        <div className="flex items-center">
          <span className="text-lg md:text-md font-semibold whitespace-nowrap">
            人數：
          </span>
          <select
            className="w-22 px-3 py-2 md:text-xs grow"
            onChange={(e) => {
              setApplyNum(Number(e.target.value));
            }}
          >
            {/* 要根據目前最大可加入人數給選項，會有那種同時送出的狀況？=>未來展望 */}
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <Button type="submit" appearance="orange" className="grow md:w-full">
          加入揪團
        </Button>
      </form>
    </section>
  );
}