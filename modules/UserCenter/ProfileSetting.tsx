import React, { Children, useContext, useEffect, useState } from "react";
import Image from "@/common/components/FillImage";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import TitleBlock from "@/common/components/Form/TitleBlock";
import TextInput from "@/common/components/Form/TextInput";
import { DataContext } from "@/pages/user-center";
import SelectInput from "@/common/components/Form/SelectInput";
import TextArea from "@/common/components/Form/TextArea";
import { useAuth } from "@/common/hooks/useAuth";
import PreferenceBlock from "@/common/components/PreferenceBlock";

const inputTitleStyle = "text-lg md:text-md mb-2 md:mb-1";
const inputDescStyle = "text-sm md:text-xs text-gray-500";

export default function ProfileSetting() {
  const { profileData } = useContext(DataContext);
  const [profileValues, setProfileValues] = useState(profileData);
  const { authData } = useAuth();
  const profileImg = authData?.photo;

  const [defaultData, setDefaultData] = useState({
    allCities: {},
    allGametypes: {},
  });

  console.log("defaultData", defaultData);

  // if (profileValues.description === null) {
  //   setProfileValues({ ...profileValues, description: "" });
  // }

  return (
    <section className="p-8 md:px-4">
      <form className="flex flex-col gap-10">
        <div className="flex mdg:flex-col justify-between items-start gap-6">
          <div className="w-full flex flex-col gap-10 mdg:gap-6 mdg:order-2">
            <div>
              <TitleBlock title="你的名字">
                <TextInput
                  type="text"
                  inputName="nickName"
                  value={profileValues.nickName}
                  onChange={() => {}}
                />
              </TitleBlock>
            </div>
            <div>
              <TitleBlock title="帳號">
                <TextInput
                  type="email"
                  inputName="email"
                  value={profileValues.email}
                  readOnly
                />
              </TitleBlock>
            </div>
            <div>
              <h3 className={`${inputTitleStyle} mb-4`}>密碼</h3>
              <Link href="/" className="no-underline">
                <span className="text-blue-dark md:text-sm">重設新的密碼</span>
              </Link>
            </div>
            <div>
              <TitleBlock
                title="地區"
                description="最多選擇 3 個"
                direction="col"
              >
                <SelectInput
                  inputName="cities"
                  value={profileValues.cities.toString()}
                  defaultText="高雄市"
                  options={[]}
                  onChange={() => {}}
                />
              </TitleBlock>
            </div>
          </div>
          <div className="w-full flex flex-col mdg:flex-row justify-center items-center gap-1 md:gap-6 bg-yellow-tint px-20 py-4 mdg:px-0 mdg:py-3 mdg:order-1">
            <div className="text-center">
              <h3 className="text-lg md:text-md">大頭貼</h3>
              <p className="text-sm md:text-xs text-gray-500 mt-1">
                圖片需小於 2MB
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              {profileImg ? (
                <Image
                  src={profileImg}
                  alt="userName"
                  widthProp="w-[145px] md:w-[108px]"
                  heightProp="h-[145px] md:h-[108px]"
                />
              ) : (
                <div className="w-[145px] md:w-[108px] h-[145px] md:h-[108px]"></div>
              )}

              <Button type="button" appearance="white" rounded>
                <p className="font-semibold text-sm md:text-xs w-[200px]">
                  變更大頭貼
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-6">
          <div>
            <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>喜好遊戲種類</h3>
            <p className={`${inputDescStyle} mb-4 md:mb-2`}>最多選擇3個</p>
            <div className="flex flex-wrap gap-3">
              <div className="w-full">
                <PreferenceBlock isActive={false}>不限定</PreferenceBlock>
              </div>
              <PreferenceBlock isActive={false}>派對遊戲</PreferenceBlock>
              <PreferenceBlock isActive={false}>陣營遊戲</PreferenceBlock>
              <PreferenceBlock isActive={false}>心機遊戲</PreferenceBlock>
              <PreferenceBlock isActive={true}>卡牌遊戲</PreferenceBlock>
              <PreferenceBlock isActive={true}>兒童遊戲</PreferenceBlock>
              <PreferenceBlock isActive={false}>家庭遊戲</PreferenceBlock>
              <PreferenceBlock isActive={true}>抽象遊戲</PreferenceBlock>
              <PreferenceBlock isActive={false}>劇本殺</PreferenceBlock>
            </div>
          </div>
          <div>
            <TextArea
              title="個人簡介"
              inputName="description"
              placeholder="輸入你的自我介紹"
              maxLength={100}
              rows={4}
              value={profileValues.description}
              onChange={() => {}}
            />
          </div>
        </div>
      </form>
      <div className="flex gap-6 md:gap-4 justify-center items-center mt-10 md:mt-8">
        <Button type="submit" appearance="white" className="w-full" rounded>
          <span className="text-xl md:text-md">放棄變更</span>
        </Button>
        <Button type="submit" appearance="black" className="w-full" rounded>
          <span className="text-xl md:text-md">儲存</span>
        </Button>
      </div>
    </section>
  );
}
