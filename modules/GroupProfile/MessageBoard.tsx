import React, { useState } from "react";
import Image from "next/image";
import Button from "@/common/components/GeneralButton";

export default function MessageBoard() {
  const [textLength, setTextLength] = useState(0);
  const [msgValue, setMsgValue] = useState("");

  return (
    <section className="px-12 pt-8 pb-10 md:px-3 md:py-4">
      <div className="flex items-center gap-2 border-b border-gray-300 pb-6 md:pb-4">
        <div className="grow">
          <form
            id="submitMsg"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(msgValue);
              //送出 API
            }}
          >
            <textarea
              maxLength={100}
              rows={3}
              placeholder="輸入你想說的話！"
              className="px-3 py-2 border-b-2 w-full placeholder:text-start"
              onChange={(e) => {
                setMsgValue(e.target.value);
                setTextLength(e.target.value.length);
              }}
            />
          </form>
          <p className="text-right text-xs font-bold mt-1">{textLength}/100</p>
        </div>

        {/* 這個按鈕之後改成 Button */}
        <button
          form="submitMsg"
          type="submit"
          className="bg-gray-950 text-white px-4 py-2 text-sm font-semibold rounded"
        >
          送出
        </button>
      </div>
      <div className="pt-6 md:pt-4">
        <div className="flex items-start gap-8">
          <p className="relative w-16 h-16 md:w-9 md:h-9 rounded-full border-2 border-white outline outline-2 outline-gray-950">
            <Image
              src="/images/photo-user-000.png"
              alt="user"
              fill
              sizes="100%"
              className="object-contain rounded-full"
            />
          </p>
          <div className="grow">
            <div>
              <p className="font-semibold leading-[1.2] md:text-sm md:leading-6 ">
                多多
              </p>
              <p className="text-gray-400 text-xs after:content-['前'] after:ml-0.5">
                1 小時
              </p>
            </div>
            <p className="whitespace-pre-wrap mt-2">
              {`嗨！我有興趣參加，請團主審核我的申請！\n嗨！我有興趣參加，請團主審核我的申請！`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
