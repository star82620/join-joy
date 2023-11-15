import React, { useContext } from "react";
import { GroupDataContext } from "@/pages/user-center/group/[id]";
import ModalWrapper from "@/common/components/ModalWrapper";
import MemberCard from "./MemberCard";

export default function MemberList() {
  const dataContext = useContext(GroupDataContext);
  const { memberData } = dataContext;

  const pendingListData = memberData.filter(
    (member) => member.status === "pending"
  );
  const membersListData = memberData.filter(
    (member) => member.status !== "pending"
  );
  const pendingNum = pendingListData.length;
  const memberNum = membersListData.length;

  return (
    <>
      <ModalWrapper title="審核團員列表" layout="secondary">
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="font-semibold">申請者總共 {pendingNum} 位</p>
          <p className="text-sm text-blue-dark font-semibold ">全部確認</p>

          <ul className="w-full flex flex-col gap-4 md:gap-3">
            {pendingListData.map((member) => (
              <MemberCard
                key={member.memberId}
                category="pending"
                member={member}
              />
            ))}
          </ul>
        </div>
      </ModalWrapper>
      <ModalWrapper title="參加者列表" layout="secondary">
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="font-semibold ">目前人數： {memberNum} 人</p>
          <p className="text-sm font-semibold text-gray-800">
            活動當天前1小時開放點名
          </p>

          <ul className="w-full flex flex-col gap-4 md:gap-3">
            {membersListData.map((member) => (
              <MemberCard
                key={member.memberId}
                category="member"
                member={member}
              />
            ))}
          </ul>
        </div>
      </ModalWrapper>
    </>
  );
}
