// 我的揪團列表
export type myGroupStatusKeyType = "pending" | "member" | "closed";

export const myGroupStatusSet = {
  pending: {
    text: "審核中",
    style: "groupStatusPending",
  },
  member: {
    text: "已加入",
    style: "groupStatusMember",
  },
  closed: {
    text: "已結束",
    style: "groupStatusOver",
  },
};

// export default myGroupStatusSet;

// 揪團狀態
export type groupStatusKeyType = "已結束" | "已失效" | "開團中";

export const groupStatusSet = {
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
