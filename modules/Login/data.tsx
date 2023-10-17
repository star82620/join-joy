import React from "react";
import { InputSetType } from "@/types/types";

// ErrorType 也要拆在 Form component 裡面
export type ErrorType = {
  nickname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
};

//之後這個 InputSetType 要拆在 Form component 裡面
export const inputSet: InputSetType = [
  {
    label: "帳號",
    type: "email",
    inputName: "email",
    placeholder: "example@mail.com",
    required: true,
    errorMsg: "", // error.email，把 data 分開，這個 useState 要怎麼辦？
  },
  {
    label: "密碼",
    type: "password",
    inputName: "password",
    placeholder: "輸入6-12位英數字組合",
    required: true,
    errorMsg: "",
  },
];

// export const ErrorMsg = {
//   nickname: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };
