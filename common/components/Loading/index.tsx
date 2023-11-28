import React from "react";
import LottieAnimation from "./LottieAnimation";

export default function Loading() {
  return (
    <div className="absolute w-full top-0 bottom-0 bg-yellow-primary bg-opacity-50 flex justify-center items-center -mt-10">
      <LottieAnimation />
    </div>
  );
}
