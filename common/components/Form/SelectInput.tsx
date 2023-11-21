import React from "react";
import { SelectInputProps, defaultErrorText } from "./data";

export default function SelectInput({
  inputName,
  options,
  value,
  onChange,
  defaultText,
  errorMsg,
  required,
  disabled,
  isError,
}: SelectInputProps) {
  const defaultOptionText = defaultText ?? "請選擇";

  const errorText = errorMsg ?? defaultErrorText;
  const errorStyle = !!isError ? "!border-danger" : "";

  return (
    <div>
      <select
        className={`inputStyle h-10 ${errorStyle}`}
        name={inputName}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      >
        <option value="">{defaultOptionText}</option>

        {options.map((option) => {
          const { value, text, checked } = option;
          return (
            <option key={value} value={value} defaultChecked={checked}>
              {text}
            </option>
          );
        })}
      </select>
      {isError && (
        <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
          {errorText}
        </p>
      )}
    </div>
  );
}
