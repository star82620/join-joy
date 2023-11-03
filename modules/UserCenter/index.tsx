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
import {
  NavSetType,
  NavIdType,
  SubItemType,
  ActiveNavIdType,
  SetIconAttrType,
} from "./date";
import UserNavBar from "./UserNavBar";

const navSet: NavSetType[] = [
  { id: "profile-setting", text: "個人檔案", component: <ProfileSetting /> },
  {
    id: "my-groups",
    text: "我的揪團",
    subItem: [
      {
        id: "my-groups-leader",
        text: "我開的揪團",
        component: <MyGroupsLeader />,
      },
      {
        id: "my-groups-member",
        text: "我加入的揪團",
        component: <MyGroupsMember />,
      },
    ],
  },
  { id: "my-following", text: "我的追蹤", component: <MyFollowing /> },
  { id: "my-notification", text: "我的通知", component: <MyNotification /> },
];

export default function UserCenter() {
  const [activeNav, setActiveNav] = useState<NavIdType>("my-groups-leader");
  const [openSubList, setOpenSubList] = useState(true);

  const toggleActiveNav = (nav: NavSetType): void => {
    if (nav.subItem) {
      setOpenSubList(!openSubList);
      setActiveNav(nav.subItem[0].id);
      return;
    }

    setActiveNav(nav.id);
    setOpenSubList(false);
  };

  const toggleActiveSubNav = (subNav: SubItemType): void =>
    setActiveNav(subNav.id);

  const setIconImg = (nav: NavSetType, attr: SetIconAttrType) => {
    if (!nav.id) return "profile-center";
    const id: NavIdType = nav.id;
    const activeId: ActiveNavIdType = `${nav.id}-active`;
    const isActive = nav.subItem
      ? activeNav.includes(nav.id)
      : activeNav === nav.id;
    const result = isActive
      ? userNavIcons[activeId][attr]
      : userNavIcons[id][attr];
    return result;
  };

  return (
    <section className="container flex items-start gap-9">
      <div className="w-[216px] h-[1500px]">
        <ModalWrapper title="" layout="secondary">
          <UserNavBar
            navSet={navSet}
            activeNav={activeNav}
            openSubList={openSubList}
            setIconImg={setIconImg}
            toggleActiveNav={toggleActiveNav}
            toggleActiveSubNav={toggleActiveSubNav}
          />
        </ModalWrapper>
      </div>
      <div className="grow">
        <ModalWrapper title="我的個人檔案" layout="primary">
          content： {activeNav}
        </ModalWrapper>
      </div>
    </section>
  );
}
