type GameType = {
  gameId: string;
  type: string;
  gameName: string;
  peopleNum: string;
  version: string;
  qtu: number;
};

export type GameItemProps = {
  game: GameType;
  isReadOnly: boolean;
};

export const gamesData: GameType[] = [
  {
    gameId: "g131",
    type: "派對遊戲",
    gameName: "矮人礦坑",
    peopleNum: "7-8人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: "g231",
    type: "陣營遊戲",
    gameName: "大富翁",
    peopleNum: "4人",
    version: "中文",
    qtu: 1,
  },
  {
    gameId: "g133",
    type: "派對遊戲",
    gameName: "你畫我猜",
    peopleNum: "5-6",
    version: "中文",
    qtu: 1,
  },
];
