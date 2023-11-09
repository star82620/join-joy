function formatGroupDate(startTime: string, endTime: string) {
  const groupDate = startTime.split("T")[0].replaceAll("-", "/");
  const formattedStartTime = startTime.split("T")[1].substring(0, 5);
  const formattedEndTime = endTime.split("T")[1].substring(0, 5);
  return {
    groupDate: groupDate,
    formattedStartTime: formattedStartTime,
    formattedEndTime: formattedEndTime,
  };
}

export default formatGroupDate;
