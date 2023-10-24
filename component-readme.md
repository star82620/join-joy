



// ----------------------------------------------
### @/common/components/Wrapper
### Props: title, titleStyle

type WrapperProps = {
  title: string;
  titleStyle: string;
  children: ReactNode;
};

// ----------------------------------------------
### @/common/components/GeneralLink
### Props
type Props = {
  href: string;
  children: ReactNode;
  target?: string;
  className?: string;
}

// ----------------------------------------------
### @/common/components/GeneralButton
### Props: btnSet
type ButtonType = {
  type: "button" | "submit" | "reset";
  appearance: "orange" | "yellow" | "light";
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void | undefined;
  isDisabled?: boolean;
  className?: string;
};

// ----------------------------------------------
### @/common/components/Form
### Props: inputSet, btnSet, apiParams

// inputSet: InputType[]
const inputSet: InputSetType = 
  {
    label: "你的名字",
    type: "text",
    inputName: "nickname",
    placeholder: "例如：多多",
    required: true,
    errorMsg: "* 名字格式錯誤",
    // pattern: /^.+$/,
  },

// ----------------------------------------------
### common/helpers/FetchApi
### Props: apiParams

const apiParams:apiParamsType = {
  apiPath: "/users/sign_up",
  method: "POST",
  data: {...},
};

// 執行
const data = fetchApi(apiParams);