export type GroupType = {
  groupName: string;
  memberNum: number;
  groupDate: string;
  storeName?: string;
  storeId?: string; //用id連結去店家詳細頁
};

export type CommentType = {
  commentBy: Record<string, string>;
  group: GroupType;
  msg: string;
  score: number;
  commentDate: string;
};

// {
//   userName: string;
//   userImg: string;
//   userId: string;
//   groupName: string;
//   memberQtu: number;
//   groupDate: string;
//   storeName: string;
//   storeId: string; //用id連結去店家詳細頁
//   msg: string;
//   score: number;
//   commentDate: string;
// };

export type CommentsDataType = {
  averageScore: number;
  comments: CommentType[];
};

export const commentsData: CommentsDataType = {
  averageScore: 5,
  comments: [
    {
      commentBy: {
        userName: "多多",
        userImg: "/images/logo.jpg",
        userId: "1234567",
      },
      group: {
        groupName: "輕鬆派對揪友團",
        memberNum: 8,
        groupDate: "2023-01-10",
        storeName: "軟體高雄六角學院桌遊店",
        storeId: "/", //用id連結去店家詳細頁
      },
      msg: "藍天下的Nebula，每次Sunset都會有不同的Reflection。在此之間，橋梁Link著兩岸，如同Connectivity連結著過去與未來。花朵Bloom，傳遞Nature的語言。",
      score: 4.5,
      commentDate: "2023-10-27",
    },
    {
      commentBy: {
        userName: "少少",
        userImg: "/images/logo.jpg",
        userId: "3234567",
      },
      group: {
        groupName: "輕鬆派對揪友團",
        groupDate: "2023-01-10",
        memberNum: 8,
        storeName: "軟體高雄六角學院桌遊店",
        storeId: "/", //用id連結去店家詳細頁
      },
      msg: "今天的Sky真blue～(✿◠‿◠) 風輕輕Blow，心情就好(⁄ ⁄•⁄ω⁄•⁄ ⁄)。Mountain高，河水Flow，生活就這Mojo！٩(◕‿◕｡)۶",
      score: 4,
      commentDate: "2023-10-27",
    },
  ],
};

export type CommentCardProps = { comment: CommentType };
export type CommentsSectionProps = { data: CommentsDataType };
