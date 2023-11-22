import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useContext,
  useState,
} from "react";
import { GroupDataContext } from "@/pages/user-center/group/[id]";
import GameList from "@/common/components/GameList";
import TitleBlock from "@/common/components/Form/TitleBlock";
import TextInput from "@/common/components/Form/TextInput";
import { SelectedGamesType } from "@/common/components/GameList/data";
import GroupTagSelector from "@/common/components/Form/GroupTagSelector";
import { groupTags } from "@/constants/wordIndexes";
import { GroupTagItemType } from "@/constants/globalTypes";
import TextArea from "@/common/components/Form/TextArea";
import RadioInput from "@/common/components/Form/RadioInput";
import { questionsWithRadio } from "@/modules/CreateGroup/data";
import Button from "@/common/components/GeneralButton";

export default function GroupDetailForm() {
  const dataContext = useContext(GroupDataContext);
  const { groupData, gamesData } = dataContext;
  const { groupName, totalMemberNum, games, tags, description, isPrivate } =
    groupData;

  const defaultValues = {
    groupName: groupName,
    totalMemberNum: totalMemberNum,
    games: games || [],
    tags: tags || [],
    description: description,
    isPrivate: isPrivate,
  };

  const [values, setValues] = useState(defaultValues);

  const selectedGamesData: SelectedGamesType = games.map((game) => {
    const { gameId, gameName } = game;
    return { gameId, gameName };
  });

  const [selectedGames, setSelectedGames] =
    useState<SelectedGamesType>(selectedGamesData);

  const selectedTagsData = tags.flatMap((tag) => {
    return groupTags.filter((groupTag) => {
      return tag === groupTag.text;
    });
  });

  const [selectedTags, setSelectedTags] =
    useState<GroupTagItemType[]>(selectedTagsData);

  // 儲存 input value
  const handleInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputName = e.target.name;
    setValues((prevState) => ({ ...prevState, [inputName]: e.target.value }));
  };

  // 儲存 textArea value
  const handleDescriptionValue: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setValues((prevState) => ({ ...prevState, description: e.target.value }));
  };

  // 解散揪團
  const handleDisbandGroup: MouseEventHandler<HTMLButtonElement> = () => {
    alert("百年修得同船度，你真的要解散揪團嗎？QQQ");
  };

  return (
    <div className="flex flex-col gap-8 px-14 py-10 md:p-4">
      <TitleBlock title="揪團主旨" require={true}>
        <TextInput
          type="text"
          inputName="groupName"
          value={values.groupName}
          onChange={handleInputValue}
          placeholder="幫你的揪團取一個酷酷的名字吧！(๑•̀ㅂ•́)و✧"
          required={true}
        />
      </TitleBlock>

      <TitleBlock
        title="預計揪團人數"
        description="（如有審核中的團員則不可變更）"
        require={true}
        full
      >
        <TextInput
          type="number"
          inputName="totalMemberNum"
          value={values.totalMemberNum.toString()}
          onChange={handleInputValue}
          placeholder="請填入預計揪團人數"
          required={true}
        />
      </TitleBlock>
      <TitleBlock
        title="預計要玩的遊戲"
        description="最多5款，僅通知店家，實際以現場狀況為主"
        direction="col"
        full
        strongDesc
      >
        <GameList
          category="form"
          gamesData={gamesData}
          selectedGames={selectedGames}
          setSelectedGames={setSelectedGames}
        />
      </TitleBlock>

      <GroupTagSelector
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <TextArea
        title="備註"
        inputName="description"
        maxLength={100}
        rows={4}
        value={values.description}
        onChange={handleDescriptionValue}
        placeholder="如果需要特別標註的部分，請再寫下並讓團員知道！"
      ></TextArea>

      {questionsWithRadio.map((question, index) => {
        const { title, description } = question;
        return (
          <div
            key={question.title}
            className="flex justify-between gap-3 md:flex-col"
          >
            <div>
              <h3 className="text-lg font-semibold md:text-sm">{title}</h3>
              <p className="text-gray-500 text-sm font-semibold mt-1 md:text-xs">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-4 text-md font-semibold md:text-sm">
              <RadioInput
                options={question.options}
                onChange={handleInputValue}
              />
            </div>
          </div>
        );
      })}

      <Button type="submit" appearance="black" rounded>
        儲存變更
      </Button>
      <button
        className="text-sm -mt-4 self-start underline"
        onClick={handleDisbandGroup}
      >
        解散揪團
      </button>
    </div>
  );
}
