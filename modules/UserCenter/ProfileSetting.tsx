import React, { useEffect, useState } from "react";
import fetchApi from "@/common/helpers/fetchApi";
import Image from "@/common/components/FillImage";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import PreferBlock from "@/common/components/PreferBlock";
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
  const [userData, setUserData] = useState<UserDataType>({
    userId: 0,
    nickname: "",
    account: "",
    introduce: "",
    gamePref: [],
    cityPref: [],
  });
  const [gameTypes, setGameTypes] = useState<GameType[]>();

  useEffect(() => {
    async function getUserData() {
      const res = await fetchApi(userDataKey);
      if (res?.data) {
        setUserData(res.data);
      }
    }
    async function getGameTypes() {
      const res = await fetchApi(gameTypeKey);
      if (res?.data) {
        setGameTypes(res.data);
      }
    }

    getUserData();
    getGameTypes();
  }, []);

  const userId = userData.userId;
  const nickName = userData.nickname;
  const email = userData.account;
  const description = userData.introduce;
  const games = userData.gamePref;
  const cities = userData.cityPref;
  const defaultValues = {
    nickName: nickName,
    introduct: description,
    gamePrefId: games,
    cityPreId: cities,
  };
  // const [value, setValue] = useState<ValueType>(defaultValues);
  // setValue(defaultValues);

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
              <Link href="/" className="no-underline">
                <span className="text-blue-dark md:text-sm mt-4">
                  重設新的密碼
                </span>
              </Link>
            </div>
            <div>
              <h3 className={`${inputTitleStyle}`}>地區</h3>
              <p className={`${inputDescStyle} mt-2 md:mt-1`}>最多選擇 3 個</p>
              <select className="inputStyle mt-2">
                <option>cityㄅ</option>
                <option>cityˇ</option>
                <option>cityㄑ</option>
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
            <div className="flex flex-wrap gap-x-3 gap-y-2 preferBlocks">
              {gameTypes?.map((gameType) => {
                const typeName = gameType.TypeName;
                let isActive = false;
                games.forEach((game) => {
                  if (game === typeName) return (isActive = true);
                });

                return (
                  <PreferBlock
                    key={typeName}
                    content={typeName}
                    isActive={isActive}
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
