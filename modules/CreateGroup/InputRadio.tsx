import React from "react";
import { QuestionType, OptionType } from "./data";

export default function InputRadio({
  title,
  description,
  options,
}: QuestionType) {
  return (
    <section className="flex justify-between gap-3 md:flex-col">
      <div>
        <h3 className="text-lg font-semibold md:text-sm">{title}</h3>
        <p className="text-gray-500 text-sm font-semibold mt-1 md:text-xs">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-4 text-md font-semibold md:text-sm">
        {options.map((option: OptionType) => {
          const { name, value, content } = option;
          return (
            <label key={value}>
              <input
                type="radio"
                className="radioIcon mr-2"
                name={name}
                value={value}
              />
              {content}
            </label>
          );
        })}
      </div>
    </section>
  );
}
