import { InputSetType } from "@/common/components/Form/data";
import { ButtonType } from "@/common/components/GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";

export const inputSet: InputSetType = [
  {
    label: "帳號",
    type: "email",
    inputName: "email",
    placeholder: "example@mail.com",
    required: true,
    errorMsg: "帳號輸入錯誤",
  },
  {
    label: "密碼",
    type: "password",
    inputName: "password",
    placeholder: "輸入6-12位英數字組合",
    required: true,
    errorMsg: "密碼輸入錯誤",
  },
];

export const btnSet: ButtonType = {
  type: "submit",
  children: "登入",
  isDisabled: false,
  appearance: "orange",
  className: "mt-2",
};

//API
export const apiParams: apiParamsType = {
  apiPath: "/auth/login",
  method: "POST",
};
