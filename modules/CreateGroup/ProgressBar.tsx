import React, { useContext } from "react";
import Image from "next/image";
import { ActiveContext } from "./index";

export default function ProgressBar() {
  // 利用傳入的 active 判斷 dot line 亮不亮
  // active = 1  dot 亮 1    line 0
  // active = 2  dot 亮 1,2  line 1
  // active = 3

  const contextValue = useContext(ActiveContext);
  const [activePage, setActivePage] = contextValue;

  const lastIcon = (
    <Image
      src="/images/icon-progress-check.svg"
      alt="finish"
      width="20"
      height="20"
    />
  );

  let isActive = true;
  const isFirstActive = Number(activePage) >= 2;
  const isSecondActive = Number(activePage) === 3;

  const steps = [
    { id: "1", content: "1", desc: "基本資訊" },
    { id: "2", content: "2", desc: "遊戲資訊 & 進階設定" },
    { id: "3", content: lastIcon, desc: "完成開團" },
  ];

  return (
    <div className="w-[80%] md:w-full relative flex item-center justify-center">
      <div className="w-full flex justify-between items-center z-10">
        {steps.map((step) => {
          const { id, content, desc } = step;
          isActive = Number(activePage) >= Number(step.id) ? true : false;
          return (
            <section
              key={id}
              className=" flex flex-col justify-center items-center"
            >
              <div
                className={`flex justify-center items-center w-8 h-8 rounded-full text-sm font-semibold ${
                  isActive ? "bg-yellow-second" : "bg-gray-200"
                }`}
              >
                {content}
              </div>
              <p>{desc}</p>
            </section>
          );
        })}
      </div>
      <div
        className={`absolute left-4 right-2/4 top-4 h-0 border ${
          isFirstActive ? "border-yellow-second" : "border-gray-300"
        }`}
      ></div>
      <div
        className={`absolute left-2/4 right-4 top-4 h-0 border ${
          isSecondActive ? "border-yellow-second" : "border-gray-300"
        }`}
      ></div>
    </div>
  );
}
