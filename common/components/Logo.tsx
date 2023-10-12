import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.jpg";

export default function Logo() {
  return (
    <div className="h-full">
      <Image src={logo} alt="JoinJoy" height="80" />
    </div>
  );
}
