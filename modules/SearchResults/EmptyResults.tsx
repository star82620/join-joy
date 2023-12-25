import React from "react";
import { useRouter } from "next/router";
import Image from "@/common/components/FillImage";
import { useGetAllCitiesData } from "@/common/hooks/useGetAllCitiesData";

export default function EmptyResults() {
  const router = useRouter();
  const queryKey = router.query;
  const { tab, city, date, keyword } = queryKey;

  const isGroup = tab === "group";
  const resultCountTab = isGroup ? "揪團" : "店家";

  const allCitiesData = useGetAllCitiesData();
  const cityKeyword = allCitiesData?.[Number(city) - 1]?.CityName || "";
  const dateKeyword = date || "";
  const wordKeyword = keyword || "";

  return (
    <div className="flex flex-col items-center pt-[76px]">
      <Image
        src="/images/search/img-search-empty.svg"
        alt="img-search-empty"
        widthProp="w-[140px]"
        heightProp="h-[170px]"
      />
      <h3 className="mt-10 text-2xl">
        找不到符合「{`${cityKeyword} ${dateKeyword} ${wordKeyword}`}」的
        {resultCountTab}
      </h3>
      <p className="mt-4">請調整搜尋項目</p>
    </div>
  );
}
