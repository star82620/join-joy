import React from "react";

type Props = {
  content: string;
};

export default function TagBlock({ content }: Props) {
  return (
    <div
      className={`border-2 rounded p-2 bg-yellow-tint text-center font-semibold lg:lg:text-sm`}
    >
      {content}
    </div>
  );
}
