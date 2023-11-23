import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useContext,
  useState,
} from "react";
import Button from "@/common/components/GeneralButton";
import ModalWrapper from "@/common/components/ModalWrapper";
import { RatingValueContext } from ".";
import ProfileImg from "@/common/components/ProfileImg";
import RatingSelector from "./RatingSelector";
import TextArea from "@/common/components/Form/TextArea";
import { memberStatusFormat } from "@/constants/memberStatusFormat";
import { MemberBlockProps } from "./data";

export default function RatingMember() {
  const { memberValues, setMemberValues, step, setStep } =
    useContext(RatingValueContext);

  const [memberScores, setMemberScores] = useState<Record<number, number>>({});

  const ratingData = {};

  const setStepStore: MouseEventHandler<HTMLParagraphElement> = () => {
    setStep("store");
  };

  // 儲存店家評價
  const handleInputValue: ChangeEventHandler<HTMLTextAreaElement> = () => {
    setMemberValues((prevState) => ({ ...prevState, comment: "" }));
  };

  const handleScoreValue = () => {};

  const testData = [
    {
      memberId: 0,
      memberName: "乃胖胖胖",
      memberPhoto:
        "https://2be5-4-224-16-99.ngrok-free.app/upload/profile/Member_6_20231111213427.jpg",

      isRated: false,
      score: 0,
      comment: null,
    },
  ];

  const MemberBlock = ({
    status,
    userName,
    userId,
    profileImg,
  }: MemberBlockProps) => {
    const memberStatus = memberStatusFormat[status];
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
            <RatingSelector
              ratingName={userId}
              scoreValue={memberScores[userId]}
              handleScoreValue={handleScoreValue}
            />
          </div>
          <TextArea
            title="評語"
            textAreaParams={{
              maxLength: 50,
              inputName: "comment",
              value: memberValues[userId].comment,
              onChange: handleInputValue,
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container pt-14 pb-12">
      <ModalWrapper title="評論同行的夥伴" layout="primary">
        <div className="w-full flex flex-col gap-6 px-14 pt-10 pb-6">
          {testData.map((item) => {
            const { memberName, memberId, memberPhoto } = item;
            return (
              <MemberBlock
                status="member"
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
