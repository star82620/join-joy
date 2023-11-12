export type ImgType = {
  src: string;
  alt: string;
};

// 這裡的 gameType 是小寫 t（from API）
export type GameType = {
  gameId: number;
  gametype: string;
  gameName: string;
  version: string;
  peopleNum: string;
};

// 事件
export type ChangeInputHandler = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;

export type ChangeSelectHandler = (
  e: React.ChangeEvent<HTMLSelectElement>
) => void;
