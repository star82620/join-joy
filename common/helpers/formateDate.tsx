const defaultDate = {
  groupDate: "",
  formattedStartTime: "",
  formattedEndTime: "",
};

function formatGroupDate(startTime: string, endTime: string) {
  if (!startTime || !endTime) return defaultDate;

  const groupDate = startTime.split("T")[0].replaceAll("-", "/");
  const formattedStartTime = startTime.split("T")[1].substring(0, 5);
  const formattedEndTime = endTime.split("T")[1].substring(0, 5);

  const result = {
    groupDate: groupDate,
    formattedStartTime: formattedStartTime,
    formattedEndTime: formattedEndTime,
  };
  return result;
}

export default formatGroupDate;
