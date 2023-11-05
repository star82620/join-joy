import React from "react";
import fetchApi from "@/common/helpers/fetchApi";
import { userDataKey } from "./date";

export default function ProfileSetting() {
  const data = fetchApi(userDataKey);
  console.log("data", data);

  return <div>ProfileSetting{data[0]}</div>;
}
