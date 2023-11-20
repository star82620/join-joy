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
