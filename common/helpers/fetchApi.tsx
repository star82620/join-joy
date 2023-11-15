import getToken from "@/common/helpers/getToken";

export type apiParamsType = {
  apiPath: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  data?: unknown;
  authToken?: string;
};

export default async function fetchApi(apiParams: apiParamsType) {
  const { apiPath, method, data, authToken } = apiParams;

  const token: string | null = authToken ? `Bearer ${authToken}` : getToken();

  const url = `${process.env.NEXT_PUBLIC_API_URL}${apiPath}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = token;
  }

  let body;

  if (typeof data === "object" && data !== null) {
    body = JSON.stringify(data);
  } else if (typeof data === "string") {
    body = data;
  }

  const requestOptions = {
    method: method,
    headers: headers,
    body: body,
  };

  try {
    const res = await fetch(url, requestOptions);
    const result = await res.json();

    console.log("fetchApi", result);

    return result;
  } catch (error) {
    console.log(error);
  }
}
