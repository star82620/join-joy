import React, { createContext, useState } from "react";
import Image from "next/image";
import Link from "@/common/components/GeneralLink";
import ModalWrapper from "@/common/components/ModalWrapper";
import GroupInformation from "./GroupInformation";
import MembersList from "./MembersList";
import MessageBoard from "./MessageBoard";
import { gameTypeIndex } from "@/constants/wordIndexes";
import {
  titles,
  TitleProps,
  TagItemProps,
  GameItemProps,
  StoreLocationProps,
  GroupDataContextType,
  GroupProfileProps,
} from "./data";

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
export function TagItem({ tag }: TagItemProps) {
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

export const GroupDataContext = createContext<GroupDataContextType>(
  {} as GroupDataContextType
);

export default function GroupProfile({ data }: GroupProfileProps) {
  const { groupId, groupData, msgData } = data;
  const currentMemberNum = groupData.members.reduce((counter, member) => {
    counter += member.initNum;
    return counter;
  }, 0);

  const [applyNum, setApplyNum] = useState<number>(1);

  function handleJoinSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(applyNum);
    // 按下送出 API
  }

  return (
    <section className="container py-14 md:py-9">
      <div className="flex justify-center items-stretch gap-9 md:flex-col">
        <GroupDataContext.Provider
          value={{ groupId, groupData, currentMemberNum, msgData }}
        >
          <div className="flex flex-col gap-9 md:gap-8 grow">
            <div className="grow">
              <ModalWrapper title="揪團資訊" layout="primary">
                <GroupInformation
                  setApplyNum={setApplyNum}
                  handleJoinSubmit={handleJoinSubmit}
                />
              </ModalWrapper>
            </div>
            <div>
              <ModalWrapper title="留言板" layout="secondary">
                <MessageBoard />
              </ModalWrapper>
            </div>
          </div>
          <div className="w-[304px] md:w-full">
            <ModalWrapper title="參加者列表" layout="secondary">
              <MembersList />
            </ModalWrapper>
          </div>
        </GroupDataContext.Provider>
      </div>
    </section>
  );
}
