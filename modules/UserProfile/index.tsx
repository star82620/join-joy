import React, { useContext, useState } from "react";
import Image from "next/image";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import Wrapper from "@/common/components/Wrapper";
import TagBlock from "@/common/components/TagBlock";
import WrapperFile from "@/common/components/WrapperFile";
import GroupsList from "./GroupsList";
import Comments from "./Comments";
import { tabSet } from "./data";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("groups-list");

  return (
    <div className="container">
      <div className="m-auto flex lg:flex-col justify-center gap-9 lg:max-w-[720px] md:w-full">
        <section className="w-[314px] lg:w-full">
          <Wrapper title="關於我" contentStyle="" hideShadow={true}>
            <div className="px-9 py-12 lg:px-16 md:px-8 md:py-4 flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-start md:flex-col md:justify-center md:items-center">
              <div className="flex flex-col justify-center items-center gap-6 lg:gap-3">
                <div className="w-28 h-28 rounded-full border-2 border-white outline outline-2 outline-gray-950 relative">
                  <Image
                    src="/images/photo-user-000.png"
                    alt="name"
                    fill={true}
                    className="object-contain rounded-full"
                  />
                </div>
                <h1 className="text-lg lg:text-md font-semibold leading-[1.2] text-center">
                  多多
                </h1>
                <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:text-sm font-semibold leading-6 text-center -mt-3 lg:-mt-[10px]">
                  <p className="lg:after:content-['、']">台北市</p>
                  <p className="lg:after:content-['、']">台北市</p>
                  <p>台北市</p>
                </div>
                <Button
                  type="button"
                  appearance="orange"
                  className="text-lg lg:text-md leading-[1.2]"
                >
                  <span className="after:content-[''] after:inline-block after:align-bottom after:w-6 after:h-6 after:bg-follow-true after:bg-center after:bg-no-repeat after:ml-3 leading-6 font-semibold text-lg md:text-md md:leading-5 md:after:w-5 md:after:h-5">
                    已追蹤
                  </span>
                </Button>
              </div>

              <div className="flex flex-col justify-center items-center gap-6">
                <div>
                  <h3 className="text-center lg:text-sm">喜好遊戲種類</h3>
                  <div className="flex flex-col lg:flex-row gap-y-4 gap-x-3 mt-3 md:mt-2">
                    <TagBlock content="派對遊戲" className="lg:text-sm" />
                    <TagBlock content="陣營遊戲" className="lg:text-sm" />
                    <TagBlock content="策略遊戲" className="lg:text-sm" />
                  </div>
                </div>
                <div className="lg:w-[336px] md:w-[264px]">
                  <h3 className="text-center lg:text-sm">簡介</h3>
                  <p className="text-sm mt-3 md:mt-1">
                    嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（汪汪）嗨！大家好，我叫多多，歡迎找我揪團喔喔喔...
                    <span className="text-blue-dark underline">顯示更多</span>
                  </p>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>

        <WrapperFile
          tabSet={tabSet}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {activeTab === "groups-list" && <GroupsList />}
          {activeTab === "comments" && <Comments />}
        </WrapperFile>
      </div>
    </div>
  );
}
