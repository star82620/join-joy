import React, { FormEvent, ReactNode } from "react";
import { SelectedGamesType } from "@/common/components/GameList/data";
import {
  ChangeInputHandler,
  ChangeSelectHandler,
  ChangeTextAreaHandler,
  ClickHandler,
  GameType,
  StoreType,
} from "@/constants/globalTypes";

// page
export type CityDataType = {
  Id: number;
  CityName: string;
};

export type CitiesDataType = CityDataType[];

export type CreateGroupPageProps = {
  citiesData: CitiesDataType;
};

// index

export type StepContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

export type ValuesContextType = [
  ValuesType,
  React.Dispatch<React.SetStateAction<ValuesType>>
];

// export type SelectedTagIdType = "beginnerTag"|"expertTag"|"practiceTag"|"openTag"|"tutorialTag"|"casualTag"|"competitiveTag";

export type SelectedTagsType = { id: string; text: string };

// 要給 api 的資料重新寫一份
export type PostValuesType = {
  groupName: string;
  startTime: string;
  endTime: string;
  isHomeGroup: boolean;
  place: string | null;
  storeId: number | null;
  totalMemberNum: number;
  initNum: number;
  description: string;
  isPrivate: boolean;
  gameId: Array<number>;
  beginnerTag: boolean;
  expertTag: boolean;
  practiceTag: boolean;
  openTag: boolean;
  tutorialTag: boolean;
  casualTag: boolean;
  competitiveTag: boolean;
};

export type CityValueType = { cityId: number; cityName: string };

export type ValuesType = {
  groupName: string;
  locationKind: string;
  city: CityValueType;
  place: string;
  storeId: number;
  date: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  initNum: number;
  description: string;
  seletedPrivate: string;
};

export type LocationKindType = "store" | "place";

export type CityIdType = number;

export type SubmitCreateGroupHandlerType = (e: FormEvent) => void;

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
  acceptedNum: number;
};

export type HandleInputValueType = ChangeInputHandler;

export type HandleSelectedNumType = ChangeSelectHandler;

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

export type HandleSelectedTag = ClickHandler;

export type ToggleTagsBlockType = ClickHandler;

export type StepTwoProps = {
  selectedGames: SelectedGamesType;
  setSelectedGames: React.Dispatch<React.SetStateAction<SelectedGamesType>>;
  selectedTags: SelectedTagsType[];
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTagsType[]>>;
};

//----data----

// index
export const defaultValues: ValuesType = {
  groupName: "",
  locationKind: "store",
  city: { cityId: 0, cityName: "" },
  place: "",
  storeId: 0,
  date: "",
  startTime: "",
  endTime: "",
  totalMemberNum: 2,
  initNum: 1,
  description: "",
  seletedPrivate: "public",
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

export const defaultPostValues: PostValuesType = {
  groupName: "string",
  startTime: "2023-11-13T07:33:30.710Z",
  endTime: "2023-11-13T07:33:30.710Z",
  isHomeGroup: true,
  place: "string",
  storeId: 0,
  totalMemberNum: 0,
  initNum: 0,
  isPrivate: false,
  gameId: [0],
  description: "string",
  beginnerTag: true,
  expertTag: true,
  practiceTag: true,
  openTag: true,
  tutorialTag: true,
  casualTag: true,
  competitiveTag: true,
};

// StepOne
export const defaultStoreData: StoreDataType = {
  stores: [],
  remainingSeats: [],
  acceptedNum: 0,
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
