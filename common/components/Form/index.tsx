import React, { useState } from "react";
import Inputs from "./Inputs";
import Button from "../GeneralButton";
import fetchApi from "@/common/helpers/fetchApi";
import {
  InputType,
  InputErrorsType,
  FormProps,
  ShowPasswordType,
  InputValuesType,
} from "./data";

export default function Form({ inputSet, btnSet, apiParams }: FormProps) {
  const initializeInputStates = (inputs: InputType[]) => {
    //管理 error 狀態的物件，會根據 inputSet 自動生成，預設 false
    const errors: InputErrorsType = {};
    //管理「input value」狀態的物件，會根據 inputSet 自動生成，預設空值
    const values: InputValuesType = {};
    //管理「顯示密碼」狀態的物件，會根據 inputSet 自動生成，預設 false
    const show: ShowPasswordType = {};

    inputs.forEach((input: InputType) => {
      errors[input.inputName] = false;
      values[input.inputName] = "";
      show[input.inputName] = input.type === "password" ? false : undefined;
    });

    return { errors, values, show };
  };

  const { errors, values, show } = initializeInputStates(inputSet);
  const [inputErrors, setInputErrors] = useState<InputErrorsType>(errors);
  const [inputValues, setInputValues] = useState<InputValuesType>(values);
  const [showPassword, setShowPassword] = useState<ShowPasswordType>(show);

  // handle 獲取欄位資料
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // handle 切換密碼顯示狀態
  const handleShowPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.dataset.target;
    if (!inputName) return;
    setShowPassword((prevState) => ({
      ...prevState,
      [inputName]: e.target.checked,
    }));
  };

  // 表單驗證
  const checkValidForm = () => {
    const errors: InputErrorsType = {};

    inputSet.forEach((input) => {
      // 必填但是沒有指定驗證的欄位就驗證有沒有填
      if (input.required && !input.pattern) {
        errors[input.inputName] = !inputValues[input.inputName] ? true : false;
      }
      // 有指定驗證內容就依照驗證內容
      if (input.pattern) {
        errors[input.inputName] = !input.pattern.test(
          inputValues[input.inputName]
        )
          ? true
          : false;
      }
      // 確認密碼欄位
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
  };

  // handle 送出表單
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 表單驗證，如果 false 就擋掉
    const isValidForm = checkValidForm();
    if (!isValidForm) return;
    // 打 API
    apiParams.data = inputValues;
    const data = await fetchApi(apiParams);
    // 如果傳回 status === false 就不做後續 loading 動作
    if (!data.status) return;

    // API打出去，還沒有回覆的時候要給 loading 狀態（redux）
  };

  const { type, children, onClick, isDisabled, appearance, className } = btnSet;
  const btnHandleSelector = type === "button" ? onClick : undefined;
  return (
    <form
      className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]"
      onSubmit={handleFormSubmit}
    >
      <Inputs
        inputSet={inputSet}
        inputErrors={inputErrors}
        inputValues={inputValues}
        showPassword={showPassword}
        handleInputValue={handleInputValue}
        handleShowPassword={handleShowPassword}
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
