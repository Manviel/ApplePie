const timeSince = () => {
  const today = new Date();
  const firstDay = new Date(2018, 9, 1);
  const daysDiff = Math.ceil(
    Math.abs(today - firstDay) / (1000 * 60 * 60 * 24)
  );
  const years = Math.floor(daysDiff / 365.25);
  const remainingDays = Math.floor(daysDiff - years * 365.25);
  const months = Math.floor((remainingDays / 365.25) * 12);
  const days = Math.ceil(daysDiff - (years * 365.25 + (months / 12) * 365.25));

  return `${years} years ${months} months ${days} days`;
};

document.getElementById('exp').innerText = timeSince();
