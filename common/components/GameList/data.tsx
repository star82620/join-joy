import {
  GameNameType,
  GamesInStoreItemType,
  GamesInStoreType,
} from "@/constants/types/apiTypes/game";

export type SelectedGameItemType = GameNameType;

export type SelectedGamesType = SelectedGameItemType[];

export type GameListProps = {
  category: "view" | "form";
  gamesData: GamesInStoreType;
  selectedGames?: SelectedGamesType;
  setSelectedGames?: React.Dispatch<React.SetStateAction<SelectedGamesType>>;
};

export type GameItemProps = {
  game: GamesInStoreItemType;
  isReadOnly: boolean;
  selectedGames?: SelectedGamesType;
  handleSelected?: React.ChangeEventHandler;
};
