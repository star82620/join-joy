import React, { useState } from "react";
import { RadioInputProps, defaultErrorText } from "./data";

export default function RadioInput({
  options,
  onChange,
  required,
  errorMsg,
  className,
  isInputErrors,
}: RadioInputProps) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (e) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const isError = required && selectedValue === null;

  const errorText = errorMsg ?? defaultErrorText;

  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
      {options.map((option) => {
        const { name, value, text, checked } = option;
        return (
          <label key={value}>
            <input
              type="radio"
              className="radioIcon mr-2"
              name={name}
              value={value}
              defaultChecked={!!checked}
              onChange={handleInputChange}
              required={required}
            />
            {text}
          </label>
        );
      })}
      {isError && (
        <p className="text-danger mt-2 md:mt-1 text-sm md:text-xs">
          {errorText}
        </p>
      )}
    </div>
  );
}
