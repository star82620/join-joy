import React from "react";
import { InputType, InputsProps } from "@/common/components/Form/data";

export default function Inputs({
  inputSet,
  inputErrors,
  handleInputValue,
  handleShowPassword,
  showPassword,
  inputValues,
}: InputsProps) {
  return (
    <>
      {inputSet.map((input: InputType) => {
        const { label, type, inputName, placeholder, required, errorMsg } =
          input;
        const isPassword = type === "password";
        const switchPasswordType = (type: InputType["type"]) => {
          if (!isPassword) return;
          return showPassword[inputName] ? "text" : type;
        };
        const displayStyle = isPassword ? "inline-block" : "hidden";
        const eyeIcon = !showPassword[inputName]
          ? "bg-eye-hide"
          : "bg-eye-show";
        const isError = inputErrors[inputName];

        return (
          <label key={inputName}>
            <h3 className="text-[18px] md:text-[16px] md:leading-heading ">
              {label}
            </h3>
            <div className="flex items-center">
              <input
                className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
                type={switchPasswordType(type)}
                name={inputName}
                placeholder={placeholder}
                value={inputValues[inputName]}
                onChange={handleInputValue}
              ></input>
              {isPassword && (
                <input
                  className={`${displayStyle} ${eyeIcon} appearance-none w-11 h-7 -ml-11 mt-2 z-10 bg-center bg-no-repeat bg-yellow-tint`}
                  type="checkbox"
                  data-target={inputName}
                  checked={showPassword[inputName]}
                  onChange={handleShowPassword}
                ></input>
              )}
            </div>

            {isError && (
              <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
                {errorMsg}
              </p>
            )}
          </label>
        );
      })}
    </>
  );
}
