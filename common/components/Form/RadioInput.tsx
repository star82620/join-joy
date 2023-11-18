import React, { ChangeEventHandler, useState } from "react";
import { RadioInputProps, defaultErrorText } from "./data";

export default function RadioInput({
  options,
  onChange,
  required,
  errorMsg,
  className,
  isError,
}: RadioInputProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  // const isError = required && selectedValue === null;

  const errorText = errorMsg ?? defaultErrorText;

  return (
    <div className="flex">
      <div
        className={`flex flex-wrap justify-end items-center gap-4 ${className}`}
      >
        {options.map((option) => {
          const { inputName, value, text, checked } = option;
          return (
            <label key={value}>
              <input
                type="radio"
                className="radioIcon mr-2"
                name={inputName}
                value={value}
                defaultChecked={!!checked}
                onChange={handleInputChange}
                required={required}
              />
              {text}
            </label>
          );
        })}
      </div>
      {isError && (
        <p className=" text-danger mt-2 md:mt-1 text-sm md:text-xs">
          {errorText}
        </p>
      )}
    </div>
  );
}
