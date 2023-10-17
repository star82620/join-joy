export interface IInputItem {
  label: string;
  type: string;
  inputName: string;
  placeholder: string;
  required: boolean;
  errorMsg?: string;
}

export interface IFormInputProps {
  formSet: IInputItem[];
}
