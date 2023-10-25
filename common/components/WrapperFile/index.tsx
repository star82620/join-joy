import React from "react";
import Image from "next/image";

const tabSet = [
  {
    tabName: "groups-list",
    tabText: "揪團清單",
    img: {
      src: "/images/icon-lists-light.svg",
      alt: "icon-lists",
      width: 24,
      height: 24,
    },
  },
  {
    tabName: "comments",
    tabText: "綜合評價",
    img: {
      src: "/images/icon-comments-light.svg",
      alt: "icon-comments",
      width: 24,
      height: 24,
    },
  },
  {
    tabName: "other",
    tabText: "其他",
    img: {
      src: "/images/icon-location-light.svg",
      alt: "icon-comments",
      width: 24,
      height: 24,
    },
  },
];

type imgType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type TabBlockProps = {
  tabName: string;
  tabText: string;
  img: imgType;
  zIndex: number;
  isActive: boolean;
};

const activeTag = "comments";
const TabBlock = ({
  tabName,
  tabText,
  img,
  zIndex,
  isActive,
}: TabBlockProps) => {
  const activeStyle =
    "pb-[10px] border-l-[3px] rounded-tl-md bg-yellow-dark z-10";
  const defaultStyle = "pb-2 border-gray-400 text-gray-600 bg-gray-200";

  const toggleImgSrc = () => {
    const activeImg = img.src.replace("light", "dark");
    const result = isActive ? activeImg : img.src;
    return result;
  };
  const imgSrc = toggleImgSrc();

  return (
    <p
      className={`pt-2 px-6 -ml-3 rounded-tr-md border-[3px] border-l-0 border-b-0 text-lg font-semibold leading-1 first:rounded-tl-md first:border-l-[3px] first:ml-0
    ${isActive ? activeStyle : defaultStyle} z-${zIndex}`}
      // style={{ zIndex: zIndex }}
      data-tab={tabName}
    >
      <Image
        src={imgSrc}
        width={img.width}
        height={img.height}
        alt={img.alt}
        className="inline align-middle"
      />
      <span className="ml-2 align-middle">{tabText}</span>
    </p>
  );
};

// ---------一整包----------

export default function WrapperFile() {
  return (
    <div className="flex items-start absolute">
      {tabSet.map((tab, index) => {
        const isActive = activeTag === tab.tabName ? true : false;
        return (
          <TabBlock
            key={tab.tabName}
            zIndex={tabSet.length - index}
            isActive={isActive}
            {...tab}
          />
        );
      })}

      {/* 只有第一個才有露出左邊圓角 */}

      {/* tab，跑 map 吃 children */}
    </div>
  );
}
