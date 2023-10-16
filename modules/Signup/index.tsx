import React from "react";
import Link from "@/common/components/GeneralLink";
import FormInput from "@/common/components/FormInput";

const formSet = [
  {
    label: "你的名字",
    type: "text",
    inputName: "nickname",
    placeholder: "例如：多多",
    required: true,
  },
  {
    label: "帳號",
    type: "email",
    inputName: "email",
    placeholder: "example@mail.com",
    required: true,
  },
  {
    label: "密碼",
    type: "password",
    inputName: "password",
    placeholder: "輸入 6-12 位英數字組合",
    required: true,
  },
  {
    label: "再次輸入密碼",
    type: "password",
    inputName: "confirmPassword",
    placeholder: "再次輸入您的密碼",
    required: true,
  },
];

export default function SignUp() {
  return (
    <div>
      <div className="m-auto w-fit">
        <section className="flex justify-between items-center bg-yellow-second border-[3px] border-b-2 rounded-t-lg px-3 py-2 text-center">
          <div className="w-6 h-6 rounded-full bg-white"></div>
          <h3>會員註冊</h3>
          <div className="w-6 h-6 rounded-full bg-white"></div>
        </section>
        <section className="bg-yellow-dark border-[3px] border-t-0 rounded-b-lg px-[100px] py-16">
          <form className="flex flex-col gap-6 w-[376px]">
            <FormInput formSet={formSet} />
            <button type="submit" className="mt-2">
              註冊
            </button>
          </form>

          <p className="mt-3 text-center text-sm">
            註冊即表示您閱讀並同意 <b>服務條款</b> 及 <b>隱私權政策</b>
          </p>
          <p className="mt-8 text-center text-md font-semibold">
            已有帳號？ <Link href="login">點擊登入</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
