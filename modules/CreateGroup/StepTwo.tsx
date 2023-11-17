import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { StepContext, ValuesContext } from "./index";
import GameList from "@/common/components/GameList";
import TitleBlock from "@/common/components/Form/TitleBlock";
import RadioInput from "@/common/components/Form/RadioInput";
import GroupTagSelector from "@/common/components/Form/GroupTagSelector";
import TextArea from "@/common/components/Form/TextArea";
import { TextAreaParamsType } from "@/common/components/Form/data";
import {
  questionsWithRadio,
  GamesDataType,
  HandlePrivateGroupType,
  HandlePDescriptionValueType,
  HandleSelectedTag,
  ToggleTagsBlockType,
  StepTwoProps,
} from "./data";

export default function StepTwo({
  selectedGames,
  setSelectedGames,
  selectedTags,
  setSelectedTags,
}: StepTwoProps) {
  const stepContext = useContext(StepContext);
  const [activeStep, setActiveStep] = stepContext;

  const valuesContext = useContext(ValuesContext);
  const [values, setValues] = valuesContext;

  const isStore = values.locationKind === "store";
  const storeId = values.storeId;

  // 取得遊戲列表的資料
  const [gamesData, setGamesData] = useState<GamesDataType>([]);

  const isGamesEmpty = gamesData.length === 0;

  useEffect(() => {
    const getGamesData = async () => {
      const gamesKey: apiParamsType = {
        apiPath: `${apiPaths.getGames}/${storeId}`,
        method: "GET",
      };
      const res = await fetchApi(gamesKey);
      const data = res.data ? res.data.gamelist : [];
      setGamesData(data);
    };

    if (isStore && storeId) {
      getGamesData();
    }
  }, []);

  // 上一頁
  const backPrev = () => {
    setActiveStep(1);
  };

  // 儲存 textArea value
  const handleDescriptionValue: HandlePDescriptionValueType = (e) => {
    setValues((prevState) => ({ ...prevState, description: e.target.value }));
  };

  // 儲存 groupPrivacy value
  const handlePrivateGroup: HandlePrivateGroupType = (e) => {
    const inputName = e.target.name;
    setValues((prevState) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };

  const descriptionInputParams: TextAreaParamsType = {
    inputName: "description",
    value: values.description,
    onChange: handleDescriptionValue,
    maxLength: 100,
    rows: 4,
    placeholder: "如果需要特別標註的部分，請再寫下並讓團員知道！",
  };

  return (
    <>
      <section className="flex flex-col w-full gap-10">
        {isStore && (
          <label>
            <TitleBlock title="預計要玩的遊戲" titleStyle="block">
              <p className="text-gray-500 text-sm font-semibold mt-1 md:text-xs">
                最多5款，僅通知店家，實際以現場狀況為主
              </p>
              <div className="inputStyle h-12 flex gap-2 items-center text-gray-400">
                {selectedGames.map((game) => {
                  const { gameId, gameName } = game;
                  return (
                    <div
                      key={gameId}
                      className="px-2 py-1 rounded-sm border border-gray-800 text-gray-950 font-medium"
                    >
                      {gameName}
                    </div>
                  );
                })}
                {isGamesEmpty && <p>請在下列表單選擇預計要玩的遊戲</p>}
              </div>
              <div className="mt-3">
                <GameList
                  category="form"
                  gamesData={gamesData}
                  selectedGames={selectedGames}
                  setSelectedGames={setSelectedGames}
                />
              </div>
            </TitleBlock>
          </label>
        )}
        <GroupTagSelector
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        <TextArea title="備註" textAreaParams={descriptionInputParams} />

        {questionsWithRadio.map((question, index) => {
          const { title, description } = question;
          return (
            <section
              key={index}
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
                  onChange={handlePrivateGroup}
                />
              </div>
            </section>
          );
        })}

        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <Button
            type="submit"
            form="create-group"
            appearance="orange"
            className="px-[158px] md:py-2 md:px-3 md:w-full"
          >
            完成開團
          </Button>

          <p className="underline" onClick={backPrev}>
            上一頁
          </p>
          <Link href="/">返回首頁</Link>
        </div>
      </section>
    </>
  );
}
