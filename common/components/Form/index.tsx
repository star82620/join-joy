import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "../GeneralButton";
import {
  InputType,
  InputErrorsType,
  FormProps,
  ShowPasswordType,
  InputValuesType,
} from "./data";

export default function Form({ inputSet, btnSet }: FormProps) {
  //管理 error 狀態的物件，會根據 inputSet 自動生成，預設 false
  const initialErrorData: InputErrorsType = {};
  //管理「input value」狀態的物件，會根據 inputSet 自動生成，預設空值
  const initialInputValues: InputValuesType = {};
  //管理「顯示密碼」狀態的物件，會根據 inputSet 自動生成，預設 false
  const initialShowPassword: ShowPasswordType = {};

  inputSet.forEach((input: InputType) => {
    initialErrorData[input.inputName] = false;
    initialInputValues[input.inputName] = "";
    initialShowPassword[input.inputName] =
      input.type === "password" ? false : undefined;
  });
  const [inputErrors, setInputErrors] =
    useState<InputErrorsType>(initialErrorData);
  const [inputValues, setInputValues] =
    useState<InputValuesType>(initialInputValues);
  const [showPassword, setShowPassword] =
    useState<ShowPasswordType>(initialShowPassword);

  // handle 獲取欄位資料
  const handleCatchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // handle 切換密碼顯示狀態
  const handleTogglePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.dataset.target;
    if (!inputName) return;
    setShowPassword((prevState) => ({
      ...prevState,
      [inputName]: e.target.checked,
    }));
  };

  //送出表單
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 表單驗證
    console.log(inputValues);
  };

  //FormInput 要用的 props
  const inputProps = {
    inputSet: inputSet,
    handleCatchValue: handleCatchValue,
    handleTogglePassword: handleTogglePassword,
    inputErrors: inputErrors,
    setInputErrors: setInputErrors,
    inputValues: inputValues,
    showPassword: showPassword,
  };

  const { type, children, onClick, isDisabled, appearance, className } = btnSet;

  const btnHandleSelector = type === "button" ? onClick : undefined;
  return (
    <form
      className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]"
      onSubmit={handleFormSubmit}
    >
      <FormInput {...inputProps} />
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
