import React, { useContext, useState } from "react";
import { GroupDataContext } from "@/pages/user-center/group/[id]";
import GameList from "@/common/components/GameList";
import InputBlock from "@/common/components/Form/InputBlock";

export default function GroupDetailForm() {
  const dataContext = useContext(GroupDataContext);
  const { groupData } = dataContext;
  const { groupName, totalMemberNum, games, tags, description, isPrivate } =
    groupData;

  const defaultValues = {
    groupName: groupName,
    totalMemberNum: totalMemberNum,
    games: games,
    tags: tags,
    description: description,
    isPrivate: isPrivate,
  };

  const [values, setValues] = useState(defaultValues);

  const requiredStyle = "mb-1 after:content-['*'] after:text-danger";
  const titleStyle = "mb-1";

  return <div className="flex flex-col gap-8 px-14 py-10 md:p-4"></div>;
}
