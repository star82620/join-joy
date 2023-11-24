import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import GroupCard from "@/common/components/searchResultCard/GroupCard";
import { groupSet } from "@/constants/testData";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { SelectOptionType } from "@/common/components/Form/data";
import { SearchContext } from "@/common/contexts/SearchProvider";

export type FilterSetItemType = { title: string; options: SelectOptionType[] };
export type FilterSetType = FilterSetItemType[];
export const storeFilterSet: FilterSetType = [
  {
    title: "排序",
    options: [
      {
        value: "0",
        text: "最相關",
        checked: true,
      },
      {
        value: "1",
        text: "評論數最多",
      },
      {
        value: "2",
        text: "最新開團",
      },
    ],
  },
  {
    title: "服務設施",
    options: [
      {
        value: "0",
        text: "不限定",
        checked: true,
      },
      {
        value: "1",
        text: "免費自助吧",
      },
      {
        value: "2",
        text: "可攜帶外食",
      },
      {
        value: "3",
        text: "提供餐點",
      },
      {
        value: "4",
        text: "提供教學",
      },
      {
        value: "5",
        text: "免費wifi",
      },
    ],
  },
];
export const groupFilterSet: FilterSetType = [
  {
    title: "排序",
    options: [
      {
        value: "0",
        text: "最相關",
        checked: true,
      },
      {
        value: "1",
        text: "即將舉辦",
      },
      {
        value: "2",
        text: "最新開團",
      },
    ],
  },
  {
    title: "揪團總人數",
    options: [
      {
        value: "0",
        text: "全部",
        checked: true,
      },
      {
        value: "1",
        text: "2-4人",
      },
      {
        value: "2",
        text: "5-7人",
      },
      {
        value: "3",
        text: "8人以上",
      },
    ],
  },
  {
    title: "可加入人數",
    options: [
      {
        value: "0",
        text: "1-3人",
        checked: true,
      },
      {
        value: "1",
        text: "4-6人",
      },
      {
        value: "2",
        text: "7人以上",
      },
    ],
  },
  {
    title: "遊戲面向",
    options: [
      {
        value: "0",
        text: "不限定",
        checked: true,
      },
      {
        value: "1",
        text: "新手團",
      },
      {
        value: "2",
        text: "老手團",
      },
      {
        value: "3",
        text: "經驗切磋",
      },
      {
        value: "4",
        text: "教學團",
      },
      {
        value: "5",
        text: "輕鬆",
      },
      {
        value: "6",
        text: "競技",
      },
    ],
  },
];

const FilterBlock = ({ title, options }: FilterSetItemType) => {
  const textNum = title.length;
  const spaces: Record<number, string> = {
    2: "pl-11",
    3: "pl-14.5",
    4: "pl-18",
    5: "pl-22.5",
  };
  const spaceStyle = spaces[textNum];
  return (
    <>
      <label className="relative flex items-center flex-shrink-0 whitespace-nowrap text-sm">
        <select
          className={`min-h-9 rounded-sm bg-yellow-tint border-2 border-gray-500 text-gray-600 pr-3 py-1.5 ${spaceStyle}`}
        >
          {options.map((option) => {
            const { value, text, checked } = option;
            return <option key={value}>{text}</option>;
          })}
        </select>
        <p className="absolute top-[7px] left-3 font-semibold">{title}</p>
      </label>
    </>
  );
};

export default function SearchResults() {
  const searchContext = useContext(SearchContext);
  const { searchValues, setSearchValues, activeTab, setActiveTab } =
    searchContext;
  const [activePage, setActivePage] = useState(1);
  const btnAppearance = true ? "white" : "white-gray";
  const pageBtnStyle = "text-gray-950 font-semibold";

  const isGroup = activeTab === "group";

  useEffect(() => {
    console.log("aaaa");
  }, [activeTab]);
  const filterSet = isGroup ? groupFilterSet : storeFilterSet;

  return (
    <div className="container">
      <div>
        <h2>請選擇你有興趣的揪團加入！</h2>
        <p className="mt-3 md:mt-1">
          找到 50 個符合 2023/10/5 在 台北市 信義區 的 揪團（關鍵字：無）{" "}
        </p>
        <div className="flex flex-wrap gap-3 md:gap-1 mt-6 md:mt-2">
          {filterSet.map((item) => {
            const { title, options } = item;
            return <FilterBlock key={title} title={title} options={options} />;
          })}
        </div>
      </div>
      <div className="mt-9 md:mt-4">
        <div className="flex flex-wrap gap-x-4 gap-y-8 md:gap-3">
          {groupSet.map((group) => {
            return (
              <div
                key={group.groupId}
                className="w-full max-w-[280px] md:max-w-full"
              >
                <GroupCard data={group} />
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 items-center w-fit m-auto mt-16 md:mt-8">
          {/* prev arrow */}
          <Button
            type="button"
            appearance="page-selector-arrow"
            rounded
            isDisabled
            className="!p-1"
          >
            <span className={pageBtnStyle}>
              <Image
                src={globalIcons["arrow-left"].src}
                alt={globalIcons["arrow-left"].alt}
                widthProp="w-6"
                heightProp="h-6"
              />
            </span>
          </Button>
          <Button
            type="button"
            appearance={btnAppearance}
            rounded
            className="!px-3 !py-1"
          >
            <span className={pageBtnStyle}>1</span>
          </Button>
          {/* back arrow */}
          <Button
            type="button"
            appearance="page-selector-arrow"
            rounded
            className="!p-1"
          >
            <span className={pageBtnStyle}>
              <Image
                src={globalIcons["arrow-right"].src}
                alt={globalIcons["arrow-right"].alt}
                widthProp="w-6"
                heightProp="h-6"
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
