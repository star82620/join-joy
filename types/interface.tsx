//
export interface IInputType {
  label: string;
  type: "text" | "email" | "password";
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
}

export interface IFormType {
  dataSet: IInputType[];
}
