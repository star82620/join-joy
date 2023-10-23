import React, { useState } from "react";
import FormInput from "./FormInput";
import Button from "../GeneralButton";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
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

  const apiParams: apiParamsType = {
    apiPath: "/users/sign_up",
    method: "POST",
    data: inputValues,
  };

  function isValidForm() {
    const errors: InputErrorsType = {};
    const emptyVerify = /^.+$/;

    inputSet.map((input) => {
      if (input.required && !input.pattern) {
        errors[input.inputName] = !inputValues[input.inputName] ? true : false;
      }
      if (input.pattern) {
        errors[input.inputName] = !input.pattern.test(
          inputValues[input.inputName]
        )
          ? true
          : false;
      }
      if (input.inputName === "confirmPassword") {
        errors.confirmPassword =
          !inputValues.confirmPassword ||
          !(inputValues.confirmPassword === inputValues.password) ||
          errors.password === true
            ? true
            : false;
      }
    });

    setInputErrors(errors);
    return !Object.values(errors).includes(true);
  }

  // handle 送出表單
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 表單驗證，如果 false 就檔掉
    if (isValidForm() === false) return;
    // 打 API
    console.log("ohoh");
    console.log(inputValues);
    const data = await fetchApi(apiParams);
    if (data.status === false) return;

    // API打出去，還沒有回覆的時候要給 loading 狀態（redux）
  };

  const { type, children, onClick, isDisabled, appearance, className } = btnSet;
  const btnHandleSelector = type === "button" ? onClick : undefined;
  return (
    <form
      className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]"
      onSubmit={handleFormSubmit}
    >
      <FormInput
        inputSet={inputSet}
        inputErrors={inputErrors}
        inputValues={inputValues}
        showPassword={showPassword}
        handleCatchValue={handleCatchValue}
        handleTogglePassword={handleTogglePassword}
      />
      <Button
        type={type}
        appearance={appearance}
        onClick={btnHandleSelector}
        isDisabled={isDisabled}
        className={className}
      >
        {children}
      </Button>
    </form>
  );
}
