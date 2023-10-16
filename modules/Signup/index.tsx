import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import FrameWindow from "@/common/components/FrameWindow";
import FormInput from "@/common/components/FormInput";

// 如果錯誤就把 errorMsg 填入，如果 !errorMsg 就不 SHOW

export default function SignUp() {
  const [error, setError] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formSet = [
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
      errMsg: error.email,
    },
    {
      label: "密碼",
      type: "password",
      inputName: "password",
      placeholder: "輸入 6-12 位英數字組合",
      required: true,
      errMsg: error.password,
    },
    {
      label: "再次輸入密碼",
      type: "password",
      inputName: "confirmPassword",
      placeholder: "再次輸入您的密碼",
      required: true,
      errMsg: error.confirmPassword,
    },
  ];

  const t = () => {};

  return (
    <div>
      <div className="m-auto w-fit">
        <FrameWindow title="會員註冊">
          <form className="flex flex-col gap-6 w-[376px]">
            <FormInput formSet={formSet} />
            <button type="button" className="mt-2" onClick={t}>
              註冊
            </button>
          </form>
          <p className="mt-3 text-center text-sm">
            註冊即表示您閱讀並同意 <b>服務條款</b> 及 <b>隱私權政策</b>
          </p>
          <p className="mt-8 text-center text-md font-semibold">
            已有帳號？ <Link href="login">點擊登入</Link>
          </p>
        </FrameWindow>
      </div>
    </div>
  );
}
