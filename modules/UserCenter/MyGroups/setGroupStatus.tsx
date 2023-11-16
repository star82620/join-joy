import { GroupStatusType, MemberStatusType } from "@/constants/globalTypes";

// 團的狀態 groupStatus
export default function setGroupStatus(
  endTime: string,
  groupStatus: GroupStatusType,
  memberStatus: MemberStatusType
) {
  const now = new Date();
  const today = now.toISOString();
  const isLeader = memberStatus === "leader";
  const isMember = memberStatus === "member";

  // 時間已過或者團的狀態為已結束
  if (endTime > today || groupStatus === "已結束") return "closed";

  if (groupStatus === "開團中" && isLeader) return "opening";

  if (groupStatus === "開團中" && isMember) return "member";

  if (groupStatus === "已失效") return "cancel";

  if (groupStatus === "已預約") return "reserved";

  return memberStatus;
}
