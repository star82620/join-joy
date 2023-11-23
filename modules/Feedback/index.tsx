import React, { createContext, useState } from "react";
import {
  MemberValuesType,
  StepType,
  StoreValuesType,
  defaultMemberValues,
  defaultStoreValues,
} from "./data";
import RatingStore from "./RatingStore";
import RatingMember from "./RatingMember";

export const defaultRatingValueContext = {
  storeValues: defaultStoreValues,
  setStoreValues: (value: React.SetStateAction<StoreValuesType>) => {},
  memberValues: defaultMemberValues,
  setMemberValues: (value: React.SetStateAction<MemberValuesType>) => {},
  step: "store",
  setStep: (value: StepType) => {},
};

export const RatingValueContext = createContext(defaultRatingValueContext);

export default function Feedback() {
  const [storeValues, setStoreValues] = useState(defaultStoreValues);
  const [memberValues, setMemberValues] = useState(defaultMemberValues);
  const [step, setStep] = useState("store");

  const isStoreRating = step === "store";
  const isMemberRating = step === "member";

  const contextValues = {
    storeValues,
    setStoreValues,
    memberValues,
    setMemberValues,
    step,
    setStep,
  };

  return (
    <>
      <RatingValueContext.Provider value={contextValues}>
        {isStoreRating && <RatingStore />}
        {isMemberRating && <RatingMember />}
      </RatingValueContext.Provider>
    </>
  );
}
