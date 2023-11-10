import React, { useState, createContext, useEffect } from "react";
import Form from "@/common/components/Form";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

type ActiveContextType = [number, React.Dispatch<React.SetStateAction<number>>];
const defaultContextValue: ActiveContextType = [0, () => {}];
export const ActiveContext =
  createContext<ActiveContextType>(defaultContextValue);

export default function CreateGroup() {
  const title = "開團表單";
  const [activePage, setActivePage] = useState(1);
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="m-auto max-w-[936px]">
        <ModalWrapper title={title}>
          <div className="px-[124px] pt-12 pb-14 lg:px-24 md:px-4 md:pt-8 md:pb-12 flex flex-col items-center gap-8 md:gap-6">
            <ActiveContext.Provider value={[activePage, setActivePage]}>
              <ProgressBar />
              <div className="w-full">
                <form>
                  {activePage === 1 && <StepOne />}
                  {activePage === 2 && <StepTwo />}
                  {activePage === 3 && <StepThree />}
                </form>
              </div>
            </ActiveContext.Provider>
          </div>
        </ModalWrapper>
      </div>
    </div>
  );
}
