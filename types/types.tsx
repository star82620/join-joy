//
export interface InputType {
  label: string;
  type: "text" | "email" | "password";
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
}

export type InputSetType = InputType[];
