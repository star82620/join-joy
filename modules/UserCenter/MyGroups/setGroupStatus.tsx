import { StatusType } from "@/constants/globalTypes";

export default function setGroupStatus(endTime: string, status: StatusType) {
  const now = new Date();
  const today = now.toISOString();

  // 時間已過或者團的狀態為已結束
  if (endTime < today || status === "已結束") return "closed";

  if (status === "已失效") return "cancel";
  if (status === "已預約") return "reserved";
  if (status === "開團中") return "opening";

  return status;
}
