import { ButtonType } from "../GeneralButton/data";

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
};

export type InputsProps = {
  inputSet: InputSetType;
  inputErrors: InputErrorsType;
  handleInputValue: React.ChangeEventHandler<HTMLInputElement>;
  handleShowPassword: React.ChangeEventHandler<HTMLInputElement>;
  showPassword: ShowPasswordType;
  inputValues: InputValuesType;
};
