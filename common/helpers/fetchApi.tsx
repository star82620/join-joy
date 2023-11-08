import getToken from "@/common/helpers/getToken";

const token: string | null = getToken();

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
  const url = `${process.env.NEXT_PUBLIC_API_URL}${apiPath}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = token;
  }
  const requestOptions = {
    method: method,
    headers: headers,
    body: JSON.stringify(data),
  };

  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    console.log("result", result);

    return result;
  } catch (error) {
    console.log(error);
  }
}
