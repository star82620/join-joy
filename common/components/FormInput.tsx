import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { InputType, InputSetType } from "@/types/types";

// 如果 errorMsg 有內容，就 show errorMsg，沒有的話就隱藏
// 如果 type === password，就 show 眼睛圖
// 點擊 eye image 改變該 input type => useState + useRef

type ShowPasswordType = Record<string, boolean>;

type PropsType = { inputSet: InputSetType };

export default function FormInput({ inputSet }: PropsType) {
  const initialState: ShowPasswordType = inputSet.reduce<ShowPasswordType>(
    (obj, input) => {
      if (input.type === "password") obj[input.inputName] = false;
      return obj;
    },
    {}
  );

  const [showPassword, setShowPassword] =
    useState<ShowPasswordType>(initialState); //預設看不到密碼

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

        {errorMsg && (
          <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
            {errorMsg}
          </p>
        )}
      </label>
    );
  });
}
