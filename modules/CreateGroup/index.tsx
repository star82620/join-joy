import React, { useState, createContext, FormEventHandler } from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { convertToISO } from "@/common/helpers/convertToISO";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import apiPaths from "@/constants/apiPaths";
import {
  SelectedGamesType,
  SelectedGameItemType,
} from "@/common/components/GameList/data";
import {
  defaultValues,
  ValuesContextType,
  StepContextType,
  CreateGroupPageProps,
  PostValuesType,
  SelectedTagsType,
} from "./data";

// 切換 step
const defaultStepContext: StepContextType = [1, () => {}];

export const StepContext = createContext<StepContextType>(defaultStepContext);

// input values
const defaultValuesContext: ValuesContextType = [defaultValues, () => {}];

export const ValuesContext =
  createContext<ValuesContextType>(defaultValuesContext);

export default function CreateGroup({ citiesData }: CreateGroupPageProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [values, setValues] = useState(defaultValues);
  const [createdGroupId, setCreatedGroupId] = useState(0);

  console.log("values", values);

  // 被選到的遊戲
  const [selectedGames, setSelectedGames] = useState<SelectedGamesType>([]);
  // 被選到的 Tag
  const [selectedTags, setSelectedTags] = useState<SelectedTagsType[]>([]);

  console.log("tags", selectedTags);

  // 整理表單內容變成 POST 用資料
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
      groupPrivacy,
    } = values;

    const formattedStartTime = convertToISO(date, startTime);
    const formattedEndTime = convertToISO(date, endTime);
    const isHomeGroup = locationKind === "place";
    const cityName = city.cityName;

    const setPlace = isHomeGroup ? `${cityName}${place}` : null;
    const setStoreId = !isHomeGroup ? storeId : null;
    const isPrivate = groupPrivacy === "private";

    const formattedGames = selectedGames.reduce(
      (games, game: SelectedGameItemType) => {
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

    // 如果有在 selectedTags 裡面，該 tag 就變成 true 不然 false
    const formattedValues = selectedTags.reduce((values, tag) => {
      const { id } = tag;
      values[id] = true;
      return values;
    }, postValues);

    return formattedValues;
  };

  // 送出開團表單
  const submitCreateGroupHandler: FormEventHandler = async (e) => {
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
      setCreatedGroupId(groupId);
      setActiveStep(3);
    }
  };

  const isStepOne = activeStep === 1;
  const isStepTwo = activeStep === 2;
  const isStepThree = activeStep === 3;

  return (
    <div className="container py-[88px] lg:py-18 md:py-16 sm:py-14">
      <div className="m-auto max-w-[936px]">
        <ModalWrapper title="開團表單">
          <div className="px-[124px] pt-12 pb-14 lg:px-24 md:px-4 md:pt-8 md:pb-12 flex flex-col items-center gap-8 md:gap-6">
            <StepContext.Provider value={[activeStep, setActiveStep]}>
              <ProgressBar />
              <ValuesContext.Provider value={[values, setValues]}>
                <form
                  className="w-full"
                  id="create-group"
                  onSubmit={submitCreateGroupHandler}
                >
                  {isStepOne && <StepOne citiesData={citiesData} />}
                  {isStepTwo && (
                    <StepTwo
                      selectedGames={selectedGames}
                      setSelectedGames={setSelectedGames}
                      selectedTags={selectedTags}
                      setSelectedTags={setSelectedTags}
                    />
                  )}
                  {isStepThree && <StepThree createdGroupId={createdGroupId} />}
                </form>
              </ValuesContext.Provider>
            </StepContext.Provider>
          </div>
        </ModalWrapper>
      </div>
    </div>
  );
}
