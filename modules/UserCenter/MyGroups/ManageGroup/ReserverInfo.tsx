import React, { useContext } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import titles from "@/constants/groupProfileTitles";
import { GroupDataContext } from "@/pages/user-center/group/[id]";
import TitleBlock from "./TitleBlock";

// 送出預約
const handleSubmitReserve = () => {};

export default function ReserverInfo() {
  const dataContext = useContext(GroupDataContext);
  const { groupData } = dataContext;
  const { place, store, date, startTime, endTime, cost } = groupData;

  const StoreLocation = () => (
    <>
      <Link href={`/store/${store?.storeId}`}>
        <p>{store?.storeName}</p>
      </Link>
      <p className="text-sm before:content-['（'] after:content-['）']">
        {store?.address}
      </p>
    </>
  );

  const isStore = store !== null;
  const location = isStore ? <StoreLocation /> : place;
  const timeContent = `${startTime}-${endTime}`;

  return (
    <div className="flex flex-col justify-start gap-8 md:gap-6 px-10 py-6 md:p-4">
      <h3 className="text-sm">目前揪團狀態：開團中</h3>
      <ul className="flex md:flex-col gap-12 md:gap-6">
        <TitleBlock title="location">{location}</TitleBlock>
        <TitleBlock title="date">{date}</TitleBlock>
        <TitleBlock title="time">{timeContent}</TitleBlock>
        <TitleBlock title="cost">{cost}</TitleBlock>
      </ul>

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
    </div>
  );
}
