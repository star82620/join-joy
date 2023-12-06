import React, { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import Button from "@/common/components/GeneralButton";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProfileImg from "@/common/components/ProfileImg";
import TextArea from "@/common/components/Form/TextArea";

import RatingSelector from "./RatingSelector";
import { RatingStoreProps } from "./data";
import { StoreRatingDetailIdType } from "@/constants/types/apiTypes/comment";
import { StoreRatingDetailSet } from "@/constants/wordIndexes";

export default function RatingStore({
  groupId,
  groupData,
  step,
  setStep,
  storeValues,
  setStoreValues,
}: RatingStoreProps) {
  if (!groupData) return <div>load</div>;

  console.log("groupData", groupData);
  console.log("storeValues", storeValues);

  const { storeId, storeName, address, photo, date, startTime, endTime } =
    groupData;

  // 帶入 groupId
  useEffect(() => {
    setStoreValues({
      ...storeValues,
      groupId: Number(groupId),
    });
  }, []);

  // 下一步按鈕
  const setStepMember: MouseEventHandler<HTMLButtonElement> = () => {
    setStep("member");
  };

  // 儲存店家評價
  const handleInputValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.target.value;
    setStoreValues((prevState) => ({
      ...prevState,
      comment: value,
    }));
  };

  // 儲存分數
  const handleScoreValue: MouseEventHandler<HTMLElement> = (e) => {
    const ratingName = e.currentTarget.dataset
      .ratingname as StoreRatingDetailIdType;
    const target = e.target as HTMLElement;
    const scoreNum = Number(target.dataset.score);

    setStoreValues((prevState) => ({ ...prevState, [ratingName]: scoreNum }));
  };

  return (
    <div className="container pt-14 pb-[120px]">
      <ModalWrapper title="評論你所體驗的店家" layout="primary">
        <div className="pt-10 pb-14 px-14">
          <div className="flex justify-between gap-[10%]">
            <div className="w-[70%] mdg:w-full flex justify-center mdg:justify-start items-center gap-x-4 h-16 mdg:h-auto">
              <ProfileImg src={photo} alt="storeName" sizeStyle="w-16 h-16" />
              <div>
                <h3 className="text-lg truncate">{storeName}</h3>
                <p className="text-gray-700 mt-1">{address}</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h3 className="text-lg">本次遊戲時間</h3>
              <p className="mt-1">
                {date}
                <span className="ml-2">
                  {startTime}-{endTime}
                </span>
              </p>
            </div>
          </div>
          <div className="flex mdg:flex-col justify-between gap-[10%] mt-8">
            <div className="w-[70%] mdg:w-full">
              <h3 className="text-lg">各項目評分：</h3>
              <ul className="flex flex-col gap-6 mt-8 pl-4">
                {StoreRatingDetailSet.map((item) => {
                  const { id, text } = item;
                  return (
                    <li key={id} className="w-full flex justify-between">
                      <h4>{text}</h4>
                      <RatingSelector
                        key={id}
                        ratingName={id}
                        scoreValue={storeValues[id]}
                        handleScoreValue={handleScoreValue}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full mdg:mt-8">
              <TextArea
                title="評語"
                maxLength={100}
                rows={4}
                inputName="comment"
                value={storeValues.comment}
                onChange={handleInputValue}
                placeholder="留下評論並讓大家知道"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-3">
          <div className="w-full h-1 progressBar">
            <p className="w-1/2 h-full bg-gray-950"></p>
          </div>
          <Button
            type="button"
            appearance="black"
            rounded
            className="w-[80%] mt-4"
            onClick={setStepMember}
          >
            <p className="text-xl">下一步</p>
          </Button>
          <p className="mt-5 cursor-pointer underline">略過</p>
        </div>
      </ModalWrapper>
    </div>
  );
}
