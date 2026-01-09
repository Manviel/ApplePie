const timeSince = () => {
  const leapYear = 365.25;
  const today = new Date();
  const firstDay = new Date(2018, 9, 1);
  const daysDiff = Math.ceil(
    Math.abs(today - firstDay) / (1000 * 60 * 60 * 24)
  );
  const years = Math.floor(daysDiff / leapYear);
  const remainingDays = Math.floor(daysDiff - years * leapYear);
  const months = Math.floor((remainingDays / leapYear) * 12);
  const days = Math.ceil(
    daysDiff - (years * leapYear + (months / 12) * leapYear)
  );

  return `${years} years ${months} months ${days} days`;
};

document.getElementById("exp").innerText = timeSince();
