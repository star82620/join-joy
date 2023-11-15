export default function setGroupStatus(endTime: string, status: string) {
  const now = new Date();
  const today = now.toISOString();

  // 時間已過或者團的狀態為已結束
  if (endTime < today || status === "已結束") return "closed";

  // 審核中的團員
  if (status === "pending") return "pending";

  return "member";
}
