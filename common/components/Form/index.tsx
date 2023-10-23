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
  const { type, children, onClick, isDisabled, appearance, className } = btnSet;

  //管理 error 狀態的物件，會根據 inputSet 自動生成，預設 false
  const initialErrorData: InputErrorsType = {};
  inputSet.forEach((input: InputType) => {
    return (initialErrorData[input.inputName] = false);
  });
  const [inputErrors, setInputErrors] = useState(initialErrorData);

  // 管理「顯示密碼」狀態的物件，會根據 inputSet 自動生成，預設 false
  const initialShowPassword: ShowPasswordType = {};
  inputSet.forEach((input) => {
    if (input.type === "password") {
      initialShowPassword[input.inputName] = false;
    }
  });

  const [showPassword, setShowPassword] =
    useState<ShowPasswordType>(initialShowPassword); //預設看不到密碼

  //管理「input value」狀態的物件，會根據 inputSet 自動生成，預設空值
  const initialInputValues: InputValuesType = {};
  inputSet.forEach((input) => {
    initialInputValues[input.inputName] = "";
  });
  const [inputValues, setInputValues] =
    useState<InputValuesType>(initialInputValues);

  // handle 獲取欄位資料
  const catchInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // handle 切換密碼顯示狀態
  const togglePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.dataset.target;
    if (!inputName) return;
    setShowPassword((prevState) => ({
      ...prevState,
      [inputName]: e.target.checked,
    }));
  };

  //FormInput 要用的 props
  const inputProps = {
    inputSet: inputSet,
    catchInputValue: catchInputValue,
    togglePassword: togglePassword,
    inputErrors: inputErrors,
    setInputErrors: setInputErrors,
    inputValues: inputValues,
    showPassword: showPassword,
  };

  const oonClick = () => {
    console.log(inputValues);
  };

  const btnHandleSelector = type === "submit" ? oonClick : onClick;
  return (
    <form className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]">
      <FormInput {...inputProps} />
      <Button
        type={type}
        appearance={appearance}
        onClick={oonClick}
        isDisabled={isDisabled}
        className={className}
      >
        {children}
      </Button>
    </form>
  );
}
