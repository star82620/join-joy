import { InputSetType } from "@/common/components/Form/data";
import { ButtonType } from "@/common/components/GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";

export const title = "會員註冊";

export const inputSet: InputSetType = [
  {
    label: "你的名字",
    type: "text",
    inputName: "nickname",
    placeholder: "例如：多多",
    required: true,
    errorMsg: "* 名字為必填項目",
    // pattern: /^.+$/,
  },
  {
    label: "帳號",
    type: "email",
    inputName: "email",
    placeholder: "example@mail.com",
    required: true,
    errorMsg: "* 帳號為必填項目",
    pattern: /^[-a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
  },
  {
    label: "密碼",
    type: "password",
    inputName: "password",
    placeholder: "輸入 6-12 位英數字組合",
    required: true,
    errorMsg: "* 密碼為必填項目",
    pattern: /^(?=.*[0-9]).{6,12}$/,
  },
  {
    label: "再次輸入密碼",
    type: "password",
    inputName: "confirmPassword",
    placeholder: "再次輸入您的密碼",
    required: true,
    errorMsg: "* 再次輸入密碼為必填項目",
  },
];

//Form 按鈕狀態
const t = () => console.log("我被按了");

export const btnSet: ButtonType = {
  type: "submit",
  children: "註冊",
  isDisabled: false,
  appearance: "orange",
  className: "mt-2",
};

//API
export const apiParams: apiParamsType = {
  apiPath: "/users/sign_up",
  method: "POST",
};
