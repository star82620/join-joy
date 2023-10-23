import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  InputType,
  ShowPasswordType,
  FormInputProps,
  InputValuesType,
} from "@/common/components/Form/data";

export default function FormInput(props: FormInputProps) {
  const { inputSet, inputErrors, setInputErrors } = props;

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

  console.log("i", inputValues);

  const catchInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInputValues((prevState) => ({ ...prevState, [inputName]: value }));
  };

  // -----------------

  return inputSet.map((input: InputType) => {
    //先寫，之後再拆，這裡留下拆出來的個別 input ，剩下的邏輯要丟到 Form
    const { label, type, inputName, placeholder, required, errorMsg } = input;

    return (
      <label key={inputName}>
        <h3 className="text-[18px] md:text-[16px] md:leading-heading ">
          {label}
        </h3>
        <div className="flex items-center">
          <input
            className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            type={
              type === "password" && showPassword[inputName] ? "text" : type
            }
            name={inputName}
            placeholder={placeholder}
            required={required}
            value={inputValues[inputName]}
            onChange={catchInputValue}
          ></input>
          <input
            className={clsx(
              type === "password" ? "inline-block" : "hidden",
              "appearance-none w-11 h-7 -ml-11 mt-2 z-10 bg-center bg-no-repeat bg-yellow-tint",
              !showPassword[inputName] ? "bg-eye-hide" : "bg-eye-show"
            )}
            type="checkbox"
            checked={showPassword[inputName]}
            onChange={(e) => {
              setShowPassword(() => ({
                ...showPassword,
                [inputName]: !showPassword[inputName],
              }));
            }}
          ></input>
        </div>

        {inputErrors[inputName] && (
          <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
            {errorMsg}
          </p>
        )}
      </label>
    );
  });
}
