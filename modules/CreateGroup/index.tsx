import React, { useState, createContext, useEffect } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import {
  SelectedGamesType,
  SelectedGameType,
} from "@/common/components/GameList/data";
import {
  defaultValues,
  ValuesContextType,
  StepContextType,
  CreateGroupPageProps,
  PostValuesType,
  SelectedTagsType,
  SubmitCreateGroupHandlerType,
} from "./data";
import convertToISO from "@/common/helpers/convertToISO";
import apiPaths from "@/constants/apiPaths";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { useRouter } from "next/router";

// 切換 step
const defaultStepContextValue: StepContextType = [1, () => {}];
export const StepContext = createContext<StepContextType>(
  defaultStepContextValue
);

const defaultValuesContextValue: ValuesContextType = [defaultValues, () => {}];
export const ValuesContext = createContext<ValuesContextType>(
  defaultValuesContextValue
);

export default function CreateGroup({ citiesData }: CreateGroupPageProps) {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(1);
  const [values, setValues] = useState(defaultValues); //要給 api data 的資料
  const [successfulId, setSuccessfulId] = useState(0);

  console.log(values);

  // 被選到的遊戲
  const [selectedGames, setSelectedGames] = useState<SelectedGamesType>([]);

  const [selectedTags, setSelectedTags] = useState<SelectedTagsType[]>([]);

  const formatPostValues = () => {
    const {
      groupName,
      locationKind,
      city,
      place,
      storeId,
      date,
      startTime,
      endTime,
      totalMemberNum,
      initNum,
      description,
      seletedPrivate,
    } = values;

    const formattedStartTime = convertToISO(date, startTime);
    const formattedEndTime = convertToISO(date, endTime);
    const isHomeGroup = locationKind === "place";
    const cityName = city.cityName;

    const setPlace = isHomeGroup ? `${cityName}${place}` : null;
    const setStoreId = !isHomeGroup ? storeId : null;
    const isPrivate = seletedPrivate === "private";

    const formattedGames = selectedGames.reduce(
      (games, game: SelectedGameType) => {
        const { gameId } = game;
        games.push(gameId);
        return games;
      },
      [] as number[]
    );

    const postValues: PostValuesType = {
      groupName: groupName,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      isHomeGroup: isHomeGroup,
      place: setPlace,
      storeId: setStoreId,
      totalMemberNum: totalMemberNum,
      initNum: initNum,
      isPrivate: isPrivate,
      gameId: [0],
      description: description,
      beginnerTag: false,
      expertTag: false,
      practiceTag: false,
      openTag: false,
      tutorialTag: false,
      casualTag: false,
      competitiveTag: false,
    };

    postValues.gameId = formattedGames;

    // 如果裡面有，就跑成 true 不然 false
    const formattedValues = selectedTags.reduce((values, tag) => {
      const { id } = tag;
      values[id] = true;
      return values;
    }, postValues);

    return formattedValues;
  };

  // 送出開團表單
  const submitCreateGroupHandler: SubmitCreateGroupHandlerType = async (e) => {
    e.preventDefault();
    const postValues = formatPostValues();

    const apiParams: apiParamsType = {
      apiPath: apiPaths["submit-create-group"],
      method: "POST",
      data: postValues,
    };

    const res = await fetchApi(apiParams);

    if (res.status) {
      const { groupId } = res;
      setSuccessfulId(groupId);
      setActiveStep(3);
    }
  };

  return (
    <div className="container py-[88px] lg:py-18 md:py-16 sm:py-14">
      <div className="m-auto max-w-[936px]">
        <ModalWrapper title="開團表單">
          <div className="px-[124px] pt-12 pb-14 lg:px-24 md:px-4 md:pt-8 md:pb-12 flex flex-col items-center gap-8 md:gap-6">
            <StepContext.Provider value={[activeStep, setActiveStep]}>
              <ProgressBar />
              <div className="w-full">
                <ValuesContext.Provider value={[values, setValues]}>
                  <form id="create-group" onSubmit={submitCreateGroupHandler}>
                    {activeStep === 1 && <StepOne citiesData={citiesData} />}
                    {activeStep === 2 && (
                      <StepTwo
                        selectedGames={selectedGames}
                        setSelectedGames={setSelectedGames}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                      />
                    )}
                    {activeStep === 3 && (
                      <StepThree successfulId={successfulId} />
                    )}
                  </form>
                </ValuesContext.Provider>
              </div>
            </StepContext.Provider>
          </div>
        </ModalWrapper>
      </div>
    </div>
  );
}
