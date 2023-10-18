import React from "react";
import FormInput from "@/common/components/FormInput";
import Wrapper from "@/common/components/Wrapper";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import { inputSet } from "./data";

const pageTitle = "會員登入";
const titleTag = (
  <h2 className="text-[20px] md:text-[18px] md:leading-heading">{pageTitle}</h2>
);

export default function Login() {
  return (
    <div className="m-auto w-fit">
      <Wrapper titleTag={titleTag}>
        <form className="flex flex-col gap-6 md:gap-4 w-[380px] md:w-[300px] sm:w-[280px]">
          <FormInput inputSet={inputSet} />
          <Button
            // extraStyle="mt-2" 之後補上
            type="button"
            appearance="orange"
            onClick={() => console.log("y")}
          >
            登入
          </Button>
        </form>
        <p className="mt-3 text-center text-sm md:text-xs">忘記密碼</p>
        <p className="mt-8 text-center text-md font-semibold">
          已有帳號？ <Link href="/signup">點擊註冊</Link>
          {/* 之後補上： <Link href="/signup" extraStyle="text-blue-dark" >點擊註冊</Link> */}
        </p>
      </Wrapper>
    </div>
  );
}
