import { SearchContext } from "@/common/contexts/SearchProvider";
import { searchTabs } from "@/constants/searchTabs";
import React, { useContext } from "react";
import Image from "../../FillImage";

export default function SearchTab() {
  const defaultStyle = "bg-gray-200 text-gray-500";
  const activeStyle = "bg-yellow-tint text-gray-950";

  const searchContext = useContext(SearchContext);
  const { activeTab, setActiveTab } = searchContext;

  return (
    <div className="flex gap-0.5 p-1 bg-yellow-tint font-semibold leading-6 whitespace-nowrap flex-shrink-0">
      {searchTabs.map((tab) => {
        const { tabName, tabText, img } = tab;
        const isActive = activeTab === tabName;
        const tabStyle = isActive ? activeStyle : defaultStyle;
        const setImgSrc = () => {
          const activeImg = img.src.replace("light", "dark");
          const result = isActive ? activeImg : img.src;
          return result;
        };

        const imgSrc = setImgSrc();
        return (
          <div
            key={tabName}
            className={`flex items-center gap-1 px-2 py-1 md:p-1 ${tabStyle}`}
            onClick={() => {
              setActiveTab(tabName);
            }}
          >
            <Image
              src={imgSrc}
              alt={img.alt}
              widthProp="w-5 md:w-4"
              heightProp="h-5 md:h-4"
            />
            {tabText}
          </div>
        );
      })}
    </div>
  );
}
