import React from "react";
import LottieAnimation from "./LottieAnimation";

export default function Loading() {
  return (
    <div className="fixed w-full min-h-screen top-0 bottom-0 z-loading overflow-hidden border-2 flex justify-center items-center -mt-10 bg-yellow-primary bg-opacity-70">
      <LottieAnimation />
    </div>
  );
}
