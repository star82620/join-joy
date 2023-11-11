export type ImgType = {
  src: string;
  alt: string;
};

// 事件
export type ChangeInputHandler = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;

export type ChangeSelectHandler = (
  e: React.ChangeEvent<HTMLSelectElement>
) => void;
