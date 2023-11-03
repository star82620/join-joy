import React, { useState } from "react";
import Link from "@/common/components/GeneralLink";
import ProfileImg from "@/common/components/ProfileImg";
import FillImage from "@/common/components/FillImage";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProfileSetting from "./ProfileSetting";
import MyGroupsLeader from "./MyGroupsLeader";
import MyGroupsMember from "./MyGroupsMember";
import { userNavIcons } from "@/constants/iconsPackage";
import MyFollowing from "./MyFollowing";
import MyNotification from "./MyNotification";
import { NavSetType, NavIdType, ActiveNavIdType } from "./date";

export default function UserCenter() {
  const [activeTab, setActiveTab] = useState("profile-setting");

  const navSet: NavSetType[] = [
    { id: "profile-setting", text: "個人檔案", component: <ProfileSetting /> },
    {
      id: "my-groups",
      text: "我的揪團",
      subItem: [
        { id: "leader", text: "我開的揪團", component: <MyGroupsLeader /> },
        { id: "member", text: "我加入的揪團", component: <MyGroupsMember /> },
      ],
    },
    { id: "my-following", text: "我的追蹤", component: <MyFollowing /> },
    { id: "my-notification", text: "我的通知", component: <MyNotification /> },
  ];
  const d = () => {};
  const defaultStyle = "";
  const activeStyle = "";
  const setIconSrc = (nav: NavSetType) => {
    if (!nav.id) return "";
    const id: NavIdType = nav.id;
    const activeId: ActiveNavIdType = `${nav.id}-active`;
    const iconSrc =
      activeTab === id ? userNavIcons[activeId].src : userNavIcons[id].src;
    return iconSrc;
  };
  const setIconAlt = (nav: NavSetType) => {
    if (!nav.id) return "";
    return userNavIcons[nav.id].alt;
  };

  return (
    <section className="container flex items-start gap-9">
      <div className="w-[216px]">
        <ModalWrapper title="" layout="secondary">
          <section className="flex flex-col">
            <div className="flex flex-col items-center py-4">
              <ProfileImg
                src="/images/photo-user-000.png"
                alt="userName"
                widthStyle="w-16 md:w-10"
                heightStyle="h-16 md:h-16"
              />
              <p className="mt-3 text-center text-lg font-semibold">多多</p>
            </div>
            <nav className="px-1">
              <ul className="flex flex-col gap-1">
                {navSet.map((nav: NavSetType) => {
                  return (
                    <li
                      key={nav.id}
                      className={`p-3 flex gap-3 ${defaultStyle} rounded bg-yellow-tint`}
                      onClick={d}
                    >
                      <FillImage
                        src={setIconSrc(nav)}
                        alt={setIconAlt(nav)}
                        widthStyle="w-6"
                        heightStyle="h-6"
                      />
                      <span className="font-semibold ">{nav.text}</span>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div>
              <FillImage
                src={userNavIcons["logout"].src}
                alt={userNavIcons.logout.alt}
                widthStyle="w-6"
                heightStyle="w-6"
              />
              登出
            </div>
          </section>
        </ModalWrapper>
      </div>
      <div className="grow">
        <ModalWrapper title="我的個人檔案" layout="primary">
          content
        </ModalWrapper>
      </div>
    </section>
  );
}
