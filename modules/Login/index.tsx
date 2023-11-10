import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import ModalWrapper from "@/common/components/ModalWrapper";
import Form from "./Form";
import { inputSet, btnSet, apiParams } from "./data";

export default function Login() {
  return (
    <div className="m-auto w-fit">
      <ModalWrapper title="會員登入">
        <div className="px-[100px] py-16 lg:px-14 lg:py-12 md:p-8 sm:px-4 sm:py-6">
          <Form inputSet={inputSet} btnSet={btnSet} apiParams={apiParams} />
          <p className="mt-3 text-center text-sm md:text-xs">
            註冊即表示您閱讀並同意 <b>服務條款</b> 及 <b>隱私權政策</b>
          </p>
          <p className="mt-8 text-center text-md font-semibold">
            還沒有帳號？ <Link href="/signup">點擊註冊</Link>
          </p>
        </div>
      </ModalWrapper>
    </div>
  );
}
