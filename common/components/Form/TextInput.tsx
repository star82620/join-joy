import React from "react";
import { TextInputProps } from "./data";

export default function TextInput({
  textInputParams,
  isInputErrors,
}: TextInputProps) {
  const {
    id,
    type,
    inputName,
    placeholder,
    value,
    onChange,
    required,
    disabled,
    errorMsg,
  } = textInputParams;
  const isEmpty = value.length === 0;
  const isError = required && isEmpty;
  const errorStyle = isError ? "border-danger" : "";
  return (
    <>
      <input
        type={type}
        className={`inputStyle ${errorStyle}`}
        id={id}
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {isError && (
        <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
          {errorMsg}
        </p>
      )}
    </>
  );
}
