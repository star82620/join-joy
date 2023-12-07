import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import RatingStore from "./RatingStore";
import RatingMember from "./RatingMember";
import {
  FeedbackProps,
  defaultMemberValues,
  defaultStoreValues,
  feedbackStepType,
} from "./data";

export default function Feedback({
  groupId,
  groupData,
  memberRatingData,
}: FeedbackProps) {
  if (!memberRatingData) return <div>loading</div>;
  const { isAllRated } = memberRatingData;
  if (isAllRated) return <div>該團已完成評價</div>;

  const router = useRouter();

  const [storeValues, setStoreValues] = useState(defaultStoreValues);
  const [memberValues, setMemberValues] = useState(defaultMemberValues);
  const [step, setStep] = useState<feedbackStepType>("store");

  const membersData = memberRatingData.ratingStatus;

  const isStoreRating = step === "store";
  const isMemberRating = step === "member";

  // 送出評價 something wrong here
  const handleSubmitRatings: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      // const fetchPromises = Object.values(memberValues).map(async (member) => {

      const ress = await fetch("/api/setting/feedback/ratingMember", {
        method: "POST",
        body: JSON.stringify(Object.values(memberValues)[0]),
      });

      // await Promise.all(fetchPromises);

      const res = await fetch("/api/setting/feedback/ratingStore", {
        method: "POST",
        body: JSON.stringify(storeValues),
      });

      // if (res.status) {
      alert("成功送出評論！");
      router.push("/");
      // }
    } catch (error) {
      console.error(error);
    }
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
