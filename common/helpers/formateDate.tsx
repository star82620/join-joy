function formatGroupDate(startTime: string, endTime: string) {
  const formattedGroupDate = startTime.split("T")[0].replaceAll("-", "/");
  const formattedStartTime = startTime.split("T")[1].substring(0, 5);
  const formattedEndTime = endTime.split("T")[1].substring(0, 5);
  return {
    formattedGroupDate,
    formattedStartTime,
    formattedEndTime,
  };
}

export default formatGroupDate;
