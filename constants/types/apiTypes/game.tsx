// Game Categories
export type GameCategoryItemType = {
  Id: number;
  TypeName: string;
};

export type GameCategoriesType = GameCategoryItemType[];

//
export type GameItemType = {
  gameName: string;
  gameType: number;
};

export type GameNameType = {
  gameId: number;
  gameName: string;
};

// Games in store
export type GameInStoreNameType = GameNameType & {
  gameType: string;
};

export type GamesInStoreItemType = GameInStoreNameType & {
  version: string;
  peopleNum: string;
  qtu: number;
};

export type GamesInStoreType = GamesInStoreItemType[];

// Games in group
export type GameInGroupNameType = GameNameType & {
  gameType: number;
};

export type GamesInGroupType = GameInGroupNameType[];
