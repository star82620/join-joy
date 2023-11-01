import React from "react";
import { ModalWrapperProps, layoutStyles } from "./data";

export default function ModalWrapper({
  title,
  children,
  layout,
}: ModalWrapperProps) {
  const { haveShadow, haveHeadDots } = layoutStyles[layout || "default"];
  const isSecondary = layout === "secondary";

  return (
    <div
      className={`w-full flex flex-col rounded-t-lg ${
        haveShadow ? "shadow-window" : ""
      }`}
    >
      <section className="flex justify-between items-center bg-yellow-neutral border-[3px] border-b-2 rounded-t-lg px-3 py-2 text-center">
        {haveHeadDots && (
          <div className="w-6 h-6 rounded-full bg-white flex-shrink-0"></div>
        )}
        <h2
          className={`w-full text-center font-semibold ${
            isSecondary ? "text-lg" : "text-xl"
          } md:text-lg`}
        >
          {title}
        </h2>
        {haveHeadDots && (
          <div className="w-6 h-6 rounded-full bg-white flex-shrink-0"></div>
        )}
      </section>
      <section className="bg-yellow-dark border-[3px] border-t-0 grow">
        {children}
      </section>
    </div>
  );
}
