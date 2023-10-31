import React, { useContext, useState } from "react";
import Image from "next/image";
import Button from "@/common/components/GeneralButton";
import ModalWrapper from "@/common/components/ModalWrapper";
import WrapperFile from "@/common/components/WrapperFile";
import checkIsFollowed from "@/common/helpers/checkIsFollowed";
import TagBlock from "./TagBlock";
import GroupsList from "./GroupsList";
import Comments from "./Comments";
import {
  ReturnComponentType,
  TabNameType,
} from "@/common/components/WrapperFile/data";
import { userData, tabSet, ActiveTabType } from "./data";

export default function UserProfile() {
  const isFollowed = checkIsFollowed();
  const [activeTab, setActiveTab] = useState<ActiveTabType>("groups-list");
  const { userName, userImg, description, cities, gameTypes } = userData;

  function selectActiveTab(activeTab: TabNameType) {
    const returnComponent: ReturnComponentType = {
      "groups-list": <GroupsList />,
      comments: <Comments />,
    };
    return returnComponent[activeTab] || null;
  }

  return (
    <div className="container">
      <div className="m-auto flex lg:flex-col justify-center gap-9 lg:max-w-[720px] md:w-full">
        <section className="w-[314px] lg:w-full">
          <ModalWrapper title="關於我" layout="primary">
            <div className="px-9 py-12 lg:px-16 md:px-8 md:py-4 flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-start md:flex-col md:justify-center md:items-center">
              <div className="flex flex-col justify-center items-center gap-6 lg:gap-3">
                <div className="relative w-28 h-28 rounded-full border-2 border-white outline outline-2 outline-gray-950">
                  <Image
                    src={userImg}
                    alt={userName}
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
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
                <Button
                  type="button"
                  appearance={isFollowed ? "gray" : "orange"}
                  className="text-lg lg:text-md leading-[1.2]"
                >
                  <span className="flex items-center leading-6 font-semibold text-lg md:text-md md:leading-5">
                    {isFollowed ? "已追蹤" : "追蹤"}
                    <span className="relative inline-block w-6 h-6 md:w-5 md:h-5 ml-1">
                      <Image
                        src={
                          isFollowed
                            ? "/images/icon-check.svg"
                            : "/images/icon-plus.svg"
                        }
                        alt={isFollowed ? "icon-check" : "icon-plus"}
                        fill
                        sizes="100%"
                        className="object-contain align-middle"
                      />
                    </span>
                  </span>
                </Button>
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

        <WrapperFile
          tabSet={tabSet}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {selectActiveTab(activeTab)}
        </WrapperFile>
      </div>
    </div>
  );
}
