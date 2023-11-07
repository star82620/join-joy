const token =
  "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6NiwiQWNjb3VudCI6InRlc3QwM0BnbWFpbC5jb20iLCJJc1N0b3JlT3duZXIiOmZhbHNlLCJOaWNrTmFtZSI6IuS5g-iDluiDliIsIkV4cCI6IjExLzgvMjAyMyAxOjQwOjA0IEFNIn0.rvgKnTpU6k_0V3PIShdEt5kp5BQbHBTkPsaecuXT0r34NoHNLwKSI5KY-yNLf0siV7lvCKRJEVvvXWxzyDgQzA";

// 要用的話要寫這一包資料
// const apiParams = {
//   apiPath: "/users/sign_up",
//   method: "POST",
//   data: {...},
// };
// const data = fetchApi(apiParams);

type methodType = "GET" | "POST" | "PATCH" | "DELETE";

export type apiParamsType = {
  apiPath: string;
  method: methodType;
  data?: Record<string, string> | string;
};

type headersType = {
  Authorization: string;
  "Content-Type": "application/json";
};

type requestOptionsType = {
  method: methodType;
  headers: headersType;
  body?: string;
};

export default async function fetchApi(apiParams: apiParamsType) {
  const { apiPath, method, data } = apiParams;
  const url = `${process.env.NEXT_PUBLIC_API_URL}${apiPath}`;
  const headers: headersType = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  const requestOptions: requestOptionsType = {
    method: method,
    headers: headers,
  };
  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Fetch API error:", error);
    throw error;
  }
}
