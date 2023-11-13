function convertToISO(date: String, time: String) {
  const dateTime = `${date}T${time}`;

  const dateObj = new Date(dateTime);

  return dateObj.toISOString();
}

export default convertToISO;
