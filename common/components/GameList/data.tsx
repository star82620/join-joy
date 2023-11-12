import { GameType } from "@/constants/globalType";

export type SelectedGamesType = Array<number>;

export type GameListProps = {
  category: "view" | "form";
  gamesData: GameType[];
  selectedGames?: SelectedGamesType;
  setSelectedGames?: React.Dispatch<React.SetStateAction<SelectedGamesType>>;
};

type GameItemType = {
  gameId: number;
  gameType: string;
  gameName: string;
  peopleNum: string;
  version: string;
  qtu: number;
};

export type GameItemProps = {
  game: GameItemType;
  isReadOnly: boolean;
  handleSelected: React.ChangeEventHandler;
};

export const gamesData: GameItemType[] = [
  {
    gameId: 31,
    gameType: "派對遊戲",
    gameName: "矮人礦坑",
    peopleNum: "7-8人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: 32,
    gameType: "陣營遊戲",
    gameName: "大富翁",
    peopleNum: "4人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: 33,
    gameType: "派對遊戲",
    gameName: "你畫我猜",
    peopleNum: "5-6人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: 34,
    gameType: "派對遊戲",
    gameName: "大富翁 Battle",
    peopleNum: "5-6人",
    version: "中文",
    qtu: 1,
  },
];
