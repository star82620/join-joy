import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "@/common/components/GeneralLink";
import { StepThreeProps } from "./data";

export default function StepThree({ createdGroupId }: StepThreeProps) {
  const router = useRouter();

  const groupId = createdGroupId;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/group/${groupId}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="flex flex-col justify-center items-center py-14 text-xl font-semibold leading-6">
        <p>恭喜您已經開團成功！</p>
        <p>系統在 3 秒後自動幫您挑轉至您的揪團詳細頁</p>
      </div>

      <Link href="/" className="block text-center">
        返回首頁
      </Link>
    </>
  );
}
