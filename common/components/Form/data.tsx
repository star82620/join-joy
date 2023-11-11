import { ButtonType } from "../GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";

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

// TextInput
export type TextInputProps = {
  inputName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};
