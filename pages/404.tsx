import React from "react";
import Image from "@/common/components/FillImage";
import Layout from "@/common/components/Layout";
import Link from "@/common/components/GeneralLink";

export default function PageNotFound() {
  return (
    <Layout pageCategory="error">
      <div className="container h-full flex flex-col justify-center items-center pt-20 pb-[200px]">
        <Image
          src="/images/404.svg"
          alt="404"
          widthProp="w-[624px]"
          heightProp="h-[200px]"
        />
        <h2 className="text-3xl mt-10">頁面被小精靈吃掉啦...</h2>
        <p className="text-xl font-semibold mt-6">
          你所訪問的頁面已不存在，請重新整理頁面或<Link href="/">回到首頁</Link>
          ！
        </p>
      </div>
    </Layout>
  );
}
