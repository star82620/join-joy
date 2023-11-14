import React from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import titles from "@/constants/groupProfileTitles";
import Image from "@/common/components/FillImage";
import Button from "@/common/components/GeneralButton";

// 送出預約
const handleSubmitReserve = () => {};

export default function ManageGroup() {
  const reserveInfoTitles = ["location", "date", "time", "cost"];

  return (
    <section className="container flex gap-9 md:gap-4 pt-8 pb-15">
      <div className="flex flex-col gap-9 md:gap-4 grow">
        <ModalWrapper title="店家預約資訊" layout="primary">
          <div className="flex flex-col gap-8 md:gap-6 px-10 py-6 md:p-4">
            <h3 className="text-sm">目前揪團狀態：開團中tagggg</h3>
            <ul className="flex md:flex-col gap-12 md:gap-6">
              {reserveInfoTitles.map((title) => {
                const text = titles[title].title;
                const iconSrc = titles[title].img.src;
                const iconAlt = titles[title].img.alt;
                return (
                  <li key={text}>
                    <h3 className="flex gap-1 text-lg md:text-md">
                      <Image
                        src={iconSrc}
                        alt={iconAlt}
                        widthProp="w-5"
                        heightProp="h-5"
                      />
                      <span>{text}</span>
                    </h3>
                    <p></p>
                  </li>
                );
              })}
            </ul>

            <Button
              type="button"
              appearance="orange"
              onClick={handleSubmitReserve}
            >
              <span className="w-[182px] md:w-full text-xl">送出預約</span>
            </Button>
          </div>
        </ModalWrapper>
        <ModalWrapper title="編輯揪團詳細資訊" layout="primary">
          <div className="px-14 py-10 md:p-4">fff</div>
        </ModalWrapper>
      </div>
      <div className="w-[304px] flex flex-col gap-9 md:gap-4">
        <ModalWrapper title="審核團員列表" layout="secondary">
          <div className="p-4">fff</div>
        </ModalWrapper>
        <ModalWrapper title="參加者列表" layout="secondary">
          <div className="p-4">fff</div>
        </ModalWrapper>
      </div>
    </section>
  );
}
