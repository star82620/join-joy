import ModalWrapper from "@/common/components/ModalWrapper";
import WrapperFile from "@/common/components/WrapperFile";
import React, { useState } from "react";
import RatingDetails from "@/common/components/CommentsSection/RatingDetails";
import Rating from "@/common/components/CommentsSection/Rating";
import { AverageScoreRecordType } from "@/common/components/CommentsSection/data";
import { activeTabType, tabSet, commentsData } from "./data";
import ProfileImg from "@/common/components/ProfileImg";

// run 要出哪個元件的，可以寫成一個通用元件
// function selectActiveTab(activeTab: UserTabNameType) {
//   const returnComponent: ReturnComponentType = {
//     "groups-list": <GroupsList />,
//     comments: <Comments />,
//   };
//   return returnComponent[activeTab] || null;
// }

// 會用到的資料：店家資料、Tab、評價、是否已追蹤、
export default function StoreProfile() {
  const [activeTab, setActiveTab] = useState<activeTabType>("schedule");

  const { comments, averageScore } = commentsData;
  const overallScore =
    typeof averageScore !== "number" ? averageScore.overall : averageScore; //這有點奇怪？

  return (
    <section className="container flex flex-wrap gap-6">
      <div className="grow">
        <ModalWrapper title="店家資訊" layout="primary">
          <div className="px-8 py-6 md:px-3 md:py-4">
            <ProfileImg imgSet={} />
            六角桌遊店
          </div>
        </ModalWrapper>
      </div>
      <div className="flex flex-col gap-6 md:hidden">
        <ModalWrapper title="地圖" layout="secondary">
          <div className="w-[304px] h-[208px] bg-gray-200 text-center">map</div>
        </ModalWrapper>
        <ModalWrapper title="綜合評價" layout="secondary">
          <div className="px-4 py-6">
            <div className="flex items-center p-2 bg-yellow-tint rounded border-2 shadow-window  mb-6">
              <div className="grow">
                <p className="text-lg font-semibold leading-[1.2]">整體評分</p>
                <p className="mt-2">{comments.length} 評語</p>
              </div>
              <Rating score={overallScore} />
            </div>
            <RatingDetails averageScore={averageScore} direction="col" />
          </div>
        </ModalWrapper>
      </div>
      <div className="w-full h-full">
        <WrapperFile
          tabSet={tabSet}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          可預約時間
        </WrapperFile>
      </div>
    </section>
  );
}
