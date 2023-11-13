function convertToISO(date: String, time: String) {
  if (!date || !time) return "";

  const dateTime = `${date}T${time}:00.000Z`;
  console.log("date:" + date, "time:" + time);
  console.log("dateTime", dateTime);

  // const dateObj = new Date(dateTime);

  return dateTime;
}

export default convertToISO;
