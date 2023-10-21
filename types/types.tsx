import { type } from "os";

//FormInput
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

//FetchApi
export type apiParamsType = {
  apiPath: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: Record<string, string>;
};
