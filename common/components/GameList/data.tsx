export type GameListProps = {
  category: "view" | "form";
};

type GameItemType = {
  gameId: string;
  gameType: string;
  gameName: string;
  peopleNum: string;
  version: string;
  qtu: number;
};

export type SelectedGamesType = Array<string>;

export type GameItemProps = {
  game: GameItemType;
  isReadOnly: boolean;
  handleSelected: React.ChangeEventHandler;
};

export const gamesData: GameItemType[] = [
  {
    gameId: "g131",
    gameType: "派對遊戲",
    gameName: "矮人礦坑",
    peopleNum: "7-8人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: "g231",
    gameType: "陣營遊戲",
    gameName: "大富翁",
    peopleNum: "4人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: "g133",
    gameType: "派對遊戲",
    gameName: "你畫我猜",
    peopleNum: "5-6人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: "g433",
    gameType: "派對遊戲",
    gameName: "大富翁 Battle",
    peopleNum: "5-6人",
    version: "中文",
    qtu: 1,
  },
];
