// signup
export type RegisterRequestType = {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  // profileImg: string;
};

//Login
export type LoginRequestType = {
  email: string;
  password: string;
};

//check Login Status
export type AuthResType = {
  userId: number;
  nickName: string;
  photo: string; //profileImg
};
