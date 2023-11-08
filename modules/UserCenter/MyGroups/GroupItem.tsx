import React from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import formatDate from "@/common/helpers/formateDate";
import statusSet from "@/constants/groupStatusSet";
import { setStatus } from "./GroupsList";
import { GroupItemProps } from "./data";

export default function GroupItem({
  group,
  isOverActive,
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

  const groupStatus = setStatus(group.endTime, group.status);
  // 狀態表示
  const statusStyle = statusSet[groupStatus].style;
  const statusText = statusSet[groupStatus].text;

  const isCommented = commented;

  // 抓取對應的按鈕
  const selectBtn = () => {
    if (!isOverActive) return groupStatus;
    if (isCommented) return "commented";
    return "over";
  };
  const actionBtnId = selectBtn();
  const btnDisabled = actionBtns[actionBtnId].disabled;
  const btnOnClick = actionBtns[actionBtnId].func;
  const btnText = actionBtns[actionBtnId].text;

  const isStore = store !== "NULL";
  const location = isStore ? store.storeName : place;

  const { groupDate, formatStartTime, formatEndTime } = formatDate(
    startTime,
    endTime
  );
  const groupTime = `${formatStartTime} - ${formatEndTime}`;

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
