import React from "react";
import Image from "next/image";
import Link from "./GeneralLink";

type dataType = {
  href: string;
  img: Record<string, string>;
  content: string;
};
type dataSetType = dataType[];
type NavbarItemProps = {
  data: dataType;
};

// 這些資料移出去 Header
const dataSet: dataSetType = [
  {
    href: "/user-center",
    img: {
      src: "/images/icon-header-user",
      alt: "usercenter",
    },
    content: "我的個人資訊",
  },
  // { href: "", img:{src: "", alt: ""}, content: "" },
];

function NavbarItem({ data }: NavbarItemProps) {
  const { href, img, content } = data;
  return (
    <Link href={href} className="flex justify-center items-center p-3 border">
      <Image src={img.src} alt={img.alt} width="24" height="24" />
      <span>{content}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <ul className="">
      {dataSet.map((data: dataType) => {
        return (
          <li key={data.href}>
            <NavbarItem data={data} />
          </li>
        );
      })}
    </ul>
  );
}