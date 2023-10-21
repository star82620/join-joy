import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  InputType,
  ShowPasswordType,
  FormInputProps,
} from "@/common/components/Form/data";

export default function FormInput({
  inputSet,
  inputErrors,
  setInputErrors,
}: FormInputProps) {
  // 管理「顯示密碼」狀態的物件，會根據 inputSet 自動生成，預設 false
  const initialShowPassword: ShowPasswordType = {};
  inputSet.forEach((input) => {
    if (input.type === "password") {
      initialShowPassword[input.inputName] = false;
    }
  });

  const [showPassword, setShowPassword] =
    useState<ShowPasswordType>(initialShowPassword); //預設看不到密碼

  return inputSet.map((input: InputType) => {
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
