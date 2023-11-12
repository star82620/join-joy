import { GameType } from "@/constants/globalType";

export type SelectedGamesType = Array<number>;

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
