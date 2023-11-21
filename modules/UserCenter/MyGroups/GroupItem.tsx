import React, { useContext } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import formatGroupDate from "@/common/helpers/formateDate";
import { myGroupStatusSet } from "@/constants/groupStatusSet";
import setGroupStatus from "./setGroupStatus";
import { DataContext } from "@/pages/user-center";
import { GroupItemProps } from "./data";
import { defaultGroupRatingsSet } from "../date";

function GroupItem({ group, btnSet }: GroupItemProps) {
  const groupRatingsSet =
    useContext(DataContext)?.groupRatingsSet || defaultGroupRatingsSet;

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

  // 從整包的 groupRatingsSet 裡面找到符合的 groupRating
  const [groupRating] = groupRatingsSet.filter((item) => item.id === groupId);

  // 如果有撈到 isAllRates
  const isCommented = groupRating.data?.isAllRated ?? false;

  const status = setGroupStatus(groupStatus, memberStatus);
  const statusStyle = myGroupStatusSet[status].style;
  const statusText = myGroupStatusSet[status].text;

  const isWithoutBtn = status === "cancel" || status === "reserved";

  // 抓取對應的按鈕
  const setBtn = () => {
    const isLeader = memberStatus === "leader";

    if (status === "cancel") return "cancel";

    if (status === "closed") {
      if (isCommented) return "commented";
      return "closed";
    }

    if (status === "reserved") {
      if (isLeader) return "leader";
      return "cancel";
    }

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
    <li
      key={groupId}
      className="w-full flex justify-between items-center p-2 mb-3 bg-yellow-tint text-center text-sm"
    >
      <p className="w-[8%] text-xs">
        <span className={`groupStatusDot ${statusStyle}`}>{statusText}</span>
      </p>
      <p className="w-[20%] truncate text-sm">
        <Link href={`/group/${groupId}`}>{groupName}</Link>
      </p>
      <p className="w-[20%] truncate">{location}</p>
      <p className="w-[20%] flex flex-wrap justify-center gap-2">
        <span className=" whitespace-nowrap">{groupDate}</span>
        <span className=" whitespace-nowrap">{groupTime}</span>
      </p>
      <p className="w-[10%]">
        {currentPeople}/{totalMemberNum}
      </p>
      <div className="flex items-center w-[10%] min-h-[42px]">
        {!isWithoutBtn && (
          <Button
            type="button"
            appearance="black"
            rounded
            className="w-full"
            value={groupIdString}
            isDisabled={btnDisabled}
            onClick={btnOnClick}
          >
            <span className="text-sm">{btnText}</span>
          </Button>
        )}
      </div>
    </li>
  );
}

export default GroupItem;
