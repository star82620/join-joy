import React from "react";
import Image from "../../FillImage";
import Link from "../../GeneralLink";
import { defaultImages } from "@/constants/defaultImages";
import GroupStatusSign from "../../GroupStatusSign";
import { GroupCardProps } from "./data";

export default function GroupCard({ data }: GroupCardProps) {
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

  const isStore = store !== null;
  const location = isStore ? store.storeName : place;

  const currentMembersNum =
    members.reduce((counts: number, member) => {
      counts = counts + member.initNum;
      return counts;
    }, 0) + leader.initNum;

  const plusNum = currentMembersNum - (members.length + 1);

  const isPlus = plusNum > 0;

  const filteredMembers = members.filter((_, index) => {
    return index <= 2;
  });
  const defaultProfileImg = defaultImages.userProfileImg;
  const leaderProfileImgSrc = leader.profileImg
    ? leader.profileImg
    : defaultProfileImg;

  return (
    <Link href={`/group/${groupId}`} className="no-underline">
      <div className="w-full h-full flex flex-col justify-between bg-yellow-tint shadow-btn rounded-md border-2 px-3 py-4 flex-shrink-0">
        <div className="flex justify-between">
          <h3 className="grow text-lg whitespace-nowrap text-ellipsis overflow-hidden">
            {groupName}
          </h3>
          <div>
            <GroupStatusSign category="group" status={groupStatus} />
          </div>
        </div>
        <div className="grow">
          <p className="font-bold aheadIcon before:w-4 before:h-4 mt-2.5 md:mt-2 before:bg-group-time">
            <span>{date}</span>
            <span className="whitespace-nowrap">{`${startTime} - ${endTime}`}</span>
          </p>
          <p className="font-bold aheadIcon before:w-4 before:h-4 before:bg-group-location mt-2">
            {location}
          </p>
          <div className="flex justify-start items-center gap-1 mt-3 md:mt-2 text-sm text-gray-500 font-semibold whitespace-nowrap overflow-scroll scrollbar-none">
            {tags.map((tag, index, tags) => {
              const isLastTag = index === tags.length - 1;
              const lineStyle = !isLastTag ? "border-r border-gray-200 " : "";
              return (
                <p
                  key={tag}
                  className={`aheadIcon before:w-3 before:h-3 before:bg-group-tag before:mr-0.5 pr-1 ${lineStyle}`}
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-500 mt-2 pt-2 md:pt-1 ">
          <p className="text-sm font-bold ml-1 aheadIcon before:w-4 before:h-4 before:bg-group-member">
            {currentMembersNum}/{totalMemberNum}
          </p>

          <div className="flex relative">
            <div
              key={leader.userId}
              className="rounded-full bg-white shadow-profile-img -ml-2 z-10"
            >
              <Image
                src={leaderProfileImgSrc}
                alt={leader.userName}
                widthProp="w-9"
                heightProp="h-9"
                rounded
              />
            </div>
            {filteredMembers.map((member, index, ary) => {
              if (index > 3) return;
              const zIndex = `z-${ary.length - index}`;
              const { profileImg, userId, userName } = member;
              const profileImgSrc = profileImg ? profileImg : defaultProfileImg;
              return (
                <div
                  key={userId}
                  className={`rounded-full bg-white shadow-profile-img -ml-2 ${zIndex}`}
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

            {isPlus && (
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
