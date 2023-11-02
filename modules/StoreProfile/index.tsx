import React, { useState } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import { ReturnComponentType } from "@/common/components/WrapperFile/data";
import WrapperFile from "@/common/components/WrapperFile";
import RatingDetails from "@/common/components/CommentsSection/RatingDetails";
import Rating from "@/common/components/CommentsSection/Rating";
import { AverageScoreRecordType } from "@/common/components/CommentsSection/data";
import {
  activeTabType,
  tabSet,
  commentsData,
  storeData,
  icons,
  SelectActiveTabProps,
} from "./data";
import ProfileImg from "@/common/components/ProfileImg";
import Image from "next/image";
import Comments from "./Comments";
import Schedule from "./Schedule";
import Games from "./Games";

const returnComponent: ReturnComponentType = {
  schedule: <Schedule />,
  games: <Games />,
  comments: <Comments />,
};

// 這個後來還是移到 helper 了，後面合併的時候解衝突
function selectActiveTab({ activeTab, returnComponent }: SelectActiveTabProps) {
  return returnComponent[activeTab] || null;
}

// 會用到的資料：店家資料、Tab、評價、是否已追蹤、
export default function StoreProfile() {
  const [activeTab, setActiveTab] = useState<activeTabType>("schedule");
  const {
    storeName,
    profileImg,
    address,
    openingHours,
    phone,
    cost,
    highlights,
    description,
    photos,
  } = storeData;

  const { comments, averageScore } = commentsData;
  const overallScore =
    typeof averageScore !== "number" ? averageScore.overall : averageScore;
  const introList = icons.map((item) => (
    <li key={item.key} className="flex items-center">
      <span className="relative inline-block w-6 h-6 md:w-5 md:h-5">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="100%"
          className="object-contain align-middle"
        />
      </span>
      <span className="ml-3 md:ml-2 md:text-sm">{storeData[item.key]}</span>
    </li>
  ));
  const photosList = photos.map((photo) => (
    <span
      key={photo}
      className="relative inline-block w-[270px] h-[180px] md:w-[180px] md:h-[120px]"
    >
      <Image
        src={photo}
        alt={storeName}
        fill
        sizes="100%"
        className="object-contain align-middle"
      />
    </span>
  ));

  return (
    <section className="container">
      <div className="flex gap-6">
        <div className="grow">
          <ModalWrapper title="店家資訊" layout="primary">
            <div className="flex flex-col gap-8 md:gap-4 px-8 py-6 md:px-3 md:py-4">
              <div>人氣店家</div>
              <div className="flex items-center flex-wrap md:flex-col md:justify-center gap-8 md:gap-4 -mt-5 md:mt-0">
                <ProfileImg
                  img={profileImg}
                  profileName={storeName}
                  widthStyle="w-30 md:w-19"
                  heightStyle="h-30 md:h-19"
                />
                <div className="grow">
                  <div className="flex justify-between lg:flex-wrap md:flex-col md:items-center mb-3 md:mb-4">
                    <h1 className="text-xxl md:text-xl">{storeName}</h1>
                    <div className="flex items-center gap-4 md:gap-2">
                      <div className="px-3 py-2 bg-yellow-neutral">追蹤+</div>
                      <div className="relative inline-block w-6 h-6 md:w-5 md:h-5">
                        <Image
                          src="/images/icon-share.svg"
                          alt="icon-share"
                          fill
                          sizes="100%"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="flex flex-col md:items-center gap-2 md:gap-1">
                      {introList}
                    </ul>
                    <div className="hidden md:block w-full bg-gray-200 mt-2">
                      <iframe
                        width="336"
                        height="76"
                        style={{ border: "0" }}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCKi69OQzm0biwWiO1tQTzAaX5rgt3fx1k&q=${address}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-sm">店家設施</h3>
                <div className="flex gap-2 mt-3 md:mt-1">
                  {/* 這個部分等 API 格式再寫成跑資料 */}
                  <p className="flex items-center gap-1 px-3 py-2 md:px-2 md:py-1 bg-yellow-tint rounded border-[1.5px] md:text-xs">
                    <span className="relative inline-block w-6 h-6 md:w-5 md:h-5">
                      <Image
                        src="/images/store/hightlights/icon-free-food.svg"
                        alt="icon-free-food"
                        fill
                        sizes="100%"
                        className="object-contain align-middle"
                      />
                    </span>
                    免費自助吧
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-sm">店家介紹</h3>
                <p className="text-gray-700 md:text-xs mt-3 md:mt-1">
                  {description}
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-sm">店家環境照片</h3>
                <div className="flex gap-4 md:gap-1 mt-3 md:mt-1 w-full overflow-scroll">
                  {photosList}
                </div>
              </div>
            </div>
          </ModalWrapper>
        </div>
        <div className="md:hidden">
          <div>
            <ModalWrapper title="地圖" layout="secondary">
              <div className="w-[304px] h-[208px] bg-gray-200 text-center">
                <iframe
                  width="304"
                  height="208"
                  style={{ border: "0" }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCKi69OQzm0biwWiO1tQTzAaX5rgt3fx1k&q=${address}`}
                  allowFullScreen
                ></iframe>
              </div>
            </ModalWrapper>
          </div>
          <div className="mt-6">
            <ModalWrapper title="綜合評價" layout="secondary">
              <div className="px-4 py-6">
                <div className="flex items-center p-2 bg-yellow-tint rounded border-2 shadow-window  mb-6">
                  <div className="grow">
                    <p className="text-lg font-semibold leading-[1.2]">
                      整體評分
                    </p>
                    <p className="mt-2">{comments.length} 評語</p>
                  </div>
                  <Rating score={overallScore} />
                </div>
                <RatingDetails averageScore={averageScore} direction="col" />
              </div>
            </ModalWrapper>
          </div>
        </div>
      </div>
      <div className="mt-9 md:mt-8">
        <WrapperFile
          tabSet={tabSet}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {selectActiveTab({ activeTab, returnComponent })}
        </WrapperFile>
      </div>
    </section>
  );
}
