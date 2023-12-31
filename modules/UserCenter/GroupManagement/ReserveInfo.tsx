import React, { useContext } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import { GroupDataContext } from "@/pages/user-center/group/[id]";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import TitleBlock from "@/common/components/Form/TitleBlock";
import GroupStatusSign from "@/common/components/GroupStatusSign";
import { StoreLocationProps, groupTitleSet } from "./data";

const StoreLocation = ({ storeData }: StoreLocationProps) => {
  if (!storeData) return null;
  const { storeId, storeName, address } = storeData;
  return (
    <>
      <Link href={`/store/${storeId}`}>
        <span>{storeName}</span>
      </Link>
      <p className="text-sm before:content-['（'] after:content-['）']">
        {address}
      </p>
    </>
  );
};

export default function ReserveInfo() {
  const dataContext = useContext(GroupDataContext);
  const { groupId, groupData, membersData } = dataContext;
  const {
    place,
    store,
    date,
    startTime,
    endTime,
    cost,
    groupStatus,
    totalMemberNum,
  } = groupData;

  const isOpening = groupStatus === "開團中";

  const filteredPendingData = membersData.filter(
    (member) => member.status === "pending"
  );
  const filteredMemberData = membersData.filter(
    (member) => member.status !== "pending"
  );

  const filteredMemberNum = filteredMemberData.reduce(
    (counts: number, member) => {
      counts = counts + member.initNum;
      return counts;
    },
    0
  );

  const pendingNum = filteredPendingData.length;
  const memberNum = filteredMemberNum;

  const isMemberFull = memberNum === totalMemberNum;

  const postReserve = async () => {
    try {
      const apiParams: apiParamsType = {
        apiPath: `${apiPaths["submit-reserve"]}/${groupId}`,
        method: "POST",
      };
      const res = await fetchApi(apiParams);

      if (!res) return null;
    } catch (error) {
      console.error(error);
    }
  };

  // 送出預約
  const handleSubmitReserve = () => {
    if (pendingNum !== 0) {
      return alert("請先清空審核列表");
    }
    if (!isMemberFull) {
      return alert("揪團總人數和團員人數不符");
    }

    postReserve().then((res) => {
      alert("成功送出預約");
    });
  };

  const isStore = store !== null;
  const location = isStore ? <StoreLocation storeData={store} /> : place;
  const timeContent = startTime && endTime ? `${startTime}-${endTime}` : null;

  return (
    <div className="flex flex-col justify-start gap-8 md:gap-6 px-10 py-6 md:p-4">
      <div className="flex items-center gap-2">
        <h3 className="text-sm">目前揪團狀態：</h3>
        <GroupStatusSign category="group" status={groupStatus} />
      </div>
      <div className="flex justify-between md:flex-col gap-12 md:gap-6">
        <TitleBlock
          title={groupTitleSet.location}
          aheadIconStyle="before:w-5 before:h-5 before:bg-group-location"
        >
          <div className="mt-2">{location}</div>
        </TitleBlock>
        <TitleBlock
          title={groupTitleSet.date}
          aheadIconStyle="before:w-5 before:h-5 before:bg-group-date"
        >
          <div className="mt-2">{date}</div>
        </TitleBlock>
        <TitleBlock
          title={groupTitleSet.time}
          aheadIconStyle="before:w-5 before:h-5 before:bg-group-time"
        >
          <div className="mt-2">{timeContent}</div>
        </TitleBlock>
        <TitleBlock
          title={groupTitleSet.cost}
          aheadIconStyle="before:w-5 before:h-5 before:bg-group-cost"
        >
          <div className="mt-2">{cost}</div>
        </TitleBlock>
      </div>
      {isOpening && (
        <div className="flex flex-col items-center">
          <Button
            type="button"
            appearance="orange"
            onClick={handleSubmitReserve}
            className="w-1/2 md:w-full text-xl"
          >
            送出預約
          </Button>

          <p className="mt-3 text-gray-600 font-semibold">
            預約後不可再接受團員進出
          </p>
        </div>
      )}
    </div>
  );
}
