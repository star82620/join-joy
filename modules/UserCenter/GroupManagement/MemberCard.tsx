import React, { MouseEventHandler, useContext } from "react";
import Button from "@/common/components/GeneralButton";
import ProfileImg from "@/common/components/ProfileImg";
import {
  MemberCardBtnsType,
  MemberCardContextType,
  MemberCardProps,
} from "./data";
import { memberStatusFormat } from "@/constants/memberStatusFormat";
import Link from "@/common/components/GeneralLink";
import { checkMemberAttended } from "@/common/helpers/getApi/checkMemberAttended";
import { reviewGroupMember } from "@/common/helpers/getApi/reviewGroupMember";
import { MemberCardContext } from "./MemberList";

function isOpen(date: string, startTime: string, endTime: string) {
  // 將日期和時間轉換為 Date 對象
  const startDateTime = new Date(`${date} ${startTime}`);
  const endDateTime = new Date(`${date} ${endTime}`);

  // 計算開放時間的開始和結束
  const openTimeStart = new Date(startDateTime);
  openTimeStart.setHours(openTimeStart.getHours() - 1);

  const openTimeEnd = new Date(endDateTime);
  openTimeEnd.setHours(openTimeEnd.getHours() + 12);

  // 獲取當前時間
  const now = new Date();

  // 判斷當前時間是否在開放時間範圍內
  return now >= openTimeStart && now <= openTimeEnd;
}

export default function MemberCard({ category, member }: MemberCardProps) {
  const { btns, setMemberListData, date, startTime, endTime } =
    useContext<MemberCardContextType>(MemberCardContext);

  const { userId, profileImg, userName, status, initNum } = member;

  const isMemberCategory = category === "member";

  const btnItems = btns[category];

  const memberStatus =
    status === "pending" ? "申請者" : memberStatusFormat[status];

  const isBtnDisabled = isMemberCategory
    ? !isOpen(date, startTime, endTime)
    : false;

  return (
    <li className="w-full flex flex-col md:flex-row md:justify-between gap-2 p-2 rounded border-2 bg-yellow-tint shadow-btn">
      <Link href={`/user/${userId}`} className="no-underline">
        <div className="flex items-center gap-4 md:gap-2">
          <ProfileImg
            src={profileImg}
            alt="user"
            sizeStyle="w-10 md:w-9 h-10 md:h-9"
          />
          <div className="font-semibold">
            <p className="text-gray-600 md:text-xs">{memberStatus}</p>
            <p className="flex flex-wrap gap-2">
              <span className="whitespace-nowrap md:text-sm">{userName}</span>
              <span className="text-gray-600 font-medium whitespace-nowrap">
                共{initNum}人
              </span>
            </p>
          </div>
        </div>
      </Link>
      <div className="flex gap-2 md:w-[128px]">
        {btnItems.map((btn) => {
          const { text, appearance, handler } = btn;
          return (
            <Button
              key={text}
              type="button"
              appearance={appearance}
              onClick={handler}
              rounded
              isDisabled={isBtnDisabled}
              className="w-full"
              value={userId.toString()}
            >
              {text}
            </Button>
          );
        })}
      </div>
    </li>
  );
}
