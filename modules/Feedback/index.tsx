import React, { FormEventHandler, useState } from "react";
import {
  FeedbackProps,
  defaultMemberValues,
  defaultStoreValues,
  feedbackStepType,
} from "./data";
import RatingStore from "./RatingStore";
import RatingMember from "./RatingMember";

export default function Feedback({ groupId }: FeedbackProps) {
  const [storeValues, setStoreValues] = useState(defaultStoreValues);
  const [memberValues, setMemberValues] = useState(defaultMemberValues);
  const [step, setStep] = useState<feedbackStepType>("store");

  const isStoreRating = step === "store";
  const isMemberRating = step === "member";

  // 送出評價
  const handleSubmitRatings: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("memberValues", memberValues);
    console.log("storeValues", storeValues);
  };

  return (
    <>
      <form onSubmit={handleSubmitRatings}>
        {isStoreRating && (
          <RatingStore
            groupId={Number(groupId)}
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
            memberValues={memberValues}
            setMemberValues={setMemberValues}
          />
        )}
      </form>
    </>
  );
}
