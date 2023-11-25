import React from "react";
import { TextInputProps } from "./data";

export default function TextInput({
  type,
  inputName,
  value,
  onChange,
  id,
  placeholder,
  required,
  disabled,
  pattern,
  errorMsg,
  isError,
}: TextInputProps) {
  const errorStyle = !!isError ? "border-danger" : "";
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
