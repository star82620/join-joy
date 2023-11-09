import React, { useState } from "react";
import GroupsList from "./GroupsList";

export default function MyGroupsLeader() {
  const pageStatus = "leader";

  return <GroupsList pageStatus={pageStatus} />;
}
