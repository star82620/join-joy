import React from "react";
import Button from "@/common/components/GeneralButton";
import ProfileImg from "@/common/components/ProfileImg";
import { GroupDataType, MemberDataItemType } from "./data";
import { memberStatusFormat } from "@/constants/memberStatusFormat";

type Props = {
  category: "pending" | "member";
  member: MemberDataItemType;
};

export default function MemberCard({ category, member }) {
  // 如果是 "pending"：拒絕、接受
  // 如果是 "member"：缺席、出席
  const btns = {
    pending: [
      {
        text: "拒絕",
        appearance: "white",
        handler: "",
      },
      {
        text: "接受",
        appearance: "black",
        handler: "",
      },
    ],
    member: [
      { text: "缺席", appearance: "white", handler: "" },
      { text: "出席", appearance: "black", handler: "" },
    ],
  };

  // 按鈕狀態改變

  const displayBtn = btns[category];
  const rejectBtnAppearance = displayBtn[0].appearance;
  const rejectBtnText = displayBtn[0].text;
  const rejectBtnHandler = displayBtn[0].handler;
  const acceptBtnAppearance = displayBtn[1].appearance;
  const acceptBtnText = displayBtn[1].text;
  const acceptBtnHandler = displayBtn[1].handler;
  const isBtnDisabled = false;

  const { memberId, userName, status, initNum } = member;

  const memberStatus =
    status === "pending" ? "申請者" : memberStatusFormat[status];

  return (
    <li className="w-full flex flex-col md:flex-row md:justify-between gap-2 p-2 rounded border-2 bg-yellow-tint shadow-btn">
      <div className="flex items-center gap-4 md:gap-2">
        <ProfileImg
          src="/images/photo-user-000.png"
          alt="user"
          widthProp="w-10 md:w-9"
          heightProp="h-10 md:h-9"
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
      <div className="flex gap-2 md:w-[128px]">
        <Button
          type="button"
          appearance={rejectBtnAppearance}
          onClick={rejectBtnHandler}
          rounded
          isDisabled={isBtnDisabled}
          className="w-full"
        >
          {rejectBtnText}
        </Button>
        <Button
          type="button"
          appearance={acceptBtnAppearance}
          onClick={acceptBtnHandler}
          rounded
          isDisabled={isBtnDisabled}
          className="w-full"
        >
          {acceptBtnText}
        </Button>
      </div>
    </li>
  );
}
