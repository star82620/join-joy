import React from "react";
import Image from "../../FillImage";
import Link from "../../GeneralLink";
import { defaultImages } from "@/constants/defaultImages";
import GroupStatusSign from "../../GroupStatusSign";
import { GroupCardProps } from "./data";
import convertImgSrc from "@/common/helpers/convertImgSrc";

export default function GroupCard({ data }: GroupCardProps) {
  if (!data) return null;
  const {
    groupId,
    groupName,
    groupStatus,
    store,
    place,
    date,
    startTime,
    endTime,
    totalMemberNum,
    tags,
    leader,
    members,
  } = data;

  const filteredMembers = members.filter((member) => {
    return member.status !== "pending";
  });

  const isStore = store !== null;
  const groupLocation = isStore ? store.storeName : place;

  const currentMembersNum =
    filteredMembers.reduce((counts: number, member) => {
      counts = counts + member.initNum;
      return counts;
    }, 0) + leader.initNum;

  const plusNum = currentMembersNum - (filteredMembers.length + 1);

  const hasExtraNumbers = plusNum > 0;

  const middleMembers = filteredMembers.filter((_, index) => {
    return index <= 2;
  });

  const leaderProfileImgSrc = convertImgSrc(leader.profileImg);

  return (
    <Link href={`/group/${groupId}`} className="no-underline">
      <div className="w-full h-full flex flex-col justify-between bg-yellow-tint shadow-btn rounded-md border-2 px-3 py-4 flex-shrink-0 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-btn-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
        <div className="flex justify-between">
          <h3 className="grow text-lg whitespace-nowrap text-ellipsis overflow-hidden">
            {groupName}
          </h3>
          <div>
            <GroupStatusSign category="group" status={groupStatus} />
          </div>
        </div>
        <div className="grow">
          <p className="font-bold aheadIcon before:w-4 before:h-4 mt-2.5 md:mt-2 before:bg-group-card-time">
            <span>{date}</span>
            <span className="whitespace-nowrap ml-2">{`${startTime} - ${endTime}`}</span>
          </p>
          <p className="font-bold aheadIcon before:w-4 before:h-4 before:bg-group-card-location mt-2 truncate">
            {groupLocation}
          </p>
          <div className="flex justify-start items-center gap-1 mt-3 md:mt-2 text-sm text-gray-500 font-semibold whitespace-nowrap overflow-scroll scrollbar-none">
            {tags.map((tag, index, tags) => {
              const isLastTag = index === tags.length - 1;
              const lineStyle = !isLastTag ? "border-r border-gray-200 " : "";
              return (
                <p
                  key={tag}
                  className={`aheadIcon before:w-3 before:h-3 before:bg-group-card-tag before:mr-0.5 pr-1 ${lineStyle}`}
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-end border-t-2 border-gray-500 mt-2 pt-2 md:pt-1 ">
          <p className="text-sm font-bold ml-1 aheadIcon before:w-4 before:h-4 before:bg-group-card-member">
            {currentMembersNum}/{totalMemberNum}
          </p>

          <div className="flex relative">
            <div
              key={leader.userId}
              className="rounded-full bg-white shadow-profile-img -ml-2 z-10 border border-gray-50"
            >
              <Image
                src={leaderProfileImgSrc}
                alt={leader.userName}
                widthProp="w-9"
                heightProp="h-9"
                rounded
              />
            </div>
            {middleMembers.map((member, index, ary) => {
              if (index > 3) return;
              const zIndex = `z-${ary.length - index}`;
              const { profileImg, userId, userName } = member;
              const profileImgSrc = convertImgSrc(profileImg);
              return (
                <div
                  key={userId}
                  className={`rounded-full bg-white border border-gray-50 shadow-profile-img -ml-2 ${zIndex}`}
                >
                  <Image
                    src={profileImgSrc}
                    alt={userName}
                    widthProp="w-9"
                    heightProp="h-9"
                    rounded
                  />
                </div>
              );
            })}

            {hasExtraNumbers && (
              <div className="flex justify-center items-center -ml-3 w-9 h-9 bg-yellow-dark rounded-full text-sm text-gray-400 pl-1">
                +{plusNum}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
