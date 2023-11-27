import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "@/common/components/GeneralButton";
import ModalWrapper from "@/common/components/ModalWrapper";
import { RatingValueContext } from ".";
import ProfileImg from "@/common/components/ProfileImg";
import RatingSelector from "./RatingSelector";
import TextArea from "@/common/components/Form/TextArea";

import { MemberBlockProps, MemberDataItemType, MemberValuesType } from "./data";
import { memberStatusIndex } from "@/constants/wordIndexes";

const testData: MemberDataItemType[] = [
  {
    memberId: 111,
    memberName: "乃胖胖胖",
    memberPhoto:
      "https://2be5-4-224-16-99.ngrok-free.app/upload/profile/Member_6_20231111213427.jpg",

    isRated: false,
    score: 0,
    comment: null,
    status: "member",
  },
];

export default function RatingMember() {
  const { groupId, memberValues, setMemberValues, step, setStep } =
    useContext(RatingValueContext);

  const filteredData = testData.filter((item) => {
    return item.isRated === false;
  });

  let defaultMemberRating = {} as MemberValuesType;

  useEffect(() => {
    // 生成每個團員的預設資料
    filteredData.forEach((item) => {
      const { memberId } = item;
      const defaultValue = {
        groupId: groupId,
        memberId: memberId,
        score: 0,
        comment: "",
      };
      defaultMemberRating[memberId] = defaultValue;
    });

    setMemberValues(defaultMemberRating);
  }, []);

  console.log("emberValues", memberValues);

  const setStepStore: MouseEventHandler<HTMLParagraphElement> = () => {
    setStep("store");
  };

  // 儲存店家評價
  const handleInputValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const content = e.target.value;
    const userId = Number(e.target.name);
    const newValue = { ...memberValues[userId], comment: content };

    // setMemberValues({ ...memberValues, ...newValue });
  };

  // 儲存分數
  const handleScoreValue: MouseEventHandler<HTMLDivElement> = (e) => {
    const userId = Number(e.currentTarget.dataset.ratingname);
    const target = e.target as HTMLElement;
    const scoreNum = Number(target.dataset.score);

    const newValue = { ...memberValues[userId], score: scoreNum };

    // setMemberValues((prevState) => ({ ...prevState, ...newValue }));
  };

  const MemberBlock = ({
    status,
    userName,
    userId,
    profileImg,
  }: MemberBlockProps) => {
    console.log("userId", userId);
    console.log("拿資料", memberValues[userId]);

    const memberStatus = memberStatusIndex[status];
    return (
      <div className="w-full flex gap-6">
        <div>
          <p className="font-semibold">{memberStatus}</p>
          <div className="flex items-center gap-2 mt-4">
            <ProfileImg src={profileImg} alt={userName} sizeStyle="w-16 h-16" />
            <h3 className="text-lg">{userName}</h3>
          </div>
        </div>
        <div className="grow">
          <div className="flex gap-3 mb-4">
            <h4 className="text-lg">評分：</h4>
            {/* <RatingSelector
              ratingName={userId}
              scoreValue={memberValues[userId].score}
              handleScoreValue={handleScoreValue}
            /> */}
          </div>
          {/* <TextArea
            title="評語"
            maxLength={50}
            rows={4}
            inputName={userId.toString()}
            value={memberValues[userId].comment}
            onChange={handleInputValue}
          /> */}
        </div>
      </div>
    );
  };

  return (
    <div className="container pt-14 pb-12">
      <ModalWrapper title="評論同行的夥伴" layout="primary">
        <div className="w-full flex flex-col gap-6 px-14 pt-10 pb-6">
          {testData.map((item) => {
            const { status, memberName, memberId, memberPhoto } = item;
            return (
              <MemberBlock
                key={memberId}
                status={status}
                userName={memberName}
                userId={memberId}
                profileImg={memberPhoto}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center pb-3">
          <div className="w-full h-1 progressBar">
            <div className="w-full h-full bg-gray-950"></div>
          </div>
          <Button
            type="submit"
            appearance="black"
            rounded
            className="w-[80%] mt-4"
          >
            <p className="text-xl">確定送出</p>
          </Button>
          <p className="mt-5 cursor-pointer underline" onClick={setStepStore}>
            回上一頁
          </p>
        </div>
      </ModalWrapper>
    </div>
  );
}
