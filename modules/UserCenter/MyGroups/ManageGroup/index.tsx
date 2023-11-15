import React, { useContext } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";

import MemberCard from "./MemberCard";
import { GroupDataContext } from "@/pages/user-center/group/[id]";

import Link from "@/common/components/GeneralLink";
import ReserverInfo from "./ReserverInfo";
import GroupDetailForm from "./GroupDetailForm";
import MemberList from "./MemberList";

// 審核團員列表會在團的狀態為已成團、已預約後消失
// 參加者列表的按鈕會在活動時間開始前一小時開放
// 活動時間前一小時的時間，有沒有
// 活動是 11-14 11:30 ，前一個小時是 11-14 10:30
// 現在時間 11-14 11:00
const isWithinOneHour = (time: Date) => {
  // 現在時間
  const now = new Date();
  // 現在時間減去一小時
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

  // 確認指定時間有沒有在一小時內
  const result = time >= oneHourAgo && time <= now;

  return result;
};

export default function ManageGroup() {
  const dataContext = useContext(GroupDataContext);
  const { groupId, groupData, memberData } = dataContext;
  const {
    groupName,
    groupStatus,
    place,
    store,
    date,
    startTime,
    endTime,
    cost,
  } = groupData;

  const isStore = store !== null;
  const locationContent = isStore ? store : place;
  const timeContent = `${startTime}-${endTime}`;

  return (
    <section className="container flex md:flex-col gap-9 md:gap-4 pt-8 pb-15">
      <div className="flex flex-col gap-9 md:gap-4 grow">
        <ModalWrapper title="店家預約資訊" layout="primary">
          <ReserverInfo />
        </ModalWrapper>
        <ModalWrapper title="編輯揪團詳細資訊" layout="primary">
          <GroupDetailForm />
        </ModalWrapper>
      </div>
      <div className="w-[304px] md:w-full flex flex-col gap-9 md:gap-4">
        <MemberList />
      </div>
    </section>
  );
}
