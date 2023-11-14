import React from "react";
import FillImage from "@/common/components/FillImage";
import Link from "@/common/components/GeneralLink";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 pb-10 bg-yellow-tint bg-mascot-vector bg-no-repeat bg-right-5-bottom-5 text-lg font-semibold">
      {/* <FillImage
        src="/images/mascot-vector.svg"
        alt="mascot-vector"
        widthProp="w-[200px]"
        heightProp="h-[200px]"
      /> */}
      <p>｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡</p>
      <p>好像有什麼地方出錯了，請聯絡系統管理員</p>
      <p>
        或者稍後再試 <Link href="/">回首頁</Link>
      </p>
    </div>
  );
}
