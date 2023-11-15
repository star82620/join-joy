import React, { useEffect } from "react";
import Link from "@/common/components/GeneralLink";
import TextInput from "@/common/components/Form/TextInput";
import { useRouter } from "next/router";

export default function StepThree({ successfulId }) {
  const router = useRouter();

  const groupId = successfulId;

  useEffect(() => {
    // 設定一個計時器，當計時器到時，使用 router.push 來跳轉到主頁
    const timer = setTimeout(() => {
      router.push(`/group/${groupId}`);
    }, 3000); // 3000 毫秒後執行，即 3 秒

    // 清理函數：當組件卸載時，清除計時器
    return () => clearTimeout(timer);
  }, [router]);

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
