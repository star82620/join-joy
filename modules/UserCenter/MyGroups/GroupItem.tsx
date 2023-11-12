import React from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import formatGroupDate from "@/common/helpers/formateDate";
import statusSet from "@/constants/groupStatusSet";
import { setGroupStatus } from "./GroupsList";
import { GroupItemProps } from "./data";

export default function GroupItem({
  group,
  isExpired,
  actionBtns,
}: GroupItemProps) {
  const {
    groupId,
    groupName,
    store,
    place,
    totalMemberNum,
    currentNum,
    startTime,
    endTime,
    status,
    commented,
  } = group;

  const groupStatus = setGroupStatus(endTime, status);
  // 狀態表示
  const statusStyle = statusSet[groupStatus].style;
  const statusText = statusSet[groupStatus].text;

  const isCommented = commented;

  // 抓取對應的按鈕
  const setBtn = () => {
    if (!isExpired) return groupStatus;
    if (isCommented) return "commented";
    return "closed";
  };
  const btnId = setBtn();
  const btnDisabled = actionBtns[btnId].disabled;
  const btnOnClick = actionBtns[btnId].func;
  const btnText = actionBtns[btnId].text;

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
        {currentNum}/{totalMemberNum}
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