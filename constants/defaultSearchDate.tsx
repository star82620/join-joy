import { SearchedGroupItemDataType } from "./types/apiTypes/group";
import { StoreSetDataType } from "./types/apiTypes/store";

export const defaultGroupsData: SearchedGroupItemDataType[] = [
  {
    groupId: 0,
    groupName: "",
    groupStatus: "開團中",
    place: "",
    isPrivate: false,
    store: null,
    date: "",
    startTime: "",
    endTime: "",
    totalMemberNum: 0,
    currentpeople: 0,
    isHomeGroup: false,
    games: [
      {
        gameName: "",
        gameType: 0,
      },
    ],

    leader: {
      userId: 0,
      userName: "",
      status: "member",
      initNum: 1,
      profileImg: "",
    },
    members: [],
    tags: [],
  },
];

export const defaultStoresData: StoreSetDataType = [
  {
    storeId: 0,
    storeName: "",
    address: "",
    profileImg: "",
    cover: "",
    openTime: "",
    closeTime: "",
    score: 0,
    description: "",
    tags: [],
    hqTag: true,
    popTag: true,
  },
];
