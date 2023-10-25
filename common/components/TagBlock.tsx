import React from "react";

type Props = {
  content: string;
  className: string;
};

export default function TagBlock({ content, className }: Props) {
  return (
    <div
      className={`border-2 rounded p-2 bg-yellow-tint text-center font-semibold ${className}`}
    >
      {content}
    </div>
  );
}
