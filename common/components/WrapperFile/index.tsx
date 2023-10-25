import React from "react";
import Image from "next/image";

const tabSet = [
  {
    tabName: "groups-list",
    tabText: "揪團清單",
    img: {
      src: "/images/icon-lists.svg",
      alt: "icon-lists",
      width: 24,
      height: 24,
    },
  },
  {
    tabName: "comments",
    tabText: "綜合評價",
    img: {
      src: "/images/icon-comments.svg",
      alt: "icon-conmments",
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

type TabSetType = {
  tabName: string;
  tabText: string;
  img: imgType;
  zIndex: number;
};

const isActive = false;
const TabBlock = ({ tabName, tabText, img, zIndex }: TabSetType) => {
  const activeStyle = "pb-[11px] bg-yellow-dark z-10";
  const defaultStyle = "pb-2 border-gray-400 text-gray-600 bg-gray-200";
  // const order = `order-{}`
  const zindex = `z-[${zIndex}]`;
  console.log(zIndex);
  return (
    <p
      data-tab={tabName}
      className={`pt-2 px-6 -ml-1 rounded-tr-md border-[3px] border-l-0 border-b-0 text-lg font-semibold leading-1 first:rounded-t-md first:border-l-[3px] first:ml-0
      ${isActive ? activeStyle : defaultStyle}`}
      style={{ zIndex: zIndex }}
    >
      <Image
        src={img.src}
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
        return (
          <TabBlock key={tab.tabName} zIndex={tabSet.length - index} {...tab} />
        );
      })}

      {/* 只有第一個才有露出左邊圓角 */}

      {/* tab，跑 map 吃 children */}
    </div>
  );
}
