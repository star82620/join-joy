import React from "react";
import {
  GroupStatusType,
  MyGroupStatusKeyType,
} from "@/constants/types/apiTypes/group";
import { groupStatusSet, myGroupStatusSet } from "@/constants/groupStatusSet";

export type GroupStatusSignProps = {
  category: "group" | "mine";
  status: GroupStatusType | MyGroupStatusKeyType;
};

function isMyGroupStatusKey(key: any): key is MyGroupStatusKeyType {
  return ["pending", "member", "closed"].includes(key);
}

function isGroupStatusKey(key: any): key is GroupStatusType {
  return ["已結束", "已失效", "已預約", "開團中"].includes(key);
}

function renderStatusSign(color: string, text: string) {
  return (
    <div className="flex justify-center items-center whitespace-nowrap flex-shrink-0">
      <div className={`groupStatusDot ${color}`}></div>
      <div className="text-xs">{text}</div>
    </div>
  );
}

export default function GroupStatusSign({
  category,
  status,
}: GroupStatusSignProps) {
  if (category === "mine" && isMyGroupStatusKey(status)) {
    const color = myGroupStatusSet[status].style;
    const text = myGroupStatusSet[status].text;

    return renderStatusSign(color, text);
  }

  if (category === "group" && isGroupStatusKey(status)) {
    const color = groupStatusSet[status].style;
    const text = groupStatusSet[status].text;

    return renderStatusSign(color, text);
  }

  return null;
}
