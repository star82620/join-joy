import React, { useContext } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import formatGroupDate from "@/common/helpers/formateDate";
import { myGroupStatusSet } from "@/constants/groupStatusSet";
import setGroupStatus from "./setGroupStatus";
import { GroupItemProps } from "../date";

function GroupItem({ group, btnSet, ratingStatusSet }: GroupItemProps) {
  if (!group || !ratingStatusSet) return null;

  const {
    groupId,
    groupName,
    store,
    place,
    totalMemberNum,
    currentPeople,
    startTime,
    endTime,
    groupStatus,
    memberStatus,
  } = group;

  // 從整包的 ratingStatusSet 裡面找到符合的 ratingStatus

  const [ratingStatus] = ratingStatusSet.filter((item) => item.id === groupId);

  // 如果有撈到 isAllRates
  const isCommented = ratingStatus ? ratingStatus.data?.isAllRated : false;

  const status = setGroupStatus(groupStatus, memberStatus);
  const statusStyle = myGroupStatusSet[status].style;
  const statusText = myGroupStatusSet[status].text;

  const isWithoutBtn = status === "cancel" || status === "reserved";

  // 抓取對應的按鈕
  const setBtn = () => {
    const isLeader = memberStatus === "leader";

    // 取消
    if (status === "cancel") return "cancel";

    // 已結束
    if (status === "closed") {
      if (isCommented) return "commented";
      return "closed";
    }

    // 已預約
    if (status === "reserved") {
      if (isLeader) return "leader";
      return "cancel";
    }

    // 開團中
    if (status === "opening") return "leader";

    return status;
  };

  const btnId = setBtn();

  const btnDisabled = btnSet[btnId].disabled;
  const btnOnClick = btnSet[btnId].func;
  const btnText = btnSet[btnId].text;

  const isStore = store !== null;
  const location = isStore ? store.storeName : place;

  const { groupDate, formattedStartTime, formattedEndTime } = formatGroupDate(
    startTime,
    endTime
  );
  const groupTime = `${formattedStartTime} - ${formattedEndTime}`;
  const groupIdString = groupId.toString();

  return (
    <React.Fragment key={groupId}>
      <li className="md:hidden w-full flex justify-between items-center p-2 bg-yellow-tint text-center text-sm">
        <p className="w-[8%] text-xs">
          <span className={`groupStatusDot ${statusStyle}`}>{statusText}</span>
        </p>
        <p className="w-[20%] truncate text-sm">
          <Link href={`/group/${groupId}`}>{groupName}</Link>
        </p>
        <p className="w-[20%] truncate">{location}</p>
        <p className="w-[20%] flex flex-wrap justify-center gap-2">
          <span className="">{groupDate}</span>
          <span className="">{groupTime}</span>
        </p>
        <p className="w-[10%]">
          {currentPeople}/{totalMemberNum}
        </p>
        <div className="flex items-center justify-center w-[10%] min-h-[42px]">
          {!isWithoutBtn ? (
            <Button
              type="button"
              appearance="black"
              rounded
              value={groupIdString}
              isDisabled={btnDisabled}
              onClick={btnOnClick}
            >
              <span className="text-sm text-center whitespace-nowrap">
                {btnText}
              </span>
            </Button>
          ) : (
            <p className="w-full text-center">
              {myGroupStatusSet[status].text}
            </p>
          )}
        </div>
      </li>
      <div className="h-px bg-gray-200 last-of-type:hidden md:hidden"></div>
      <li className="hidden md:block p-4 bg-yellow-tint">
        <span className={`groupStatusDot ${statusStyle} text-xs`}>
          {statusText}
        </span>
        <div className="flex justify-between font-semibold">
          <Link href={`/group/${groupId}`}>{groupName}</Link>
          <p className="aheadIcon before:w-5 before:h-5 before:bg-group-card-member text-sm">
            {currentPeople}/{totalMemberNum}
          </p>
        </div>
        <div className="flex justify-between mt-4 text-xs">
          <div className="flex flex-col justify-center items-start">
            <p className="aheadIcon before:w-4 before:h-4 before:bg-group-card-location">
              {location}
            </p>
            <p className="aheadIcon before:w-4 before:h-4 before:bg-group-card-time mt-0.5">
              <span>{groupDate}</span>
              <span className="ml-1.5">{groupTime}</span>
            </p>
          </div>
          {!isWithoutBtn ? (
            <Button
              type="button"
              appearance="black"
              className="w-20"
              rounded
              value={groupIdString}
              isDisabled={btnDisabled}
              onClick={btnOnClick}
            >
              <span className="text-sm text-center whitespace-nowrap">
                {btnText}
              </span>
            </Button>
          ) : (
            <p className="w-full text-center">
              {myGroupStatusSet[status].text}
            </p>
          )}
        </div>
      </li>
    </React.Fragment>
  );
}

export default GroupItem;
