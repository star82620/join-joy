import React, { FormEventHandler, createContext, useState } from "react";
import {
  FeedbackProps,
  MemberValuesType,
  StepType,
  StoreValuesType,
  defaultMemberValues,
  defaultStoreValues,
} from "./data";
import RatingStore from "./RatingStore";
import RatingMember from "./RatingMember";

export const defaultRatingValueContext = {
  groupId: 0,
  storeValues: defaultStoreValues,
  setStoreValues: (value: React.SetStateAction<StoreValuesType>) => {},
  memberValues: defaultMemberValues,
  setMemberValues: (value: React.SetStateAction<MemberValuesType>) => {},
  step: "store",
  setStep: (value: StepType) => {},
};

export const RatingValueContext = createContext(defaultRatingValueContext);

export default function Feedback({ groupId }: FeedbackProps) {
  const [storeValues, setStoreValues] = useState(defaultStoreValues);
  const [memberValues, setMemberValues] = useState(defaultMemberValues);
  const [step, setStep] = useState("store");

  const isStoreRating = step === "store";
  const isMemberRating = step === "member";

  const contextValues = {
    groupId: Number(groupId),
    storeValues,
    setStoreValues,
    memberValues,
    setMemberValues,
    step,
    setStep,
  };

  const handleSubmitRatings: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("444");
  };

  return (
    <>
      <RatingValueContext.Provider value={contextValues}>
        <form onSubmit={handleSubmitRatings}>
          {isStoreRating && <RatingStore />}

          {isMemberRating && <RatingMember />}
        </form>
      </RatingValueContext.Provider>
    </>
  );
}
