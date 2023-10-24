import React from "react";
import { OptionsType, OptionType } from "./data";

export default function InputRadio({ title, desc, options }: OptionsType) {
  return (
    <section className="flex justify-between gap-3 md:flex-col">
      <div>
        <h3 className="text-lg font-semibold md:text-sm">{title}</h3>
        <p className="text-gray-500 text-sm font-semibold mt-1 md:text-xs">
          {desc}
        </p>
      </div>
      <div className="flex items-center gap-4 text-md font-semibold md:text-sm">
        {options.map((option: OptionType) => {
          return (
            <label key={option.name}>
              <input
                type="radio"
                className="mr-2"
                name={option.name}
                id={option.id}
              />
              {option.content}
            </label>
          );
        })}
      </div>
    </section>
  );
}
