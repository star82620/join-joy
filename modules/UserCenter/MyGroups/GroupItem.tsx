import React, { useContext } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import formatGroupDate from "@/common/helpers/formateDate";
import statusSet from "@/constants/groupStatusSet";
import setGroupStatus from "./setGroupStatus";
import { DataContext } from "@/pages/user-center";
import { GroupItemProps } from "./data";
import { StatusType } from "@/constants/globalTypes";

function GroupItem({ group, isExpired, btnSet }: GroupItemProps) {
  const { groupRatingsSet } = useContext(DataContext);

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

  const isCommented = groupRating.data?.isAllRated ?? false;

  const isCancel = status === "已失效";

  const groupStatus = setGroupStatus(endTime, status);
  const statusStyle = statusSet[groupStatus].style;
  const statusText = statusSet[groupStatus].text;

  // 抓取對應的按鈕
  const setBtn = () => {
    // 如果狀態是已結束，查看是否有評價
    // 如果不是已結束，那就用 setGroupList 的結果去搜
    if (groupStatus === "closed") {
      if (isCommented) {
      }
    }

    if (!isExpired) return status;
    if (isExpired && !!isCommented) return "commented";
    return "closed";
  };

  // const btnId = setBtn();
  // console.log("btnId", btnId);
  // const btnDisabled = btnSet[btnId].disabled;
  const btnOnClick = btnSet["leader"].func;
  // const btnText = btnSet[btnId].text;

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
        {!isCancel && (
          <Button
            type="button"
            appearance="black"
            rounded
            className="w-full"
            value={groupIdString}
            // isDisabled={btnDisabled}
            onClick={btnOnClick}
          >
            <span data-id={groupId}>fff</span>
            {/* <span className="text-sm">{btnText}</span> */}
          </Button>
        )}
      </div>
    </li>
  );
}

export default GroupItem;
