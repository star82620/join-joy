import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import Link from "@/common/components/GeneralLink";
import { groupStatusIndex } from "@/constants/wordIndexes";
import { GroupDataContext } from "./index";
import { gameTypeIndex } from "@/constants/wordIndexes";
import {
  titles,
  TitleProps,
  GroupInformationProps,
  StoreLocationProps,
  GameItemType,
  TagItemProps,
  GameItemProps,
} from "./data";
import { useRouter } from "next/router";
import { AuthContext } from "@/common/contexts/AuthProvider";
import { checkMemberStatus } from "@/common/helpers/checkMemberStatus";
import { MemberStatusType } from "@/constants/globalTypes";

export function StoreLocation({ store }: StoreLocationProps) {
  return (
    <p className="leading-6">
      <span className="font-medium whitespace-nowrap">
        <Link href={`/store/${store.storeId}`} target="_blank">
          {store.storeName}
        </Link>
      </span>
      <span className="text-sm whitespace-nowrap ml-2 md:ml-0 before:content-['（'] after:content-['）']">
        {store.address}
      </span>
    </p>
  );
}

export function Title({ content }: TitleProps) {
  const titleItem = titles[content];
  const { title, img } = titleItem;
  const { src, alt } = img;

  return (
    <div className="flex items-center gap-2 text-lg md:text-md mb-2 ">
      <Image src={src} alt={alt} widthProp="w-5" heightProp="h-5" />
      <h3>{title}</h3>
    </div>
  );
}

export function GameItem({ game }: GameItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="border-[0.5px] rounded bg-white p-1 text-xs text-gray-800 font-semibold">
        {gameTypeIndex[game.gameType]}
      </span>
      <span className="font-medium md:text-sm">{game.gameName}</span>
    </li>
  );
}

export function TagItem({ tag }: TagItemProps) {
  return (
    <div className="flex items-center gap-0.5 p-1 bg-white text-sm whitespace-nowrap">
      <Image
        src="/images/group-profile/icon-tag.svg"
        alt="icon-tag"
        widthProp="w-4"
        heightProp="h-4"
      />
      {tag}
    </div>
  );
}

export default function GroupInformation({
  setApplyNum,
  handleJoinSubmit,
}: GroupInformationProps) {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;

  const { groupId, groupData, currentMemberNum } = useContext(GroupDataContext);
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

  const [myMemberStatus, setMyMemberStatus] = useState<MemberStatusType | null>(
    null
  );

  useEffect(() => {
    const fetchIsLeaderAuth = async () => {
      const memberStatus = await checkMemberStatus(authData, groupId);
      console.log("b", memberStatus);
      setMyMemberStatus(memberStatus);
    };

    fetchIsLeaderAuth();
  }, [authData, groupId]);

  const isLeader = myMemberStatus === "leader";
  const isMember = myMemberStatus !== null;

  const isPlace = place !== null;

  const groupStatusText = groupStatusIndex[groupStatus];

  const remainingNum = totalMemberNum - currentMemberNum;

  const isFull = remainingNum <= 0;

  const NumOptions = () => {
    if (isFull) return null;
    return [...Array(remainingNum)].map((_, index) => (
      <option key={index} value={index + 1}>
        {index + 1}
      </option>
    ));
  };

  const JoinForm = () => (
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
          <NumOptions />
        </select>
      </div>
      <Button type="submit" appearance="orange" className="grow md:w-full">
        加入揪團
      </Button>
    </form>
  );

  const pushToGroupManagementPage = () => {
    router.push(`/user-center/group/${groupId}`);
  };

  return (
    <section className="px-12 py-8 md:px-3 md:py-4">
      <div className="flex items-center gap-2">
        <h1 className="whitespace-nowrap text-3xl md:text-2xl">{groupName}</h1>
        <span className="grow before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-green-light before:inline-block before:mr-1">
          {groupStatusText}
        </span>
        {isLeader && (
          <Button
            type="button"
            appearance="yellow-dark"
            rounded
            onClick={pushToGroupManagementPage}
          >
            管理揪團
          </Button>
        )}
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
        {!isPlace && (
          <li>
            <Title content="cost" />
            {cost}
          </li>
        )}
        <li>
          <Title content="totalMembers" />
          {totalMemberNum} 人
        </li>

        {!isPlace && (
          <li>
            <Title content="games" />
            <ul className="flex flex-col gap-4 md:gap-2">
              {games.map((game: GameItemType) => (
                <GameItem key={game.gameId} game={game} />
              ))}
            </ul>
          </li>
        )}
        <li>
          <Title content="description" />
          <span className="whitespace-pre-wrap text-sm">{description}</span>
        </li>
      </ul>
      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag) => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
      {!isFull && !isMember && <JoinForm />}
    </section>
  );
}
