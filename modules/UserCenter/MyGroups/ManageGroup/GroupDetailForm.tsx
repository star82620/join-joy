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

  return (
    <div className="flex flex-col gap-8 px-14 py-10 md:p-4">
      <InputBlock title="揪團主旨" require>
        <input type="text" className="inputStyle" value={values["groupName"]} />
      </InputBlock>
      <InputBlock
        title="預計揪團人數"
        description="（如有審核中的團員則不可變更）"
        require
      >
        <input
          type="text"
          className="inputStyle"
          value={values["totalMemberNum"]}
        />
      </InputBlock>
      <InputBlock title="預計要玩的遊戲">
        <p className="mt-1 text-gray-500 font-semibold text-sm md:text-xs">
          最多5款，僅通知店家，實際以現場狀況為主
        </p>
        <GameList category="form"></GameList>
      </InputBlock>
    </div>
  );
}
