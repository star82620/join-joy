import { InputSetType } from "@/common/components/Form/data";
import { ButtonType } from "@/common/components/GeneralButton/data";
import { apiParamsType } from "@/common/helpers/fetchApi";




// 不妙阿，這個表單不能適用之前的元件
export const inputSet:InputSetType = [
  {
    label: "揪團主旨",
    type: "text",
    inputName: "",
    placeholder: "請幫你的揪團取一個酷酷的名字！",
    required: true,
    errorMsg: "*",
    // pattern: /^.+$/,
  },
  {
    label: "地點",
    type: "",
    inputName: "",
    placeholder: "",
    required: true,
    errorMsg: "*",
    // pattern: /^.+$/,
  },
  {
    label: "開始時間",
    type: "select",
    inputName: "",
    placeholder: "請選擇開始時間",
    required: true,
    errorMsg: "*",
    // pattern: /^.+$/,
  },
  {
    label: "結束時間",
    type: "select",
    inputName: "",
    placeholder: "請選擇結束時間",
    required: true,
    errorMsg: "*",
    // pattern: /^.+$/,
  },
  {
    label: "預計揪團人數",
    type: "text",
    inputName: "nickname",
    placeholder: "請選擇人數",
    required: true,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
  {
    label: "內建人數",
    type: "text",
    inputName: "nickname",
    placeholder: "請選擇結束時間",
    required: true,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
  {
    label: "預計要玩的遊戲",
    type: "text",
    inputName: "nickname",
    placeholder: "請在下列表單選擇預計要玩的遊戲",
    required: false,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
  {
    label: "遊戲整體面向",
    type: "text",
    inputName: "nickname",
    placeholder: "請選擇遊戲標籤",
    required: false,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
  {
    label: "備註",
    type: "text",
    inputName: "nickname",
    placeholder: "如果需要特別標註的部分，請再寫下並讓團員知道！",
    required: false,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
  {
    label: "本次開團是否設為『非公開』揪團？",
    type: "checkbox",
    inputName: "nickname",
    placeholder: "僅接受獲得連結的團員加入，不會在平台被找到",
    required: false,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
  {
    label: "成團後是否接受團員進出？",
    type: "checkbox",
    inputName: "nickname",
    placeholder: "送出預約後系統會自動鎖定揪團，直到結團前皆可再編輯",
    required: false,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },
];

export const btnSet:ButtonType = {
  type: "submit",
  appearance: "orange",
}

export const apiParams:apiParamsType = {
  apiPath: "",
  method: "POST",
}
