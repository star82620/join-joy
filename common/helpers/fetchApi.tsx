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
  data?: unknown;
};

export default async function fetchApi(apiParams: apiParamsType) {
  const { apiPath, method, data } = apiParams;
  const url = process.env.NEXT_PUBLIC_API_URL + apiPath;
  const apiHeaders = {
    Authorization: token,
    "Content-Type": "application/json",
  };

  let body;

  if (typeof data === "object" && data !== null) {
    body = JSON.stringify(data);
  } else if (typeof data === "string") {
    body = data;
  }

  const requestOptions = {
    method: method,
    headers: apiHeaders,
    body: body,
  };
  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
