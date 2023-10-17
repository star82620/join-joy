import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { IInputItem, IFormInput } from "@/types/IFormInput";

// 如果 errorMsg 有內容，就 show errorMsg，沒有的話就隱藏
// 如果 type === password，就 show 眼睛圖
// 點擊 eye image 改變該 input type => useState + useRef

export default function FormInput({ formSet }: IFormInput) {
  const [showPassword, setShowPassword] = useState(false); //預設看不到密碼

  return formSet.map((input) => (
    // {setShowPassword({input.inputName: false})}
    <label key={input.inputName}>
      <h3 className="text-[18px] md:text-[16px] md:leading-heading ">
        {input.label}
      </h3>
      <div className="flex items-center">
        <input
          className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
          type={input.type === "password" && showPassword ? "text" : input.type}
          name={input.inputName}
          placeholder={input.placeholder}
          required={input.required}
        ></input>
        <input
          className={clsx(
            input.type === "password" ? "inline-block" : "hidden",
            "appearance-none",
            "w-11 h-7 -ml-11 mt-2 z-10",
            "bg-center bg-no-repeat bg-yellow-tint",
            !showPassword ? "bg-eye-off" : "bg-eye-on"
          )}
          type="checkbox"
          checked={showPassword}
          onChange={(e) => {
            setShowPassword(!showPassword);
          }}
        ></input>
      </div>

      {input.errorMsg && (
        <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
          input.errorMsg
        </p>
      )}
    </label>
  ));
}
