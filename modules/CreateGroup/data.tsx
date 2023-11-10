import React, { ReactNode } from "react";
import { InputSetType } from "@/common/components/Form/data";
import { ButtonType } from "@/common/components/GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";

// index
export type ActiveContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

// InputBlock
export type InputBlockProps = {
  title: string;
  titleStyle?: string;
  description?: string;
  direction?: "row" | "col";
  require?: boolean;
  children: ReactNode;
};

// StepTwo
export type OptionType = {
  content: string;
  name: string;
  value: string;
};

export type QuestionType = {
  title: string;
  description: string;
  options: OptionType[];
};

type QuestionsWithRadioType = QuestionType[];

// StepTwo
export const questionsWithRadio: QuestionsWithRadioType = [
  {
    title: "本次開團是否設為『非公開』揪團？",
    description: "僅接受獲得連結的團員加入，不會在平台被找到",
    options: [
      { content: "公開", name: "groupPrivacy", value: "public" },
      { content: "非公開", name: "groupPrivacy", value: "private" },
    ],
  },
  {
    title: "成團後是否接受團員進出？",
    description: "送出預約後系統會自動鎖定揪團，直到結團前皆可再編輯",
    options: [
      { content: "接受", name: "allowJoin", value: "allow" },
      { content: "不接受", name: "allowJoin", value: "reject" },
    ],
  },
];
