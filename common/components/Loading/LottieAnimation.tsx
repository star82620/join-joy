import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/jsons/loading_lottie.json";

export default function LottieAnimation() {
  return (
    <Lottie animationData={animationData} style={{ width: 600, height: 600 }} />
  );
}
