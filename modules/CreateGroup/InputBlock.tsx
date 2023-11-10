import React, { Children, ReactNode } from "react";
import { InputBlockProps } from "./data";

export default function InputBlock({
  title,
  titleStyle,
  description,
  direction,
  require,
  children,
}: InputBlockProps) {
  const checkDirection = () => {
    const isCol = direction === "col";
    if (!description) return;
    if (description && isCol) return "col";
    return "row";
  };
  const isCol = checkDirection() === "col";
  const colTitleStyle = isCol ? "inline" : "block";
  const colDescriptionStyle = isCol ? "mt-1" : "";
  const requiredStyle = require
    ? "after:content-['*'] after:text-danger after:text-xl"
    : "";

  return (
    <section className="w-full">
      <div>
        <h3
          className={`text-lg font-semibold md:text-md ${titleStyle} ${requiredStyle} ${colTitleStyle}`}
        >
          {title}
        </h3>
        {description && (
          <span className={`text-md ${colDescriptionStyle}`}>
            {description}
          </span>
        )}
      </div>

      {children}
    </section>
  );
}
