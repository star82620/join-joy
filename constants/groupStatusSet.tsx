import {
  GroupStatusSetType,
  MyGroupStatusSetType,
} from "./types/apiTypes/group";

// 我的揪團列表
export const myGroupStatusSet: MyGroupStatusSetType = {
  pending: {
    text: "審核中",
    style: "groupStatusPending",
  },
  member: {
    text: "已加入",
    style: "groupStatusMember",
  },
  opening: {
    text: "開團中",
    style: "groupStatusOpening",
  },
  reserved: {
    text: "已預約",
    style: "groupStatusReserved",
  },
  closed: {
    text: "已結束",
    style: "groupStatusClosed",
  },
  cancel: {
    text: "已取消",
    style: "groupStatusCancel",
  },
};

// 揪團狀態
export const groupStatusSet: GroupStatusSetType = {
  已結束: {
    text: "已結束",
    style: "groupStatusClosed",
  },
  已失效: {
    text: "已取消",
    style: "groupStatusCancel",
  },
  已預約: {
    text: "已預約",
    style: "groupStatusReserved",
  },
  開團中: {
    text: "開團中",
    style: "groupStatusOpening",
  },
};
