import React from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";

export default function GroupItem({ group, isActive }) {
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
  } = group;

  const statusStyle = groupStatus[setStatus()].style;
  const statusText = groupStatus[setStatus()].text;

  const isPlace = place === "NULL";
  const location = isPlace ? store.storeName : place;
  const groupDate = startTime.split("T")[0];
  const formatStartTime = startTime.split("T")[1].substring(0, 5);
  const formatEndTime = endTime.split("T")[1].substring(0, 5);
  const groupTime = `${groupDate} ${formatStartTime} - ${formatEndTime}`;

  return (
    <li
      key={groupId}
      className="w-full flex justify-between items-center gap-3 md:gap-2 p-2 mb-3 bg-yellow-tint text-center text-sm"
    >
      <p className="w-[10%] text-xs">
        <span className={`groupStatusDot ${statusStyle}`}>{statusText}</span>
      </p>
      <p className="w-[20%] truncate text-sm">
        <Link href={`/group/${groupId}`}>{groupName}</Link>
      </p>
      <p className="w-[20%] truncate">{location}</p>
      <p className="w-[20%]">{groupTime}</p>
      <p className="w-[10%]">
        {currentNum}/{totalMemberNum}
      </p>
      <p className="w-[10%]">
        <Button
          type="button"
          appearance="black"
          rounded
          onClick={handleCancelApply}
        >
          取消申請
        </Button>
      </p>
    </li>
  );
}
