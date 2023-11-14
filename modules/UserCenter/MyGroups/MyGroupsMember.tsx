import React, { useState } from "react";
import GroupsList from "./GroupsList";

export default function MyGroupsMember() {
  const pageStatus = "member";

  return <GroupsList pageStatus={pageStatus} />;
}
