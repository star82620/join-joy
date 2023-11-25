import React, { useContext } from "react";
import { GroupDataContext } from "../index";
import MemberCard from "./MemberCard";

export default function MembersList() {
  const { groupData, currentMemberNum } = useContext(GroupDataContext);
  const { totalMemberNum, members } = groupData;

  return (
    <section className="p-4 md:px-3 md:py-4">
      <h3 className="text-md leading-6 text-center">
        目前人數：{currentMemberNum} / {totalMemberNum}
      </h3>
      <div className="mt-4 flex flex-col gap-4 md:gap-3">
        {members.map((member) => {
          return [...Array(member.initNum)].map((_, index) => (
            <MemberCard key={index} member={member} subNum={index} />
          ));
        })}
      </div>
    </section>
  );
}
