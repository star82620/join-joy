const token = ""; //之後再補，看要用什麼方式存放 token

type dataSetType = {
  apiUrl: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  requestData?: Record<string, string>;
  // needAuth: boolean;
};

// 要用的話要寫這一包資料
// const apiSet = {
//   apiUrl: "https://todolist-api.hexschool.io/users/sign_up",
//   method: "POST",
//   requestData: {
//     email: "jjjaa@gmail.com",
//     password: "example",
//     nickname: "example",
//   },
// };
// const ress = await fetchApi(apiSet);
// console.log("signup", ress);

export default async function fetchApi(dataSet: dataSetType) {
  const { apiUrl, method, requestData } = dataSet;
  // const authHeader = needAuth ? `Authorization: ${token}` : null; //這個有必要嗎？還是沒有的話就給auth欄位空著？

  const apiHeaders = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  const requestOptions = {
    method: method,
    headers: apiHeaders,
    body: JSON.stringify(requestData),
  };

  try {
    const res = await fetch(apiUrl, requestOptions);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
