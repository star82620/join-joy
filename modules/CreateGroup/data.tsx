import React, { ReactNode } from "react";
import {
  ChangeInputHandler,
  ChangeSelectHandler,
  ChangeTextAreaHandler,
  GameType,
  StoreType,
} from "@/constants/globalTypes";

// page
export type CityType = {
  Id: number;
  CityName: string;
};

export type CitiesDataType = CityType[];

export type CreateGroupPageProps = {
  citiesData: CitiesDataType;
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
  React.Dispatch<React.SetStateAction<ValuesType>>
];

// 要給 api 的資料重新寫一份
// export type ValuesType = {
//   groupName: string;
//   startTime: string;
//   endTime: string;
//   isHomeGroup: boolean;
//   place: string;
//   storeId: number;
//   totalMemberNum: number;
//   initNum: number;
//   description: string;
//   private: string;
//   GameIds: Array<number>;
//   beginnerTag: boolean;
//   expertTag: boolean;
//   practiceTag: boolean;
//   openTag: boolean;
//   tutorialTag: boolean;
//   casualTag: boolean;
//   competitiveTag: boolean;
// };

export type ValuesType = {
  groupName: string;
  locationKind: string;
  cityId: number;
  place: string;
  storeId: number;
  date: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  initNum: number;
  gameIds: Array<number>;
  tags: Array<number>;
  description: string;
  private: string;
};

export type LocationKindType = "store" | "place";

export type CityIdType = number;

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
  citiesData: CitiesDataType;
};

export type RemainingSeatsType = {
  time: string;
  seats: number;
};

export type StoreDataType = {
  stores: StoreType[];
  remainingSeats: RemainingSeatsType[];
};

export type HandleInputValueType = (
  e: React.ChangeEvent<HTMLInputElement>,
  inputName: string
) => void;

export type HandleLocationKindType = ChangeInputHandler;

export type HandleCityType = ChangeSelectHandler;

export type HandleStoreType = ChangeSelectHandler;

export type HandleSelectedTimeType = ChangeSelectHandler;

// StepTwo

export type GameItemType = GameType;

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

export type HandlePrivateGroupType = ChangeInputHandler;
export type HandlePDescriptionValueType = ChangeTextAreaHandler;

//----data----

// index
export const defaultValues: ValuesType = {
  groupName: "",
  locationKind: "store",
  cityId: 0,
  place: "",
  storeId: 0,
  date: "",
  startTime: "",
  endTime: "",
  totalMemberNum: 2,
  initNum: 1,
  gameIds: [],
  tags: [],
  description: "",
  private: "public",
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

// StepOne
export const defaultStoreData: StoreDataType = {
  stores: [],
  remainingSeats: [],
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
