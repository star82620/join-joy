import React from "react";
import Form from "@/common/components/Form";
import { inputSet, btnSet, apiParams } from "./data";
import Wrapper from "@/common/components/Wrapper";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function CreateGroup() {
  const title = "開團表單";
  const activePage = "";
  return (
    <Wrapper title={title} titleStyle="font-semibold text-xl leading-[1.2]">
      <div className="w-[688px] md:w-full flex flex-col items-center gap-8">
        <ProgressBar active={activePage} />
        <div className="w-full">
          表單元件包含下一步按鈕
          <form>
            <StepOne />
            <StepTwo />
            <StepThree />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
