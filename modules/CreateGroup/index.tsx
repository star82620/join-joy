import React, { useState, createContext, useEffect } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import {
  defaultValues,
  ValuesContextType,
  StepContextType,
  CreateGroupPageProps,
} from "./data";

// 切換 step
const defaultStepContextValue: StepContextType = [1, () => {}];
export const StepContext = createContext<StepContextType>(
  defaultStepContextValue
);

const defaultValuesContextValue: ValuesContextType = [defaultValues, () => {}];
export const ValuesContext = createContext<ValuesContextType>(
  defaultValuesContextValue
);

export default function CreateGroup({ citiesData }: CreateGroupPageProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [values, setValues] = useState(defaultValues); //要給 api data 的資料

  console.log("values", values);

  const submitCreateGroupHandler = () => {
    // 送出開團表單

    const isHomeGroup = values.locationKind === "place";
    const city = values.cityId;
    if (isHomeGroup) {
      // 把 values 裡面的 place 加上...可以在
    }
    // place store 的 null 要在這裡處理

    // setValues((prevState) => ({ ...prevState, isHomeGroup: "locationKind" }));
  };

  return (
    <div className="container py-[88px] lg:py-18 md:py-16 sm:py-14">
      <div className="m-auto max-w-[936px]">
        <ModalWrapper title="開團表單">
          <div className="px-[124px] pt-12 pb-14 lg:px-24 md:px-4 md:pt-8 md:pb-12 flex flex-col items-center gap-8 md:gap-6">
            <StepContext.Provider value={[activeStep, setActiveStep]}>
              <ProgressBar />
              <div className="w-full">
                <ValuesContext.Provider value={[values, setValues]}>
                  <form onSubmit={submitCreateGroupHandler}>
                    {activeStep === 1 && <StepOne citiesData={citiesData} />}
                    {activeStep === 2 && <StepTwo />}
                    {activeStep === 3 && <StepThree />}
                  </form>
                </ValuesContext.Provider>
              </div>
            </StepContext.Provider>
          </div>
        </ModalWrapper>
      </div>
    </div>
  );
}