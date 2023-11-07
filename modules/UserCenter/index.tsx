import React, { useState } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProfileSetting from "./ProfileSetting";
import MyGroupsLeader from "./MyGroupsLeader";
import MyGroupsMember from "./MyGroupsMember";
import icons from "@/constants/iconsPackage/userNavIcons";
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
import fetchApi from "@/common/helpers/fetchApi";

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
  const [activeNav, setActiveNav] = useState<NavIdType>("profile-setting");
  const [openSubList, setOpenSubList] = useState(false);

  const toggleActiveNav = (nav: NavSetType): void => {
    if (nav.subItem) {
      setOpenSubList(!openSubList);
      setActiveNav(nav.subItem[0].id);
      return;
    }

    setActiveNav(nav.id);
    setOpenSubList(false);

    // 優化項目：點擊有 subItem、已經作用的 Nav 時，不要改變 activeNav
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
    const result = isActive ? icons[activeId][attr] : icons[id][attr];
    return result;
  };

  const selectActive = () => {
    // 先找出有符合 activeNav 的項目，find 會回傳第一個 true 的值，所以我得到的是一個符合的物件
    // 如果有 subItem 的話，確定這些 subItem 中有沒有符合的項目，有的話回傳 true 的值，我得到一整包 item 物件
    const activeItem = navSet.find((item) => {
      if (item.id === activeNav) return true;
      if (item.subItem) {
        const isSubItemActive = item.subItem.some((subItem) => {
          return subItem.id === activeNav;
        });

        return isSubItemActive;
      }
      return false;
    });

    if (activeItem?.id === activeNav) return activeItem;

    // 如果有 activeItem 且有 subItem
    if (activeItem?.subItem) {
      const activeSubItem = activeItem.subItem.find((subItem) => {
        if (subItem.id === activeNav) return true;
      });

      if (!activeSubItem) return navSet[0];

      return activeSubItem;
    }

    // 如果上述都不成立，就預設回傳第一筆項目
    return navSet[0];
  };

  return (
    <section className="container flex items-start gap-9 lg:gap-6">
      <div className="w-[216px] h-[1500px] md:hidden">
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
        <ModalWrapper title={selectActive().text} layout="primary">
          {selectActive().component}
        </ModalWrapper>
      </div>
    </section>
  );
}
