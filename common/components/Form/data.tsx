import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
import { ButtonType } from "../GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";
import { GroupTagIdType, GroupTagItemType } from "@/constants/globalTypes";

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
  aheadIconStyle?: string;
  full?: boolean;
  strongDesc?: boolean;
};

export type IsInputErrorsType = Record<string, boolean>;

export type TextInputProps = {
  type: "text" | "email" | "number";
  inputName: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  pattern?: RegExp;
  errorMsg?: string;
  isError?: boolean;
};

// RadioInput
export type OptionItemType = {
  text: string;
  inputName: string;
  value: string;
  checked?: boolean;
};

export type RadioInputProps = {
  options: OptionItemType[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  errorMsg?: string;
  className?: string;
  isError?: boolean;
};

// TextArea

export type TextAreaProps = {
  title: string;
  inputName: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
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
  title: string | ReactNode;
  textAreaParams: TextAreaParamsType;
  isError?: boolean;
};

// SelectInput
export type SelectOptionType = {
  value: string;
  text: string;
  checked?: boolean;
};

export type SelectInputProps = {
  inputName: string;
  value: string;
  options: SelectOptionType[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  defaultText?: string;
  required?: boolean;
  disabled?: boolean;
  errorMsg?: string;
  isError?: boolean;
};

// GroupTagSelector

export type GroupTagSelectorProps = {
  selectedTags: GroupTagItemType[];
  setSelectedTags: React.Dispatch<React.SetStateAction<GroupTagItemType[]>>;
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
