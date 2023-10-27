type commentType = {
  userName: string;
  userImg: string;
  groupName: string;
  groupMemberQtu: number;
  groupDate: Date;
  storeName: string;
  storeId: string; //用id連結去店家詳細頁
  msg: string;
  score: number;
  commentDate: Date;
};

const comment = {
  userName: "多多",
  userImg: "/images/icon-header-user.svg",
  groupName: "輕鬆派對揪友團",
  groupMemberQtu: 8,
  groupDate: "2023-01-10",
  storeName: "軟體高雄六角學院桌遊店",
  storeId: "/", //用id連結去店家詳細頁
  msg: "藍天下的Nebula，每次Sunset都會有不同的Reflection。在此之間，橋梁Link著兩岸，如同Connectivity連結著過去與未來。花朵Bloom，傳遞Nature的語言。",
  score: 4.5,
  commentDate: "2023-10-27",
};
