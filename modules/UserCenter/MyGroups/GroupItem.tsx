import React, { useContext } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import formatGroupDate from "@/common/helpers/formateDate";
import statusSet from "@/constants/groupStatusSet";
import setGroupStatus from "./setGroupStatus";
import { DataContext } from "@/pages/user-center";
import { GroupItemProps } from "./data";

function GroupItem({ group, isExpired, btnSet }: GroupItemProps) {
  const { groupRatingsSet } = useContext(DataContext);

  console.log("RRRRRRRRRR", groupRatingsSet);

  const {
    groupId,
    groupName,
    store,
    place,
    totalMemberNum,
    currentPeople,
    startTime,
    endTime,
    status,
  } = group;

  // 從整包的 groupRatingsSet 裡面找到符合的 groupRating
  const [groupRating] = groupRatingsSet.filter((item) => item.id === groupId);

  const isCommented = groupRating.data ? groupRating.data.isAllRated : false;
  console.log("67777", groupId, isCommented);

  const groupStatus = setGroupStatus(endTime, status);
  // 狀態表示
  const statusStyle = statusSet[groupStatus].style;
  const statusText = statusSet[groupStatus].text;

  // 抓取對應的按鈕
  const setBtn = () => {
    if (!isExpired) return groupStatus;
    if (isExpired && !!isCommented) return "commented";
    return "closed";
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

  return (
    <li
      key={groupId}
      className="w-full flex justify-between items-center p-2 mb-3 bg-yellow-tint text-center text-sm"
    >
      <p className="w-[10%] text-xs">
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
      <div className="w-[10%]">
        <Button
          type="button"
          appearance="black"
          rounded
          className="w-full"
          isDisabled={btnDisabled}
          onClick={btnOnClick}
        >
          <span className="text-sm">{btnText}</span>
        </Button>
      </div>
    </li>
  );
}

export default GroupItem;
