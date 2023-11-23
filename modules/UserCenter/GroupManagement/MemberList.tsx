import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
import { GroupDataContext } from "@/pages/user-center/group/[id]";
import ModalWrapper from "@/common/components/ModalWrapper";
import MemberCard from "./MemberCard";
import { MemberCardBtnsType, MemberCardContextType, MemberType } from "./data";
import { checkMemberAttended } from "@/common/helpers/getApi/checkMemberAttended";
import { reviewGroupMember } from "@/common/helpers/getApi/reviewGroupMember";

export const MemberCardContext = createContext<MemberCardContextType>({
  btns: { pending: [], member: [] },
  setMemberListData: () => {},
  date: "",
  startTime: "",
  endTime: "",
});

export default function MemberList() {
  const dataContext = useContext(GroupDataContext);
  const { groupData, membersData, groupId } = dataContext;

  const { totalMemberNum, date, startTime, endTime } = groupData;

  const [memberListData, setMemberListData] = useState<
    Record<string, MemberType[]>
  >({
    pending: [],
    member: [],
  });

  let pendingNum = 0;
  let memberNum = 0;

  const filteredPendingData = membersData.filter(
    (member) => member.status === "pending"
  );

  pendingNum = filteredPendingData.reduce((count, member) => {
    count += member.initNum;
    return count;
  }, 0);

  const filteredMemberData = membersData.filter(
    (member) => member.status !== "pending"
  );

  memberNum = filteredMemberData.reduce((count, member) => {
    count += member.initNum;
    return count;
  }, 0);

  useEffect(() => {
    setMemberListData({
      pending: filteredPendingData,
      member: filteredMemberData,
    });
  }, [membersData]);

  const remainingNum = totalMemberNum - memberNum;

  // ---

  // 出席、缺席
  const handleAttended: MouseEventHandler<HTMLButtonElement> = (e) => {
    // 根據點擊按鈕的 種類 資料 打 API

    const userId = Number(e.currentTarget.value);
    const btnCategory = e.currentTarget.innerText;
    const isAttended = btnCategory === "出席";

    checkMemberAttended(groupId, userId, isAttended).then((res) => {
      console.log(res);
      if (res.status) {
        // window.location.reload();
      }
    });
  };

  // 接受、拒絕
  const handleReviewMember: MouseEventHandler<HTMLButtonElement> = (e) => {
    const userId = Number(e.currentTarget.value);
    const btnCategory = e.currentTarget.innerText;
    const isAccepted = btnCategory === "接受";
    const acceptedStatus = isAccepted ? "member" : "rejected";

    reviewGroupMember(groupId, userId, acceptedStatus).then((res) => {
      if (res.status) {
        window.location.reload();
      }
    });
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

  return (
    <>
      <MemberCardContext.Provider
        value={{ btns, setMemberListData, date, startTime, endTime }}
      >
        <ModalWrapper title="審核團員列表" layout="secondary">
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="flex flex-wrap justify-center items-center font-semibold">
              <p>申請者總人數</p>
              <p>共 {pendingNum} 位</p>
            </div>
            <p className="text-sm -mt-1">（還可邀請 {remainingNum} 位加入）</p>
            {/* <p className="text-sm text-blue-dark font-semibold">全部接受</p> */}

            <ul className="w-full flex flex-col gap-4 md:gap-3">
              {memberListData.pending.map((member) => (
                <MemberCard
                  key={member.userId}
                  category="pending"
                  member={member}
                />
              ))}
            </ul>
          </div>
        </ModalWrapper>
        <ModalWrapper title="參加者列表" layout="secondary">
          <div className="flex flex-col items-center gap-2 p-4">
            <p className="font-semibold ">目前總人數： {memberNum} 人</p>
            <p className="text-sm font-semibold text-gray-800">
              活動開始前 1 小時開放點名
            </p>

            <ul className="w-full flex flex-col gap-4 md:gap-3">
              {memberListData.member.map((member) => (
                <MemberCard
                  key={member.userId}
                  category="member"
                  member={member}
                />
              ))}
            </ul>
          </div>
        </ModalWrapper>
      </MemberCardContext.Provider>
    </>
  );
}
