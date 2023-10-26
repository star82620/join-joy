const token = ""; //之後再補，看要用什麼方式存放 token

// 要用的話要寫這一包資料
// const apiParams = {
//   apiPath: "/users/sign_up",
//   method: "POST",
//   data: {...},
// };
// const data = fetchApi(apiParams);

export type apiParamsType = {
  apiPath: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: Record<string, string> | string;
};

export default async function fetchApi(apiParams: apiParamsType) {
  const { apiPath, method, data } = apiParams;
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
    return result;
  } catch (error) {
    console.log(error.json());
    throw error;
  }
}
