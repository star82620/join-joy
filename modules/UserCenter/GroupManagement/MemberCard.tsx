import React, { MouseEventHandler } from "react";
import Button from "@/common/components/GeneralButton";
import ProfileImg from "@/common/components/ProfileImg";
import { MemberCardBtnsType, MemberCardProps } from "./data";
import { memberStatusFormat } from "@/constants/memberStatusFormat";
import Link from "@/common/components/GeneralLink";
import { checkMemberAttended } from "@/common/helpers/getApi/checkMemberAttended";
import { reviewGroupMember } from "@/common/helpers/getApi/reviewGroupMember";

export default function MemberCard({
  category,
  member,
  groupId,
}: MemberCardProps) {
  const { userId, profileImg, userName, status, initNum } = member;

  // 出席、缺席
  const handleAttended: MouseEventHandler<HTMLButtonElement> = (e) => {
    // 根據點擊按鈕的 種類 資料 打 API

    const userId = Number(e.currentTarget.value);
    const btnCategory = e.currentTarget.innerText;
    const isAttended = btnCategory === "出席";

    const res = checkMemberAttended(groupId, userId, isAttended);
  };

  // 接受、拒絕
  const handleReviewMember: MouseEventHandler<HTMLButtonElement> = (e) => {
    const userId = Number(e.currentTarget.value);
    const btnCategory = e.currentTarget.innerText;
    const isAccepted = btnCategory === "接受";
    const acceptedStatus = isAccepted ? "member" : "rejected";

    reviewGroupMember(groupId, userId, acceptedStatus);
  };

  const btns: MemberCardBtnsType = {
    pending: [
      {
        text: "拒絕",
        appearance: "white",
        handler: handleReviewMember,
      },
      {
        text: "接受",
        appearance: "black",
        handler: handleReviewMember,
      },
    ],
    member: [
      { text: "缺席", appearance: "white", handler: handleAttended },
      { text: "出席", appearance: "black", handler: handleAttended },
    ],
  };

  // 按鈕選項
  const btnItems = btns[category];
  const [confirmBtn, declineBtn] = btns[category];
  const confirmBtnColor = confirmBtn.appearance;
  const confirmBtnText = confirmBtn.text;
  const confirmBtnHandler = confirmBtn.handler;
  const declineBtnColor = declineBtn.appearance;
  const declineBtnText = declineBtn.text;
  const declineBtnHandler = declineBtn.handler;

  const isBtnDisabled = true;

  const memberStatus =
    status === "pending" ? "申請者" : memberStatusFormat[status];

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
              // isDisabled={isBtnDisabled}
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
