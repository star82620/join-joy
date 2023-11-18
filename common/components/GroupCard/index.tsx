import React from "react";
import Image from "../FillImage";
import icons from "@/constants/iconsPackage/groupCardIcons";
import Link from "../GeneralLink";
import { defaultImages } from "@/constants/defaultImages";
import GroupStatusSign from "../GroupStatusSign";

export default function GroupCard({ data }) {
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
    members,
  } = data;

  const isStore = store !== null;
  const location = isStore ? store.storeName : place;

  const currentMembersNum = members.reduce((counts: number, member) => {
    counts = counts + member.initNum;
    return counts;
  }, 0);

  const plusNum = currentMembersNum - members.length;

  const filteredMembers = members.filter((_, index) => {
    return index <= 3;
  });
  const defaultProfileImg = defaultImages.userProfileImg;

  return (
    <Link href={`/group/${groupId}`} className="no-underline">
      <div className="w-full bg-yellow-tint shadow-btn rounded-md border-2 px-3 py-4">
        <div className="flex justify-between">
          <h3 className="grow text-lg whitespace-nowrap text-ellipsis overflow-hidden">
            {groupName}
          </h3>
          <div>
            <GroupStatusSign category="group" status={groupStatus} />
          </div>
        </div>
        <div className="flex justify-start items-center md:items-start gap-1 mt-2.5 md:mt-2">
          <Image
            src={icons["time"].src}
            alt={icons["time"].alt}
            widthProp="w-4"
            heightProp="h-4 md:mt-1"
          />
          <p className="flex flex-wrap gap-x-2 font-bold whitespace-pre-wrap">
            <span>{date}</span>
            <span className="whitespace-nowrap">{`${startTime} - ${endTime}`}</span>
          </p>
        </div>
        <div className="flex justify-start items-center gap-1 mt-2 md:mt-1">
          <Image
            src={icons["location"].src}
            alt={icons["location"].alt}
            widthProp="w-4"
            heightProp="h-4"
          />
          <span className="font-bold">{location}</span>
        </div>
        <div className="flex justify-start items-center gap-1 mt-3 md:mt-2 text-sm text-gray-500 font-semibold">
          {tags.map((tag, index, tags) => {
            const isLastTag = index === tags.length - 1;
            const lineStyle = !isLastTag ? "border-r border-gray-200 " : "";
            return (
              <div
                key={tag}
                className={`flex items-center gap-0.5 pr-1 ${lineStyle}`}
              >
                <Image
                  src={icons["tag"].src}
                  alt={icons["tag"].alt}
                  widthProp="w-3"
                  heightProp="h-3"
                />
                <span>{tag}</span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-500 mt-2 pt-2 md:pt-1 ">
          <div className="flex justify-start items-center gap-1">
            <Image
              src={icons["member"].src}
              alt={icons["member"].alt}
              widthProp="w-4"
              heightProp="h-4"
            />
            <span className="text-sm font-bold ml-1 ">
              {currentMembersNum}/{totalMemberNum}
            </span>
          </div>
          <div className="flex relative">
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

            <div className="flex justify-center items-center -ml-3 w-9 h-9 bg-yellow-dark rounded-full text-sm text-gray-400 pl-1">
              +{plusNum}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
