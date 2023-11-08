import React, { useState } from "react";
import GroupsList from "./GroupsList";

export default function MyGroupsMember() {
  const memberStatus = "member";

  return <GroupsList memberStatus={memberStatus} />;
}
