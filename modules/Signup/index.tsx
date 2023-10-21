import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import Wrapper from "@/common/components/Wrapper";
import Form from "@/common/components/Form";
import { InputType, InputSetType } from "@/types/types";
import fetchApi from "@/common/helpers/fetchApi";
import { title, inputSet, btnSet, apiParams } from "./data";

export default function Signup() {
  // const resData = fetchApi(apiParams);

  return (
    <div className="m-auto w-fit">
      <Wrapper
        titleTag={
          <h2 className="text-[20px] md:text-[18px] md:leading-heading">
            {title}
          </h2>
        }
      >
        <Form inputSet={inputSet} btnSet={btnSet} />
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
