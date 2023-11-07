const token =
  "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6NiwiQ…NYIWhRl3b9zdHCaJJx7rn-XuEyO3HDrYtd4fx20e70-LMSJfQ";

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

type apiHeadersType = {
  Authorization: string;
  "Content-Type": "application/json";
};

type requestOptionsType = {
  method: methodType;
  headers: apiHeadersType;
  body?: string;
};

export default async function fetchApi(apiParams: apiParamsType) {
  const { apiPath, method, data } = apiParams;
  const url = process.env.NEXT_PUBLIC_API_URL + apiPath;
  const apiHeaders: apiHeadersType = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  const requestOptions: requestOptionsType = {
    method: method,
    headers: apiHeaders,
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
    console.log(error);
    throw error;
  }
}
