import { ButtonType } from "../GeneralButton/data";

export type InputType = {
  label: string;
  type: "text" | "email" | "password";
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
};

export type InputSetType = InputType[];

export type InputErrorsType = Record<string, boolean>;
export type ShowPasswordType = Record<string, boolean>;
export type InputValuesType = Record<string, string>;

export type FormProps = {
  inputSet: InputSetType;
  btnSet: ButtonType;
};

export type FormInputProps = {
  inputSet: InputSetType;
  inputErrors: InputErrorsType;
  catchInputValue: React.ChangeEventHandler<HTMLInputElement>;
  togglePassword: React.ChangeEventHandler<HTMLInputElement>;
  showPassword: ShowPasswordType;
  inputValues: InputValuesType;
};
