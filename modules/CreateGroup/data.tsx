import React, { ReactNode } from "react";
import { InputSetType } from "@/common/components/Form/data";
import { ButtonType } from "@/common/components/GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";
import {
  ChangeInputHandler,
  ChangeSelectHandler,
  GameType,
  StoreType,
} from "@/constants/globalType";

// page
export type cityType = {
  Id: number;
  CityName: string;
};

export type citiesDataType = cityType[];

export type CreateGroupPageProps = {
  citiesData: citiesDataType;
};

// index
export type ChainKeysType = {
  locationKind: string;
  cityId: number;
  storeId: number;
  date: string;
};

export type StepContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

export type ValuesContextType = [
  ValuesType,
  React.Dispatch<React.SetStateAction<ValuesType>>,
  ChainKeysType,
  React.Dispatch<React.SetStateAction<ChainKeysType>>
];

export type ValuesType = {
  groupName: string;
  startTime: string;
  endTime: string;
  isHomeGroup: boolean;
  place: string;
  storeId: number;
  totalMemberNum: number;
  initNum: number;
  description: string;
  isPrivate: boolean;
  GameIds: Array<number>;
  beginnerTag: boolean;
  expertTag: boolean;
  practiceTag: boolean;
  openTag: boolean;
  tutorialTag: boolean;
  casualTag: boolean;
  competitiveTag: boolean;
};

export type LocationKindType = "store" | "place";

export type cityIdType = number;

export type HandleInputValueType = (
  e: React.ChangeEvent<HTMLInputElement>,
  inputName: string
) => void;

export type HandleLocationKindType = ChangeInputHandler;

export type handleCityType = ChangeSelectHandler;

export type handleStoreType = ChangeSelectHandler;

// InputBlock
export type InputBlockProps = {
  title: string;
  titleStyle?: string;
  description?: string;
  direction?: "row" | "col";
  require?: boolean;
  children: ReactNode;
};

// StepOne
export type StepOneProps = {
  citiesData: citiesDataType;
};

export type StoreDataType = StoreType[];

// StepTwo

export type GameItemType = GameType & {
  qtu: number;
};

export type GamesDataType = GameItemType[];

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
  onChange: ChangeInputHandler;
};

//----data----

// index
export const defaultValues: ValuesType = {
  groupName: "",
  startTime: "",
  endTime: "",
  isHomeGroup: false,
  place: "",
  storeId: 0,
  totalMemberNum: 2,
  initNum: 1,
  description: "",
  isPrivate: false,
  GameIds: [],
  beginnerTag: false,
  expertTag: false,
  practiceTag: false,
  openTag: false,
  tutorialTag: false,
  casualTag: false,
  competitiveTag: false,
};

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

export const defaultChainValue = {
  locationKind: "store",
  cityId: 0,
  storeId: 0,
  date: "",
};

// -

// export const textInputSet = {
//   groupName: {
//     inputName: "groupName",
//     placeholder: "請幫你的揪團取一個酷酷的名字！",
//     value: "",
//     onChange: () => {},
//     require: true,
//   },
//   date: {
//     inputName: "groupName",
//     placeholder: "請幫你的揪團取一個酷酷的名字！",
//     value: "",
//     onChange: () => {},
//     require: true,
//   },
//   startTime: {
//     inputName: "groupName",
//     placeholder: "請幫你的揪團取一個酷酷的名字！",
//     value: "",
//     onChange: () => {},
//     require: true,
//   },
//   endTime: {
//     inputName: "groupName",
//     placeholder: "請幫你的揪團取一個酷酷的名字！",
//     value: "",
//     onChange: () => {},
//     require: true,
//   },

//   isHomeGroup: false,
//   place: null,
//   storeId: 0,
//   totalMemberNum: 2,
//   initNum: 1,
//   description: "",
//   isPrivate: false,
//   GameIds: [],
//   beginnerTag: false,
//   expertTag: false,
//   practiceTag: false,
//   openTag: false,
//   tutorialTag: false,
//   casualTag: false,
//   competitiveTag: false,
// };

// StepTwo
