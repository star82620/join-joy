function formatDate(startTime: string, endTime: string) {
  const groupDate = startTime.split("T")[0].replaceAll("-", "/");
  const formatStartTime = startTime.split("T")[1].substring(0, 5);
  const formatEndTime = endTime.split("T")[1].substring(0, 5);
  return {
    groupDate: groupDate,
    formatStartTime: formatStartTime,
    formatEndTime: formatEndTime,
  };
}

export default formatDate;
