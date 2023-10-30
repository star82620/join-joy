import ModalWrapper from "@/common/components/ModalWrapper";
import WrapperFile from "@/common/components/WrapperFile";
import React, { useState } from "react";
import { activeTabType, tabSet } from "./data";

// run 要出哪個元件的，可以寫成一個通用元件
// function selectActiveTab(activeTab: UserTabNameType) {
//   const returnComponent: ReturnComponentType = {
//     "groups-list": <GroupsList />,
//     comments: <Comments />,
//   };
//   return returnComponent[activeTab] || null;
// }

export default function StoreProfile() {
  const [activeTab, setActiveTab] = useState<activeTabType>("schedule");

  return (
    <section className="container flex flex-wrap gap-6">
      <div className="grow">
        <ModalWrapper title="店家資訊" layout="primary">
          <div className="px-8 py-6 md:px-3 md:py-4">六角桌遊店</div>
        </ModalWrapper>
      </div>
      <div className="flex flex-col gap-6 md:hidden">
        <ModalWrapper title="地圖" layout="secondary">
          iframe
        </ModalWrapper>
        <ModalWrapper title="綜合評價" layout="secondary">
          <div className="px-4 py-6"></div>
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
