import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import Wrapper from "@/common/components/Wrapper";
import FormInput from "@/common/components/FormInput";
import { InputType } from "@/types/types";

// errorMsg
export interface ErrorStateType {
  nickname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

const pageTitle = "會員註冊";
const titleTag = (
  <h2 className="text-[20px] md:text-[18px] md:leading-heading">{pageTitle}</h2>
);

export default function Signup() {
  // 如果錯誤就把 errorMsg 填入，如果 !errorMsg 就不 SHOW (待優化：這個地方可以自動 run key 嗎)
  const [error, setError] = useState<ErrorStateType>({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dataSet: InputType[] = [
    {
      label: "你的名字",
      type: "text",
      inputName: "nickname",
      placeholder: "例如：多多",
      required: true,
      errorMsg: error.nickname,
    },
    {
      label: "帳號",
      type: "email",
      inputName: "email",
      placeholder: "example@mail.com",
      required: true,
      errorMsg: error.email,
    },
    {
      label: "密碼",
      type: "password",
      inputName: "password",
      placeholder: "輸入 6-12 位英數字組合",
      required: true,
      errorMsg: error.password,
    },
    {
      label: "再次輸入密碼",
      type: "password",
      inputName: "confirmPassword",
      placeholder: "再次輸入您的密碼",
      required: true,
      errorMsg: error.confirmPassword,
    },
  ];

  return (
    <div className="m-auto w-fit">
      <Wrapper titleTag={titleTag}>
        <form className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]">
          <FormInput dataSet={dataSet} />
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
