import React from "react";
import Image from "next/image";
import ModalWrapper from "@/common/components/ModalWrapper";
import Share from "@/common/components/Share";
import {
  groupData,
  icons,
  TitleProps,
  TagItemProps,
  GameItemProps,
  StoreLocationProps,
} from "./data";
import Link from "@/common/components/GeneralLink";

function StoreLocation({ store }: StoreLocationProps) {
  return (
    <p className="leading-6">
      <span className="font-medium">
        <Link href={`/store/${store.storeId}`} target="_blank">
          {store.storeName}
        </Link>
      </span>
      <span className="ml-2 text-sm ">（{store.address}）</span>
    </p>
  );
}
function Title({ content }: TitleProps) {
  const icon = icons[content];
  console.log(content);
  console.log(icon);
  const { title, src, alt } = icon;
  return (
    <div className="flex items-center gap-2 text-lg md:text-md mb-2">
      <span className="relative w-5 h-5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100%"
          className="object-contain"
        />
      </span>
      <h3>{title}</h3>
    </div>
  );
}
function TagItem({ tag }: TagItemProps) {
  return (
    <p className="flex items-center gap-0.5 p-1 bg-white text-sm">
      <span className="relative inline-block w-4 h-4">
        <Image
          src="/images/group-profile/icon-tag.svg"
          alt="icon-tag"
          fill
          sizes="100%"
          className="object-contain"
        />
      </span>
      {tag}
    </p>
  );
}
function GameItem({ game }: GameItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="border-[0.5px] rounded bg-white p-1 text-xs text-gray-800 font-semibold">
        {game.gameType}
      </span>
      <span className="font-medium md:text-sm">{game.gameName}</span>
    </li>
  );
}

export default function GroupProfile() {
  const {
    groupName,
    groupStatus,
    date,
    store,
    members,
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

  return (
    <section className="container py-14 md:py-9">
      <div className="flex justify-center items-stretch gap-9 md:flex-col">
        <div className="flex flex-col gap-9 md:gap-8 grow">
          <div className="grow">
            <ModalWrapper title="揪團資訊" layout="primary">
              <section className="px-12 py-8 md:px-3 md:py-4">
                <div className="flex items-center gap-2">
                  <h1 className="whitespace-nowrap text-xxxl md:text-xxl">
                    {groupName}
                  </h1>
                  <span className="grow">{groupStatus}</span>
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
                <div className="flex flex-col gap-6 mt-6">
                  <div>
                    <Title content="location" />
                    {isPlace ? place : <StoreLocation store={store} />}
                  </div>
                  <div>
                    <Title content="date" />
                    {date}
                  </div>
                  <div>
                    <Title content="time" />
                    {startTime}-{endTime}
                  </div>
                  <div>
                    <Title content="cost" />
                    {cost}
                  </div>
                  <div>
                    <Title content="totalMembers" />
                    {totalMemberNum} 人
                  </div>
                  <div>
                    <Title content="games" />
                    <ul className="flex flex-col gap-4 md:gap-2">
                      {games.map((game) => (
                        <GameItem key={game.gameId} game={game} />
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Title content="description" />
                    <span className="text-sm">{description}</span>
                  </div>
                  <div className="flex gap-2">
                    {tags.map((tag) => (
                      <TagItem key={tag} tag={tag} />
                    ))}
                  </div>
                  <div>加入：這個要有會員且未加入</div>
                </div>
              </section>
            </ModalWrapper>
          </div>
          <div>
            <ModalWrapper title="留言板" layout="secondary">
              <section className="px-12 pt-8 pb-10 md:px-3 md:py-4"></section>
            </ModalWrapper>
          </div>
        </div>
        <div className="w-[304px]">
          <ModalWrapper title="參加者列表" layout="secondary">
            <section className="p-4 md:px-3 md:py-4">fff</section>
          </ModalWrapper>
        </div>
      </div>
    </section>
  );
}
