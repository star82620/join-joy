import { GameType } from "@/constants/globalTypes";

export type SelectedGameItemType = {
  gameId: GameType["gameId"];
  gameName: GameType["gameName"];
};

export type SelectedGamesType = SelectedGameItemType[];

export type GameListProps = {
  category: "view" | "form";
  gamesData: GameType[];
  selectedGames?: SelectedGamesType;
  setSelectedGames?: React.Dispatch<React.SetStateAction<SelectedGamesType>>;
};

export type GameItemProps = {
  game: GameType;
  isReadOnly: boolean;
  selectedGames?: SelectedGamesType;
  handleSelected?: React.ChangeEventHandler;
};

export const data: GameType[] = [
  {
    gameId: 2,
    gameType: "派對遊戲",
    gameName: "妙語說書人",
    version: "中文",
    peopleNum: "3-6",
    qtu: 10,
  },
  {
    gameId: 3,
    gameType: "派對遊戲",
    gameName: "獨家暗語",
    version: "中文",
    peopleNum: "3-7",
    qtu: 5,
  },
  {
    gameId: 4,
    gameType: "派對遊戲",
    gameName: "傳情畫意",
    version: "中文",
    peopleNum: "4-8",
    qtu: 5,
  },
];
