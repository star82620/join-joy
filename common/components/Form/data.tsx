import { GeneralButtonProps } from "../GeneralButton/data";

export interface InputType {
  label: string;
  type: "text" | "email" | "password";
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
}

export type InputSetType = InputType[];

export type InputErrorsType = Record<string, boolean>;

export type FormProps = {
  inputSet: InputSetType;
  btnSet: GeneralButtonProps;
};
