export function convertToISO(date: String, time: String) {
  if (!date || !time) return "";

  const dateTime = `${date}T${time}:00.000Z`;

  return dateTime;
}
