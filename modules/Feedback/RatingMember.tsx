import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
} from "react";
import Button from "@/common/components/GeneralButton";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProfileImg from "@/common/components/ProfileImg";
import TextArea from "@/common/components/Form/TextArea";
import { memberStatusIndex } from "@/constants/wordIndexes";
import RatingSelector from "./RatingSelector";
import { MemberRatingValuesType } from "@/constants/types/apiTypes/comment";
import { MemberBlockProps, RatingMemberProps } from "./data";

export default function RatingMember({
  groupId,
  membersData,
  memberValues,
  setMemberValues,
  step,
  setStep,
}: RatingMemberProps) {
  // 找出尚未評價的成員
  const filteredData = membersData.filter((item) => {
    return item.isRated === false;
  });

  // 生成每個團員的預設資料
  const defaultMemberRating = filteredData.reduce((members, item) => {
    members[item.memberId] = {
      groupId: groupId,
      memberId: item.memberId,
      score: 0,
      comment: "",
    };
    return members;
  }, {} as MemberRatingValuesType);

  console.log("emberValues", memberValues);

  useEffect(() => {
    setMemberValues(defaultMemberRating);
  }, []);

  // 上一頁
  const setStepStore: MouseEventHandler<HTMLParagraphElement> = () => {
    setStep("store");
  };

  // 儲存店家評價
  const handleInputValue: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      const content = e.target.value;
      const userId = Number(e.target.name);

      setMemberValues((prevValues) => ({
        ...prevValues,
        [userId]: {
          ...prevValues[userId],
          comment: content,
        },
      }));
    },
    [setMemberValues]
  );

  // 儲存分數
  const handleScoreValue: MouseEventHandler<HTMLDivElement> = (e) => {
    const userId = Number(e.currentTarget.dataset.ratingname);
    const target = e.target as HTMLElement;
    const scoreNum = Number(target.dataset.score);

    setMemberValues((prevValues) => ({
      ...prevValues,
      [userId]: {
        ...prevValues[userId],
        score: scoreNum,
      },
    }));
  };

  const MemberBlock = ({
    status,
    userName,
    userId,
    profileImg,
  }: MemberBlockProps) => {
    if (!memberValues[userId]) return <div>Loading...</div>;

    const memberStatus = memberStatusIndex[status];

    return (
      <div className="w-full flex gap-6">
        <div className="w-[20%]">
          <p className="font-semibold">{memberStatus}</p>
          <div className="flex items-center gap-2 mt-4">
            <ProfileImg src={profileImg} alt={userName} sizeStyle="w-16 h-16" />
            <p className="text-lg font-semibold truncate">{userName}</p>
          </div>
        </div>
        <div className="grow">
          <div className="flex gap-3 mb-4">
            <h4 className="text-lg">評分：</h4>
            <RatingSelector
              ratingName={userId}
              scoreValue={memberValues[userId].score}
              handleScoreValue={handleScoreValue}
            />
          </div>
          <TextArea
            title="評語"
            maxLength={50}
            rows={4}
            inputName={userId.toString()}
            value={memberValues[userId].comment}
            onChange={handleInputValue}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container pt-14 pb-12">
      <ModalWrapper title="評論同行的夥伴" layout="primary">
        <div className="w-full flex flex-col gap-10 px-14 pt-10 pb-6">
          {filteredData.map((item) => {
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
