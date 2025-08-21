export default function FormatDate(date) {
  let dayNo = date.getDate();
  let year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getSuffix(dayNo) {
    const number = dayNo.toString();
    if (
      number.endsWith("11") ||
      number.endsWith("12") ||
      number.endsWith("13")
    ) {
      return "th";
    }

    const lastDigit = number.slice(-1);

    if (lastDigit === "1") {
      return "st";
    } else if (lastDigit === "2") {
      return "nd";
    } else if (lastDigit === "3") {
      return "rd";
    } else {
      return "th";
    }
  }

  let month = months[date.getMonth()];
  let suffix = getSuffix(dayNo);

  return {
    day: { day },
    dayNo: { dayNo },
    suffix: { suffix },
    month: { month },
    year: { year },
  };
}
