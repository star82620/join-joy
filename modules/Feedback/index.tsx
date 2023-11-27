import React, { FormEventHandler, useState } from "react";
import {
  FeedbackProps,
  defaultMemberValues,
  defaultStoreValues,
  feedbackStepType,
} from "./data";
import RatingStore from "./RatingStore";
import RatingMember from "./RatingMember";

export default function Feedback({
  groupId,
  groupData,
  memberRatingData,
}: FeedbackProps) {
  if (!memberRatingData) return <div>loading</div>;

  const [storeValues, setStoreValues] = useState(defaultStoreValues);
  const [memberValues, setMemberValues] = useState(defaultMemberValues);
  const [step, setStep] = useState<feedbackStepType>("store");

  console.log("11111", memberRatingData);

  const membersData = memberRatingData.ratingStatus;
  // const { isAllRated } = memberRatingData;

  const isStoreRating = step === "store";
  const isMemberRating = step === "member";

  // 送出評價
  const handleSubmitRatings: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    Object.values(memberValues).forEach((member) => {});

    console.log("memberValues", memberValues);
    console.log("storeValues", storeValues);
  };

  return (
    <>
      <form onSubmit={handleSubmitRatings}>
        {isStoreRating && (
          <RatingStore
            groupId={Number(groupId)}
            groupData={groupData}
            step={step}
            setStep={setStep}
            storeValues={storeValues}
            setStoreValues={setStoreValues}
          />
        )}

        {isMemberRating && (
          <RatingMember
            groupId={Number(groupId)}
            step={step}
            setStep={setStep}
            membersData={membersData}
            memberValues={memberValues}
            setMemberValues={setMemberValues}
          />
        )}
      </form>
    </>
  );
}
