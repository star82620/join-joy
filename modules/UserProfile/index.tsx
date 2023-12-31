import React, { useState } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import FileWrapper from "@/common/components/FileWrapper";
import ProfileImg from "@/common/components/ProfileImg";
import { ReturnComponentType } from "@/common/components/FileWrapper/data";
import checkIsFollowed from "@/common/helpers/checkIsFollowed";
import TagBlock from "./TagBlock";
import GroupsList from "./GroupsList";
import Comments from "./Comments";
import { selectActiveComponent } from "@/common/helpers/selectActiveComponent";
import FollowingButton from "@/common/components/FollowingButton";
import { userData, tabSet, ActiveTabType } from "./data";

export default function UserProfile() {
  const isFollowed = checkIsFollowed();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("groups-list");
  const { userName, profileImg, description, cities, gameTypes } = userData;
  const returnComponent: ReturnComponentType = {
    "groups-list": <GroupsList />,
    comments: <Comments />,
  };

  return (
    <div className="container">
      <div className="m-auto flex lg:flex-col justify-center gap-9 lg:max-w-[720px] md:w-full">
        <section className="w-[314px] lg:w-full">
          <ModalWrapper title="關於我" layout="primary">
            <div className="px-9 py-12 lg:px-16 md:px-8 md:py-4 flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-start md:flex-col md:justify-center md:items-center">
              <div className="flex flex-col justify-center items-center gap-6 lg:gap-3">
                <ProfileImg
                  src={profileImg}
                  alt={userName}
                  sizeStyle="w-28 h-28"
                />
                <h1 className="text-lg lg:text-md font-semibold leading-[1.2] text-center">
                  {userName}
                </h1>
                <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:text-sm font-semibold leading-6 text-center -mt-3 lg:-mt-[10px]">
                  {cities.map((city, index) => {
                    const cityStyle =
                      index !== cities.length - 1
                        ? "lg:after:content-['、']"
                        : "";
                    return (
                      <p key={city} className={cityStyle}>
                        {city}
                      </p>
                    );
                  })}
                </div>
                <FollowingButton isFollowed={isFollowed} />
              </div>

              <div className="flex flex-col justify-center items-center gap-6">
                <div>
                  <h3 className="text-center lg:text-sm">喜好遊戲種類</h3>
                  <div className="flex flex-col lg:flex-row gap-y-4 gap-x-3 mt-3 md:mt-2">
                    {gameTypes.map((type) => (
                      <TagBlock key={type} content={type} />
                    ))}
                  </div>
                </div>
                <div className="lg:w-[336px] md:w-[264px]">
                  <h3 className="text-center lg:text-sm">簡介</h3>
                  <p className="text-sm mt-3 md:mt-1">
                    {description}
                    <span className="text-blue-dark underline">顯示更多</span>
                  </p>
                </div>
              </div>
            </div>
          </ModalWrapper>
        </section>

        <FileWrapper
          tabSet={tabSet}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {selectActiveComponent(activeTab, returnComponent)}
        </FileWrapper>
      </div>
    </div>
  );
}
