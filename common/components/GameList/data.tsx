import { GameType } from "@/constants/globalType";

export type SelectedGameType = {
  gameId: GameType["gameId"];
  gameName: GameType["gameName"];
};

export type SelectedGamesType = SelectedGameType[];

export type GameListProps = {
  category: "view" | "form";
  gamesData: GameType[];
  selectedGames?: SelectedGamesType;
  setSelectedGames?: React.Dispatch<React.SetStateAction<SelectedGamesType>>;
};

export type GameItemProps = {
  game: GameType;
  isReadOnly: boolean;
  handleSelected: React.ChangeEventHandler;
};
