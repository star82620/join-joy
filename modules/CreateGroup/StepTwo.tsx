import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import InputBlock from "./InputBlock";
import InputRadio from "./InputRadio";
import { StepContext, ValuesContext } from "./index";
import {
  questionsWithRadio,
  GamesDataType,
  HandlePrivateGroupType,
  HandlePDescriptionValueType,
  HandleSelectedTag,
  ToggleTagsBlockType,
  StepTwoProps,
} from "./data";
import GameList from "@/common/components/GameList";

import { groupTags } from "@/constants/wordsIndex";
import FillImage from "@/common/components/FillImage";
import icons from "@/constants/iconsPackage/createGroupIcons";

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
  const descriptionLength = values.description.length;

  // 遊戲列表的資料
  const [gamesData, setGamesData] = useState<GamesDataType>([]);

  const isGamesEmpty = gamesData.length === 0;

  const getGamesData = async () => {
    const gamesKey: apiParamsType = {
      apiPath: `${apiPaths.getGames}/${storeId}`,
      method: "GET",
    };
    const res = await fetchApi(gamesKey);
    const data = res.data ? res.data.gamelist : [];
    setGamesData(data);
  };

  useEffect(() => {
    if (isStore && storeId) {
      getGamesData();
    }
  }, []);

  const backPrev = () => {
    setActiveStep(1);
  };

  // 儲存 input value
  const handleDescriptionValue: HandlePDescriptionValueType = (e) => {
    setValues((prevState) => ({ ...prevState, description: e.target.value }));
  };

  const [isTagsHidden, setIsTagsHidden] = useState<boolean>(true);

  const isEmptySelectedTags = selectedTags.length === 0;
  const toggleIcon = isTagsHidden ? "arrow-down" : "arrow-up";
  const toggleTagsBlock: ToggleTagsBlockType = (e) => {
    setIsTagsHidden(!isTagsHidden);
  };
  const handleSelectedTag: HandleSelectedTag = (e) => {
    const { id, text } = e.currentTarget.dataset;
    if (!id || !text) return;
    const tagValue = { id, text };

    const index = selectedTags.findIndex((item) => {
      return item.id === id;
    });

    if (index < 0) {
      setSelectedTags((prevState) => [...prevState, tagValue]);
    }

    if (index >= 0) {
      const newValue = [...selectedTags];
      newValue.splice(index, 1);
      setSelectedTags(newValue);
    }
  };

  return (
    <>
      <section className="flex flex-col w-full gap-10">
        {isStore && (
          <label>
            <InputBlock title="預計要玩的遊戲" titleStyle="block">
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
            </InputBlock>
          </label>
        )}
        <label>
          <InputBlock title="揪團整體面向">
            <div className="relative" onClick={(e) => toggleTagsBlock(e)}>
              <div className="w-full h-10 inputStyle last:after:content-['']">
                {isEmptySelectedTags && (
                  <span className="text-gray-500">可複選</span>
                )}
                {selectedTags.map((tag, index, ary) => {
                  const tagStyle =
                    index !== ary.length - 1 ? "after:content-['、']" : "";
                  return (
                    <span
                      key={tag.text}
                      className={`before:content-['#'] ${tagStyle} `}
                    >
                      {tag.text}
                    </span>
                  );
                })}
              </div>
              <span className="absolute top-2 right-3">
                <FillImage
                  src={icons[toggleIcon].src}
                  alt={icons[toggleIcon].alt}
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
              </span>
              {!isTagsHidden && (
                <div className="w-full bg-white py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm absolute left-0 top-10">
                  {groupTags.map((tag) => (
                    <p
                      key={tag.id}
                      className="p-2 hover:bg-gray-50"
                      data-id={tag.id}
                      data-text={tag.text}
                      onClick={(e) => handleSelectedTag(e)}
                    >
                      #{tag.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </InputBlock>
        </label>
        <label>
          <section className="w-full">
            <div className="flex justify-between items-end ">
              <h3 className="text-lg font-semibold md:text-md">備註</h3>
              <span className="text-sm md:text-xs">
                {descriptionLength}/100
              </span>
            </div>
            <textarea
              className="w-full h-20 border-b-2 bg-yellow-tint mt-2 md:mt-1 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
              name="description"
              value={values.description}
              onChange={handleDescriptionValue}
              maxLength={100}
              rows={4}
              placeholder="如果需要特別標註的部分，請再寫下並讓團員知道！"
            />
          </section>
        </label>
        {questionsWithRadio.map((question, index) => {
          const handlePrivateGroup: HandlePrivateGroupType = (e) => {
            setValues((prevState) => ({
              ...prevState,
              seletedPrivate: e.target.value,
            }));
          };
          return (
            <InputRadio
              title={question.title}
              description={question.description}
              options={question.options}
              key={index}
              onChange={handlePrivateGroup}
            />
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
