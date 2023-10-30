import ModalWrapper from "@/common/components/ModalWrapper";
import WrapperFile from "@/common/components/WrapperFile";
import React, { useState } from "react";
import RatingDetails from "@/common/components/CommentsSection/RatingDetails";
import Rating from "@/common/components/CommentsSection/Rating";
import { AverageScoreRecordType } from "@/common/components/CommentsSection/data";
import { activeTabType, tabSet, commentsData, storeData, icons } from "./data";
import ProfileImg from "@/common/components/ProfileImg";
import Image from "next/image";

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
  const {
    storeName,
    profileImg,
    address,
    openingHours,
    phone,
    cost,
    highlights,
    description,
  } = storeData;

  const { comments, averageScore } = commentsData;
  const overallScore =
    typeof averageScore !== "number" ? averageScore.overall : averageScore; //這有點奇怪？

  return (
    <section className="container">
      <div className="flex gap-6">
        <div className="grow">
          <ModalWrapper title="店家資訊" layout="primary">
            <div className="flex flex-col gap-8 md:gap-4 px-8 py-6 md:px-3 md:py-4">
              <div>人氣店家</div>
              <div className="flex items-center md:flex-col md:justify-center gap-8 md:gap-4 -mt-5 md:mt-0">
                <ProfileImg
                  img={profileImg}
                  profileName={storeName}
                  widthStyle="w-30 md:w-19"
                  heightStyle="h-30 md:h-19"
                />
                <div className="grow">
                  <div className="flex justify-between md:flex-col md:items-center mb-3 md:mb-4">
                    <h1 className="text-xxl md:text-xl">六角學院桌遊店</h1>
                    <div>追蹤、分享</div>
                  </div>
                  <div>
                    <ul className="flex flex-col md:items-center gap-2 md:gap-1">
                      {icons.map((item) => (
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
                          <span className="ml-3 md:ml-2 md:text-sm">
                            {storeData[item.key]}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="hidden md:block w-full bg-gray-200 mt-2">
                      手機版 map
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
                  我們擁有超過1000款各式各樣的桌遊，適合所有年齡層和遊戲水平的人們。不管你是初學者還是老手，我們的工作人員都會樂意幫助你找到合適的遊戲，並解釋規則。店內提供舒適的座位和美味的小吃，讓你可以長時間享受遊戲。歡迎來到我們的桌遊店，一起創造美好的遊戲回憶！{" "}
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-sm">店家環境照片</h3>
                <div className="flex gap-4 md:gap-1 mt-3 md:mt-1 w-full overflow-scroll">
                  <span className="relative inline-block w-[270px] h-[180px] md:w-[180px] md:h-[120px]">
                    <Image
                      src="/images/store/photo-store-s0001-1.png"
                      alt="photo-store-s0001-1"
                      fill
                      sizes="100%"
                      className="object-contain align-middle"
                    />
                  </span>
                </div>
              </div>
            </div>
          </ModalWrapper>
        </div>
        <div className="md:hidden">
          <div>
            <ModalWrapper title="地圖" layout="secondary">
              <div className="w-[304px] h-[208px] bg-gray-200 text-center">
                map
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
          可預約時間
        </WrapperFile>
      </div>
    </section>
  );
}
