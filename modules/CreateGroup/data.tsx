import React, { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
import { SelectedGamesType } from "@/common/components/GameList/data";
import { GameType, StoreType } from "@/constants/globalTypes";
import { OptionItemType } from "@/common/components/Form/data";

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

export type SelectedTagIdType =
  | "beginnerTag"
  | "expertTag"
  | "practiceTag"
  | "openTag"
  | "tutorialTag"
  | "casualTag"
  | "competitiveTag";

export type SelectedTagsType = { id: SelectedTagIdType; text: string };

export type LocationKindType = "store" | "place";

export type CityIdType = number;
export type CityValueType = { cityId: number; cityName: string };

export type ValuesType = {
  groupName: string;
  locationKind: LocationKindType;
  city: CityValueType;
  place: string;
  storeId: number;
  date: string;
  startTime: string;
  endTime: string;
  totalMemberNum: number;
  initNum: number;
  description: string;
  groupPrivacy: string;
};

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

export type HandleInputValueType = ChangeEventHandler<HTMLInputElement>;

export type HandleSelectedNumType = ChangeEventHandler<HTMLSelectElement>;

export type HandleSelectedTimeType = ChangeEventHandler<HTMLSelectElement>;

export type PlaceInputProps = {
  place: ValuesType["place"];
  handleInputValue: HandleInputValueType;
};

// StepTwo
export type GameItemType = GameType;

export type GamesDataType = GameItemType[];

export type QuestionType = {
  title: string;
  description: string;
  options: OptionItemType[];
};

type QuestionsWithRadioType = QuestionType[];

export type InputRadioProps = QuestionType & {
  onChange: ChangeEventHandler;
};

export type HandlePrivateGroupType = ChangeEventHandler<HTMLInputElement>;

export type HandlePDescriptionValueType =
  ChangeEventHandler<HTMLTextAreaElement>;

export type HandleSelectedTag = MouseEventHandler;

export type ToggleTagsBlockType = MouseEventHandler;

export type StepTwoProps = {
  selectedGames: SelectedGamesType;
  setSelectedGames: React.Dispatch<React.SetStateAction<SelectedGamesType>>;
  selectedTags: SelectedTagsType[];
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTagsType[]>>;
};

export type StepThreeProps = {
  createdGroupId: number;
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
  groupPrivacy: "public",
};

export const questionsWithRadio: QuestionsWithRadioType = [
  {
    title: "本次開團是否設為『非公開』揪團？",
    description: "僅接受獲得連結的團員加入，不會在平台被找到",
    options: [
      { text: "公開", name: "groupPrivacy", value: "public", checked: true },
      { text: "非公開", name: "groupPrivacy", value: "private" },
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

// StepOne
// const inputParamsSet = {
//   groupName:{

//   }
// }
