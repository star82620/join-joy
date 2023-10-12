import React from "react";

interface Props {
  // type: string;
}

const copyrightContent: string =
  "Copyright © 2023 遊人揪揪工作室 All rights reserved.";

export default function Footer({}: Props) {
  //簡易版
  return (
    <footer className="flex justify-center items-center py-3 bg-slate-400">
      <div className="container">
        <div className="text-center">{copyrightContent}</div>
      </div>
    </footer>
  );
}
