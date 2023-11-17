import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
import { ButtonType } from "../GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";
import { GroupTagIdType } from "@/constants/globalTypes";

export type InputType = {
  label: string;
  type: "text" | "email" | "password";
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
  pattern?: RegExp;
};

export type InputSetType = InputType[];

export type InputErrorsType = Record<string, boolean>;

export type ShowPasswordType = Record<string, boolean | undefined>;

export type InputValuesType = Record<string, string>;

export type FormProps = {
  inputSet: InputSetType;
  btnSet: ButtonType;
  apiParams: apiParamsType;
};

export type InputsProps = {
  inputSet: InputSetType;
  inputErrors: InputErrorsType;
  handleInputValue: React.ChangeEventHandler<HTMLInputElement>;
  handleShowPassword: React.ChangeEventHandler<HTMLInputElement>;
  showPassword: ShowPasswordType;
  inputValues: InputValuesType;
};

// ----

// TitleBlock
export type TitleBlockProps = {
  title: string;
  titleStyle?: string;
  description?: string;
  direction?: "row" | "col";
  require?: boolean;
  children: ReactNode;
};

export type IsInputErrorsType = Record<string, boolean>;

// TextInput
export type TextInputParamsType = {
  inputName: string;
  type: "text" | "email" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  pattern?: RegExp;
  errorMsg?: string;
};

export type TextInputProps = {
  textInputParams: TextInputParamsType;
  isInputErrors?: IsInputErrorsType;
};

// RadioInput
export type OptionItemType = {
  text: string;
  name: string;
  value: string;
  checked?: boolean;
};

export type RadioInputProps = {
  options: OptionItemType[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  errorMsg?: string;
  className?: string;
  isInputErrors?: IsInputErrorsType;
};

// TextArea
export type TextAreaParamsType = {
  inputName: string;
  value: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  errorMsg?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export type TextAreaProps = {
  title: string;
  textAreaParams: TextAreaParamsType;
  isInputErrors?: IsInputErrorsType;
};

// GroupTagSelector

export type SelectedTagsItemType = { id: GroupTagIdType; text: string };

export type GroupTagSelectorProps = {
  selectedTags: SelectedTagsItemType[];
  setSelectedTags: React.Dispatch<React.SetStateAction<SelectedTagsItemType[]>>;
};

export type ToggleTagsBlockType = MouseEventHandler<HTMLElement>;

export type HandleSelectedTagType = MouseEventHandler<HTMLElement>;

// ---- data ----

export const defaultErrorText = "這裡必填哦 ヽ(=^･ω･^=)丿";

// GroupTagSelector
export const GroupTagIds: Array<GroupTagIdType> = [
  "beginnerTag",
  "expertTag",
  "practiceTag",
  "openTag",
  "tutorialTag",
  "casualTag",
  "competitiveTag",
];
