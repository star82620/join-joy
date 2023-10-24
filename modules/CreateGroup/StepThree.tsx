import React from "react";
import Link from "@/common/components/GeneralLink";
import TextInput from "@/common/components/Form/TextInput";

export default function StepThree() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-14">
        <p className="text-xl font-semibold leading-6">恭喜您已經開團成功！</p>
        <p className="text-xl font-semibold leading-6">
          系統在 3 秒後自動幫您挑轉至您的揪團詳細頁
        </p>
      </div>

      <Link href="/" className="block text-center">
        返回首頁
      </Link>
    </>
  );
}
