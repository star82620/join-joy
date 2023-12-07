import { SelectOptionType } from "@/common/components/Form/data";
import { SearchedGroupItemDataType } from "@/constants/types/apiTypes/group";
import { StoreSetDataType } from "@/constants/types/apiTypes/store";

// page
export type SearchResultsPageProps = {
  defaultData: SearchedGroupItemDataType[] | StoreSetDataType | [];
  defaultCount: number;
};

//
export type SearchResultsProps = SearchResultsPageProps;

export type FilterSetItemType = {
  title: string;
  inputName:
    | "groupFilter"
    | "groupTag"
    | "groupppl"
    | "joinppl"
    | "storeFilter"
    | "storeTag";
  options: SelectOptionType[];
};
export type FilterSetType = FilterSetItemType[];

// -- data --
export const storeFilterSet: FilterSetType = [
  {
    title: "排序",
    inputName: "storeFilter",

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
    inputName: "storeTag",
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
    inputName: "groupFilter",
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
    inputName: "groupppl",
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
    inputName: "joinppl",
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
    inputName: "groupTag",
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
