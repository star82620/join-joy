import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import Wrapper from "@/common/components/Wrapper";
import FormInput from "@/common/components/FormInput";
import { InputType, InputSetType } from "@/types/types";
import fetchApi from "@/common/helpers/fetchApi";
import { title, inputSet, apiParams } from "./data";

export default function Signup() {
  // const resData = fetchApi(apiParams);

  return (
    <div className="m-auto w-fit">
      <Wrapper
        title={title}
        titleStyle="text-[20px] md:text-[18px] md:leading-heading"
      >
        <form className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]">
          <FormInput inputSet={inputSet} />
          <button type="button" className="mt-2">
            註冊
          </button>
        </form>
        <p className="mt-3 text-center text-sm md:text-xs">
          註冊即表示您閱讀並同意 <b>服務條款</b> 及 <b>隱私權政策</b>
        </p>
        <p className="mt-8 text-center text-md font-semibold">
          已有帳號？ <Link href="/login">點擊登入</Link>
        </p>
      </Wrapper>
    </div>
  );
}
