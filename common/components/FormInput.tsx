import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

// 如果 errorMsg 有內容，就 show errorMsg，沒有的話就隱藏
// 如果 type === password，就 show 眼睛圖
// 點擊 eye image 改變該 input type => useState + useRef

interface InputItem {
  label: string;
  type: string;
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
}

interface FormInputProps {
  formSet: InputItem[];
}

export default function FormInput({ formSet }: FormInputProps) {
  return formSet.map((input) => (
    <label key={input.inputName}>
      <h3 className="text-[18px] md:text-[16px] md:leading-heading ">
        {input.label}
      </h3>
      <div className="flex items-center">
        <input
          className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
          type={input.type}
          name={input.inputName}
          placeholder={input.placeholder}
          required={input.required}
        ></input>
        <span
          className={clsx(
            input.type === "password" ? "inline-block" : "hidden",
            "w-11 h-7 -ml-11 mt-2 z-10",
            "bg-eye-off",
            "bg-center bg-no-repeat bg-yellow-tint"
          )}
          onClick={() => {
            console.log("按了要改變 state");
          }}
        ></span>
      </div>

      <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
        input.errorMsg
      </p>
    </label>
  ));
}
