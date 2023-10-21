const token = ""; //之後再補，看要用什麼方式存放 token

type paramsType = {
  apiPath: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: Record<string, string>;
};

// 要用的話要寫這一包資料
// const params = {
//   apiPath: "/users/sign_up",
//   method: "POST",
//   data: {
//     email: "jjjaa@gmail.com",
//     password: "example",
//     nickname: "example",
//   },
// };
// const data = fetchApi(params);

export default async function fetchApi(params: paramsType) {
  const { apiPath, method, data } = params;
  const url = process.env.NEXT_PUBLIC_API_URL + apiPath;
  const apiHeaders = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  const requestOptions = {
    method: method,
    headers: apiHeaders,
    body: JSON.stringify(data),
  };

  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
