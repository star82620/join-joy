import React, { useEffect, useState } from "react";
import fetchApi from "@/common/helpers/fetchApi";
import Image from "@/common/components/FillImage";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import PreferenceBlock from "@/common/components/PreferenceBlock";
import {
  gameTypeKey,
  userDataKey,
  GameType,
  UserDataType,
  ValueType,
} from "./date";

const inputTitleStyle = "text-lg md:text-md mb-2 md:mb-1";
const inputDescStyle = "text-sm md:text-xs text-gray-500";

export default function ProfileSetting() {
  // 使用者資料
  const [userData, setUserData] = useState<UserDataType>({
    userId: 0,
    email: "",
    nickName: "",
    description: "",
    games: [],
    cities: [],
  });

  // 所有的遊戲類型資料
  const [gameTypes, setGameTypes] = useState<GameType[]>([]);

  // 被選中的喜好遊戲資料
  const [activeGames, setActiveGames] = useState<ValueType["games"]>([]);

  // input 的資料，之後要 POST API
  const [inputValues, setInputValues] = useState<ValueType>({
    nickName: "",
    description: "",
    games: [],
    cities: [],
  });

  useEffect(() => {
    // 獲取使用者資料
    async function getUserData() {
      const res = await fetchApi(userDataKey);
      if (res?.data) {
        const { nickName, description, cities, games } = res.data;
        const defaultValues: ValueType = {
          nickName: nickName,
          description: description,
          games: games,
          cities: cities,
        };
        setUserData(res.data);
        setActiveGames(games);
        setInputValues(defaultValues);
      }
    }

    // 獲取所有遊戲類型
    async function getGameTypes() {
      const res = await fetchApi(gameTypeKey);
      if (res?.data) {
        setGameTypes(res.data);
      }
    }

    getUserData();
    getGameTypes();
  }, []);

  useEffect(() => {}, [activeGames]);

  const { userId, nickName, email, description, cities } = userData;
  const gamesPref = userData.games;
  console.log("activeGames", activeGames);

  return (
    <section className="p-8 md:px-4">
      <form className="flex flex-col gap-10">
        <div className="flex md:flex-col justify-between items-start gap-6">
          <div className="w-full flex flex-col gap-10 md:gap-6 md:order-2">
            <div>
              <h3 className={`${inputTitleStyle} `}>你的名字</h3>
              <input
                type="text"
                className="inputStyle mt-2 md:mt-1"
                name="nickName"
                defaultValue={nickName}
                onChange={(e) =>
                  setInputValues((prevState) => ({
                    ...prevState,
                    nickName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <h3 className={`${inputTitleStyle}`}>帳號</h3>
              <input
                type="email"
                className="inputStyle mt-2 md:mt-1"
                defaultValue={email}
                disabled
              />
            </div>
            <div>
              <h3 className={`${inputTitleStyle}`}>密碼</h3>
              <Link href="/forget-password" className="no-underline">
                <span className="text-blue-dark md:text-sm mt-4">
                  重設新的密碼
                </span>
              </Link>
            </div>
            <div>
              <h3 className={`${inputTitleStyle}`}>地區</h3>
              <p className={`${inputDescStyle} mt-2 md:mt-1`}>最多選擇 3 個</p>
              <select className="inputStyle mt-2">
                <option>cityA</option>
                <option>cityB</option>
                <option>cityC</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-6 bg-yellow-tint px-20 py-4 md:px-0 md:py-3 md:order-1">
            <div>
              <h3 className="text-lg md:text-md">大頭貼</h3>
              <p className="text-sm md:text-xs text-gray-500 mt-1">
                圖片需小於 2MB
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                src=""
                alt="userName"
                widthProp="w-[145px] md:w-[108px]"
                heightProp="h-[145px] md:h-[108px]"
              />
              <Button type="submit" appearance="white" rounded>
                <span className="font-semibold text-sm md:text-xs ">
                  變更大頭貼
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-6">
          <div>
            <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>喜好遊戲種類</h3>
            <p className={`${inputDescStyle} mb-4 md:mb-2`}>最多選擇3個</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 preferenceBlocks">
              {gameTypes.map((gameType) => {
                const typeName = gameType.TypeName;
                const typeId = gameType.Id;
                let isActive = false;

                // 喜歡的遊戲 => isActive
                gamesPref.forEach((game) => {
                  if (game === typeId) return (isActive = true);
                });

                const handleSelectGames = (gameId: number) => {
                  // 檢查選中的遊戲是否已經在列表中
                  const isAlreadyActive = activeGames.includes(gameId);
                  const isInLimit = activeGames.length < 3;

                  // 如果已經在列表中，找出不包含被點擊這個 id 的選項並塞進 activeGames
                  if (isAlreadyActive) {
                    const filterItem = activeGames.filter(
                      (id) => id !== gameId
                    );
                    setActiveGames(filterItem);
                  }

                  // 如果不在列表中，則添加到列表中，但要確保列表不超過3個
                  if (!isAlreadyActive && isInLimit) {
                    return setActiveGames([...activeGames, gameId]);
                  }

                  // 如果已經有3個遊戲，可以選擇提示用戶或者替換掉一個
                  alert("最多只能選擇3個喜好遊戲");
                };

                return (
                  <PreferenceBlock
                    key={typeName}
                    id={typeId}
                    content={typeName}
                    isActive={isActive}
                    onClick={() => handleSelectGames(typeId)}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h3 className={`${inputTitleStyle}`}>個人簡介</h3>
            <p className={`flex justify-between mt-2 md:mt-2`}>
              <span className={`${inputDescStyle}`}>讓更多人認識你唷</span>
              <span className="text-sm md:text-xs font-bold">0/100</span>
            </p>
            <textarea
              className="inputStyle mt-2"
              placeholder="輸入你的自我介紹"
              defaultValue={description}
              onChange={(e) =>
                setInputValues((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            ></textarea>
          </div>
        </div>
      </form>
      <div className="flex gap-6 md:gap-4 justify-center items-center mt-10 md:mt-8">
        <Button
          type="submit"
          appearance="white"
          className="w-full text-lg"
          rounded
        >
          放棄變更
        </Button>
        <Button type="submit" appearance="black" className="w-full" rounded>
          儲存
        </Button>
      </div>
    </section>
  );
}
