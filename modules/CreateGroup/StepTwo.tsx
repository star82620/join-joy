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
  handlePrivateGroupType,
  handlePDescriptionValueType,
} from "./data";
import GameList from "@/common/components/GameList";
import { SelectedGamesType } from "@/common/components/GameList/data";
import { groupTags } from "@/constants/wordsIndex";

export default function StepTwo() {
  const stepContext = useContext(StepContext);
  const [activeStep, setActiveStep] = stepContext;

  const valuesContext = useContext(ValuesContext);
  const [values, setValues] = valuesContext;

  const isStore = values.locationKind === "store";
  const storeId = values.storeId;
  const descriptionLength = values.description.length;

  // 遊戲列表的資料
  const [gamesData, setGamesData] = useState<GamesDataType>([]);
  console.log("gamesData", gamesData);

  // 被選到的遊戲
  const [selectedGames, setSelectedGames] = useState<SelectedGamesType>([]);

  const isGamesEmpty = gamesData.length === 0;

  const getGamesData = async () => {
    const gamesKey: apiParamsType = {
      apiPath: `${apiPaths.getGames}/${storeId}`,
      method: "GET",
    };
    const res = await fetchApi(gamesKey);
    if (res.data) {
    }
    const data = res.data?.gamelist;
    setGamesData(data);
  };

  useEffect(() => {
    console.log("isStore", isStore);
    console.log("storeId", storeId);
    if (isStore && storeId) {
      // 抓 API data
      getGamesData();
    }
  }, []);

  const handleBtnTwo = () => {
    setActiveStep(3);
  };

  const backPrev = () => {
    setActiveStep(1);
  };

  // 儲存 input value
  const handleDescriptionValue: handlePDescriptionValueType = (e) => {
    setValues((prevState) => ({ ...prevState, description: e.target.value }));
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
          <InputBlock title="遊戲整體面向">
            {/* <div className="w-full h-10 border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"></div> */}
            <select className="appearance-none w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm">
              <option>請選擇遊戲標籤</option>
              {groupTags.map((tag) => (
                <option key={tag.id} value={tag.text}>
                  {tag.text}
                </option>
              ))}
            </select>
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
          const handlePrivateGroup: handlePrivateGroupType = (e) => {
            setValues((prevState) => ({
              ...prevState,
              private: e.target.value,
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
            appearance="orange"
            onClick={handleBtnTwo}
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
