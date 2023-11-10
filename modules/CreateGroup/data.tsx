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
  checked?: boolean;
};

export type QuestionType = {
  title: string;
  description: string;
  options: OptionType[];
};

type QuestionsWithRadioType = QuestionType[];

export type InputRadioProps = QuestionType & {
  onChange: React.ChangeEventHandler;
};

//----data----

// StepTwo
export const questionsWithRadio: QuestionsWithRadioType = [
  {
    title: "本次開團是否設為『非公開』揪團？",
    description: "僅接受獲得連結的團員加入，不會在平台被找到",
    options: [
      { content: "公開", name: "groupPrivacy", value: "public", checked: true },
      { content: "非公開", name: "groupPrivacy", value: "private" },
    ],
  },
];
