import React from "react";
import Image from "next/image";
import Link from "./GeneralLink";

type dataType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
};
type dataSetType = dataType[];
type NavbarItemProps = {
  data: dataType;
};

// 這些資料移出去 Header
const dataSet: dataSetType = [
  {
    href: "user-center",
    imageSrc: "/images/icon-header-user",
    imageAlt: "usercenter",
    content: "我的個人資訊",
  },
  { href: "", imageSrc: "", imageAlt: "", content: "" },
];

function NavbarItem({ data }: NavbarItemProps) {
  const { href, imageSrc, imageAlt, content } = data;
  return (
    <Link
      href={`/${href}`}
      className="flex justify-center items-center p-3 border"
    >
      <Image src={imageSrc} alt={imageAlt} width="24" height="24" />
      <span>{content}</span>
    </Link>
  );
}

export default function HeaderUserNavbar() {
  return (
    <ul className="">
      {dataSet.map((data: dataType) => {
        console.log(data);
        return (
          <li key={data.href}>
            <NavbarItem data={data} />
          </li>
        );
      })}
    </ul>
  );
}
