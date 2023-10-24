import React, { Children, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  titleStyle?: string;
  desc?: string;
  descPosition?: "row" | "col";
  require?: boolean;
  children: ReactNode;
};

export default function FormBlock({
  title,
  titleStyle,
  desc,
  descPosition,
  require,
  children,
}: Props) {
  const checkDescCol = () => {
    if (desc && descPosition === "col") return true;
  };
  const isDescCol = checkDescCol();
  console.log(title, isDescCol);

  return (
    <section className="w-full">
      <div className="mb-2">
        <h3
          className={clsx(
            "text-lg font-semibold",
            isDescCol ? "inline" : "block",
            require
              ? "after:content-['*'] after:text-danger after:text-xl"
              : "",
            titleStyle
          )}
        >
          {title}
        </h3>
        {desc && (
          <span className={clsx("text-md", isDescCol ? "mt-1" : "")}>
            {desc}
          </span>
        )}
      </div>

      {children}
    </section>
  );
}
