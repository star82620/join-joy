import React from "react";
import {
  groupStatusSet,
  myGroupStatusSet,
  groupStatusKeyType,
  myGroupStatusKeyType,
} from "@/constants/groupStatusSet";

export type GroupStatusSignProps = {
  category: "group" | "mine";
  status: string;
};

export default function GroupStatusSign({
  category,
  status,
}: GroupStatusSignProps) {
  const reference = category === "mine" ? myGroupStatusSet : groupStatusSet;
  console.log(reference);
  console.log(status);
  console.log(reference[status]);
  const color = reference[status]?.style;
  const text = reference[status]?.text;
  return (
    <div className="flex justify-center items-center whitespace-nowrap flex-shrink-0">
      <div className={`groupStatusDot ${color}`}></div>
      <div className="text-xs">{text}</div>
    </div>
  );
}
