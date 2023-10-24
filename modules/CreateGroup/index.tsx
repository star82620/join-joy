import React, { useState, createContext, useEffect } from "react";
import Form from "@/common/components/Form";
import Wrapper from "@/common/components/Wrapper";
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
      <Wrapper title={title} titleStyle="font-semibold text-xl leading-[1.2]">
        <div className=" flex flex-col items-center gap-8 md:gap-6">
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
      </Wrapper>
    </div>
  );
}
