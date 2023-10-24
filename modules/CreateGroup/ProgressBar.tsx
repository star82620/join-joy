import React, { useState } from "react";
import Image from "next/image";

export default function ProgressBar({ active }) {
  // 利用傳入的 active 判斷 dot line 亮不亮
  // active = 1  dot 亮 1    line 0
  // active = 2  dot 亮 1,2  line 1
  // active = 3

  const a = { "1": true, "2": false, "3": false };

  const lastIcon = (
    <Image
      src="/images/icon-progress-check.svg"
      alt="finish"
      width="20"
      height="20"
    />
  );

  const isActive = true;

  // const [active, setActive] = useState();

  const steps = [
    { id: "1", content: "1", desc: "基本資訊" },
    { id: "2", content: "2", desc: "遊戲資訊 & 進階設定" },
    { id: "3", content: lastIcon, desc: "完成開團" },
  ];

  return (
    <div className="w-[80%] md:w-full relative flex item-center justify-center">
      <div className="absolute left-4 right-2/4 top-4 h-0 border border-yellow-second"></div>
      <div className="absolute left-2/4 right-4 top-4 h-0 border border-gray-300"></div>
      <div className="w-full flex justify-between items-center z-10">
        {steps.map((step) => {
          const { id, content, desc } = step;
          if (Number(active) >= Number(step.id)) {
            isActive === true;
          }
          return (
            <section
              key={id}
              className=" flex flex-col justify-center items-center"
            >
              <div className="flex justify-center items-center w-8 h-8 rounded-full text-sm bg-yellow-second">
                {content}
              </div>
              <p>{desc}</p>
            </section>
          );
        })}

        {/* <section className=" flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-8 h-8 bg-yellow-second rounded-full text-sm">
            1
          </div>
          <p>基本資訊</p>
        </section>
        <section className=" flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-8 h-8 bg-yellow-second rounded-full text-sm">
            2
          </div>
          <p>遊戲資訊 & 進階設定</p>
        </section>
        <section className=" flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full text-sm"></div>
          <p>完成開團</p>
        </section> */}
      </div>
    </div>
  );
}
