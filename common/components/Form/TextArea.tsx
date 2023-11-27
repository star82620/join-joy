import React from "react";
import { TextAreaProps, defaultErrorText } from "./data";

export default function TextArea({
  title,
  maxLength,
  inputName,
  value,
  onChange,
  rows,
  cols,
  placeholder,
  required,
  disabled,
  readonly,
  errorMsg,
}: TextAreaProps) {
  // something error here
  const currentLength = value !== null ? value.length : 0;

  const isError = required && currentLength === 0;

  const errorText = errorMsg ?? defaultErrorText;
  return (
    <label>
      <section className="w-full">
        <div className="flex justify-between items-end ">
          <h3 className="text-lg font-semibold md:text-md">{title}</h3>
          {!!maxLength && (
            <span className="text-sm md:text-xs">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          className="inputStyle placeholder:text-gray-400 md:placeholder:text-sm"
          name={inputName}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
        />
        {isError && (
          <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
            {errorText}
          </p>
        )}
      </section>
    </label>
  );
}
