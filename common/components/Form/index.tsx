import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "../GeneralButton";
import { InputType, InputErrorsType, FormProps } from "./data";

export default function Form({ inputSet, btnSet }: FormProps) {
  //管理 error 狀態的物件，會根據 inputSet 自動生成，預設 false
  const initialErrorData: InputErrorsType = {};
  inputSet.forEach((input: InputType) => {
    return (initialErrorData[input.inputName] = false);
  });
  const [inputErrors, setInputErrors] = useState(initialErrorData);

  // btnSet
  const { type, children, onClick, isDisabled, appearance, className } = btnSet;

  return (
    <form className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]">
      <FormInput
        inputSet={inputSet}
        inputErrors={inputErrors}
        setInputErrors={setInputErrors}
      />
      <Button
        type={type}
        appearance={appearance}
        onClick={onClick}
        isDisabled={isDisabled}
        className={className}
      >
        {children}
      </Button>
    </form>
  );
}
